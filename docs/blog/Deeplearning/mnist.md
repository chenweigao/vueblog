# MNIST, Using LeNet

```python
#mnist_inference.py
import tensorflow as tf

INPUT_NODE = 784
OUTPUT_NODE = 10
LAYER1_NODE = 500

def get_weight_variable(shape, regularizer):
    weights = tf.get_variable("weights", shape, initializer=tf.truncated_normal_initializer(stddev=0.1))
    if regularizer != None: tf.add_to_collection('losses', regularizer(weights))
    return weights


def inference(input_tensor, regularizer):
    with tf.variable_scope('layer1'):

        weights = get_weight_variable([INPUT_NODE, LAYER1_NODE], regularizer)
        biases = tf.get_variable("biases", [LAYER1_NODE], initializer=tf.constant_initializer(0.0))
        layer1 = tf.nn.relu(tf.matmul(input_tensor, weights) + biases)

    with tf.variable_scope('layer2'):
        weights = get_weight_variable([LAYER1_NODE, OUTPUT_NODE], regularizer)
        biases = tf.get_variable("biases", [OUTPUT_NODE], initializer=tf.constant_initializer(0.0))
        layer2 = tf.matmul(layer1, weights) + biases

    return layer2
```
```python
#mnist_test.py
import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data
import mnist_inference
import os

BATCH_SIZE = 100
LEARNING_RATE_BASE = 0.8
LEARNING_RATE_DECAY = 0.99
REGULARIZATION_RATE = 0.0001
TRAINING_STEPS = 30000
MOVING_AVERAGE_DECAY = 0.99
MODEL_SAVE_PATH = "MNIST_model/"
MODEL_NAME = "mnist_model"


def train(mnist):

    x = tf.placeholder(tf.float32, [None, mnist_inference.INPUT_NODE], name='x-input')
    y_ = tf.placeholder(tf.float32, [None, mnist_inference.OUTPUT_NODE], name='y-input')

    regularizer = tf.contrib.layers.l2_regularizer(REGULARIZATION_RATE)
    y = mnist_inference.inference(x, regularizer)
    global_step = tf.Variable(0, trainable=False)


    variable_averages = tf.train.ExponentialMovingAverage(MOVING_AVERAGE_DECAY, global_step)
    variables_averages_op = variable_averages.apply(tf.trainable_variables())
    cross_entropy = tf.nn.sparse_softmax_cross_entropy_with_logits(logits=y, labels=tf.argmax(y_, 1))
	#当分类问题只有一个正确答案时，可以使用sparse_softmax_cross_entropy_with_logits函数来加速交叉熵的计算
    cross_entropy_mean = tf.reduce_mean(cross_entropy)
    loss = cross_entropy_mean + tf.add_n(tf.get_collection('losses'))
	#总损失等于交叉熵损失和正则化损失的和
    learning_rate = tf.train.exponential_decay(
        LEARNING_RATE_BASE,
        global_step,
        mnist.train.num_examples / BATCH_SIZE, LEARNING_RATE_DECAY,
		#过完所有的训练数据需要的迭代次数，dacay_steps和dacay_rate
        staircase=True)
    train_step = tf.train.GradientDescentOptimizer(learning_rate).minimize(loss, global_step=global_step)
    with tf.control_dependencies([train_step, variables_averages_op]):
        train_op = tf.no_op(name='train')


    saver = tf.train.Saver()
    with tf.Session() as sess:
        tf.global_variables_initializer().run()

        for i in range(TRAINING_STEPS):
            xs, ys = mnist.train.next_batch(BATCH_SIZE)
            _, loss_value, step = sess.run([train_op, loss, global_step], feed_dict={x: xs, y_: ys})
            if i % 1000 == 0:
                print("After %d training step(s), loss on training batch is %g." % (step, loss_value))
                saver.save(sess, os.path.join(MODEL_SAVE_PATH, MODEL_NAME), global_step=global_step)


def main(argv=None):
    mnist = input_data.read_data_sets("../../../datasets/MNIST_data", one_hot=True)
    train(mnist)

if __name__ == '__main__':
    tf.app.run()


```
`mnist.train.next_batch(batch_size)`

可以方便使用随机梯度下降，从所有的训练数据中读取一小部分作为一个训练batch。
在损失函数中，每次计算一小部分训练数据的损失函数，这一小部分数据被称之为一个**batch**，每次使用一个batch可以大大减少收敛所需要的迭代次数，同时可以使收敛到的结果更加接近梯度下降的效果。
要很好地理解batch存在的意义，可以对比Full Batch Learning的思想；如果batch_size = 1，那么就变成了“在线学习”，在线学习难以达到收敛。所以，选择一个适当的batch size非常重要，过小可能导致不收敛，过大可能导致迭代速度过慢。

对于**滑动平均模型**，这是一个使模型在测试数据上更robust的方法，在采用随机梯度下降算法训练神经网络时，使用滑动平均模型在很多应用中都可以在一定程度提高数据模型在测试数据上的表现。
要实现这个模型，可以使用TensorFlow提供的

`tf.train.ExponentialMovingAverage`

在实现时，需要提供一个衰减率(dacay)，用于控制模型的更新速度，一般dacay越大模型越趋于稳定，实际应用中一般会设置为一个很接近1的数字，使得模型可以在训练前期更新地更快。

### LeNet实现mnist
```python
import tensorflow as tf

def get_weight_variable(shape, regularizer):
    weights = tf.get_variable(
        "weights", shape, initializer=tf.truncated_normal_initializer(stddev=0.1))
    if regularizer != None:
        tf.add_to_collection('losses', regularizer(weights))
    return weights

def inference(input_tensor, train, regularizer):
    with tf.variable_scope('layer1-conv1'):
        conv1_weights = tf.get_variable("weight", shape=[
                                        5, 5, 1, 32], initializer=tf.truncated_normal_initializer(stddev=1.0))
        # why [5,5,1,32] there? [卷积核高度，卷积核宽度，通道数，卷积核数量]
		#conv2d:Computes a 2-D convolution given 4-D `input` and `filter` tensors.
        conv1_biases = tf.get_variable(
            "bias", [32], dtype=None, initializer=tf.constant_initializer(0.0))
        conv1 = tf.nn.conv2d(input_tensor, conv1_weights,
                             strides=[1, 1, 1, 1], padding='SAME')
        relu1 = tf.nn.relu(tf.nn.bias_add(conv1, conv1_biases))
		#Unlike `tf.add`, the type of `bias` is allowed to differ from `value` in the case where both types are quantized.

    with tf.variable_scope('layer2-pool1'):
        pool1 = tf.nn.max_pool(relu1, ksize=[1, 2, 2, 1], strides=[
                               1, 2, 2, 1], padding='SAME')

    with tf.variable_scope('layer3-conv2'):
        conv2_weights = tf.get_variable("weight", shape=[5, 5, 32, 64])
        # why [5,5,32,64] there
        conv2_biases = tf.get_variable(
            "bias", [64], dtype=None, initializer=tf.constant_initializer(0.0))
        conv2 = tf.nn.conv2d(relu1, conv2_weights, strides=[
                             1, 1, 1, 1], padding='SAME')
        relu2 = tf.nn.relu(tf.nn.bias_add(conv2, conv2_biases))

    with tf.variable_scope('layer4-pool2'):
        pool2 = tf.nn.max_pool(relu2, ksize=[1, 2, 2, 1], strides=[
                               1, 2, 2, 1], padding='SAME')

    pool_shape = pool2.get_shape().as_list()
    nodes = pool_shape[1] * pool_shape[2] * pool_shape[3]
    reshaped = tf.reshape(pool2, [pool_shape[0], nodes])

    with tf.variable_scope('layer5-fc1'):
        fc1_weights = tf.get_variable("weights", shape=[
                                      nodes, 512], initializer=tf.truncated_normal_initializer(stddev=1.0))
        # why there 512
        if regularizer != None:
            tf.add_to_collection('losses', regularizer(fc1_weights))
        fc1_biases = tf.get_variable(
            "bias", [512], dtype=None, initializer=tf.constant_initializer(0.1))
        fc1 = tf.nn.relu(tf.matmul(reshaped, fc1_weights) + fc1_biases)
        # how to think about matmul

        if train:
            fc1 = tf.nn.dropout(fc1, 0.5)

    with tf.variable_scope('layer6-fc2'):
        fc2_weights = tf.get_variable(
            "weights", [512, 10], initializer=tf.truncated_normal_initializer(stddev=1.0))
        if regularizer != None:
            tf.add_to_collection("losses", regularizer(fc2_weights))
        fc2_biases = tf.get_variable(
            "bias", shape=[10], initializer=tf.constant_initializer(0.1))
        logit = tf.matmul(fc1, fc2_weights) + fc2_biases

    return logit
```
