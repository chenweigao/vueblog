# TensorFlow 


Tensorflow中一些简单但是容易忘记的：

```python
import tensorflow as tf
a = tf.matmul(x,w1) #用来表示矩阵的乘法操作

weight = tf.Variable(tf.random_normal([2,3],stddev = 2)) 

bias = tf.Variable(tf.zeros([3]))
#偏置项
```
tf.Variable为初始化变量的操作，tf.random_normal指定了一个2*3的矩阵，元素均值为0，标准差为2，并且，符合正态分布，其他的可以参考tensorflow随机数生成函数


接下来这段代码实现神经网络的**前向传播**过程
```python
import tensorflow as tf

w1 = tf.Variable(tf.random_normal([2,3],stddev=1,seed=1))
w2 = tf.Variable(tf.random_normal([3,1],stddev =1,seed=1))

x = tf.constant([[0.7,0.9]])

a = tf.matmul(x,w1)
y = tf.matmul(a,w2)

sess = tf.Session()

sess.run(w1.initializer)
sess.run(w2.initializer)

print(sess.run(y))
sess.close()
```

**关于placeholder**
一般而言，我们需要使用常量：

`x = tf.constant([[0.7,0.9]])`

但是这样明显加大了tensorflow的计算量，所以引入了placeholder，这时候我们只需要将数据传入计算图，下面是一个例子：

`x = tf.placeholder(tf.float32,shape = (1,2), name = "input")`

其中的shape属性可以不指定，因为数据的维度信息可以根据提供的数据推导得出，但是确定的维度的给出可以降低出错的概论。下面的代码为placeholder实现前向传播算法：
```python
import tensorflow as tf

w1 = tf.Variable(tf.random_normal([2,3], stddev=1.0))
w2 = tf.Variable(tf.random_normal([3,1],stddev=1.0))

x = tf.placeholder(tf.float32,shape=(1,2),name = "input")
a = tf.matmul(x,w1)
y = tf.matmul(a,w2)

sess = tf.Session()
init_op = tf.global_variables_initializer()
sess.run(init_op)

# print(sess.run(y))

print(sess.run(y,feed_dict={x:[[0.7,0.9]]}))
```

需要注意的是被注释的那行代码`# print(sess.run(y))`，如果运行的话，解释器会报告一个错误，这是因为我们需要提供一个feed_dict来指定x的取值。
如果我们需要多个样例的传播结果，只需要：

`x = tf.placeholder(tf.float32,shape=(3,2),name="input")` #3个

然后给出三组数据即可：

`sess.run(y,feed_dict={x:[[0.7,0.9],[0.1,0.4],[0.5,0.8]]})`

而后我们定义loss函数来刻画预测值和真实值之间的差距，然后通过反向传播算法来调整神经网络的取值从而缩小差距
```python
cross_entropy = -tf.reduce_mean(y_ * tf.log(tf.clip_by_value(y,1e-10,1.0)))
train_step = tf.train.AdamOptimizer(learning_rate=0.001).minimize(cross_entropy)
```
cross_entropy定义了真实值和预测值之间的*交叉熵*。
具体而言，交叉熵刚开始的意义是刻画了两个概论分布之间的距离，是分类问题中使用比较广的一种损失函数。在代码中的含义就是y`表示正确结果，y代表预测结果,并且将张量中的数值限制在1E-10~1.0之间，以避免一些运算错误
如果与softmax一起使用的话，tensorflow对这两个功能进行了统一封装，调用

`cross_entropy=tf.nn.softmax_cross_entropy_with_logits(y,y_)`

下面是训练过程开始的代码：
```python
with tf.Session() as sess:
    init_op = tf.global_variables_initializer()
    sess.run(init_op)
    print(sess.run(w1))
    print(sess.run(w2))

    STEPS = 5000
    for i in range(STEPS):
        start = (i * batch_size) % dataset_size
        end = min(start + batch_size, dataset_size)

        sess.run(train_step, feed_dict={x: X[start:end], y_: Y[start:end]})
        if i % 1000 == 0:
            total_cross_entropy = sess.run(cross_entropy,feed_dict={x:X,y_:Y})
            print("After %d training steps,cross entropy is %g"%(i,total_cross_entropy))
    print(sess.run(w1))
    print(sess.run(w2))
```
训练循环了5000次，可以观察到交叉熵的值是越来越小的，这表明预测的结果和真实值的差距越来越小
最后的两行输出表示训练之后神经网络的值

**总结一下，训练神经网络的过程可以分为以下三个步骤：
- 定义网络的结构和前向传播的输出
- 定义损失函数和选择反向传播优化的算法
- 生成会话并且在训练数据上反复运行反向传播优化算法**

有的时候需要自定义损失函数：
```python
import tensorflow as tf 
from numpy.random import RandomState

batch_size = 8

x = tf.placeholder(tf.float32,shape = (None,2),name = 'x-input')
y_ = tf.placeholder(tf.float32,shape = (None,1),name = 'y-input')

w1 = tf.Variable(tf.random_normal([2,1],stddev=1.0,seed = 1.0))
y = tf.matmul(x,w1)

loss_less = 10
loss_more = 1
loss = tf.reduce_mean(tf.where(tf.greater(y,y_),(y-y_)*loss_more,(y_-y)*loss_less))
train_step = tf.train.AdamOptimizer(learning_rate=0.001).minimize(loss)

rdm = RandomState(1)
dataset_size = 128
X = rdm.rand(dataset_size,2)
Y = [[x1+x2+rdm.rand()/10.0-0.05] for (x1,x2) in X]

with tf.Session() as sess:
    init_op = tf.global_variables_initializer()
    sess.run(init_op)
    Steps = 5000
    for i in range(Steps):
        start = (i*batch_size) % dataset_size
        end = min(start+batch_size,dataset_size)
        sess.run(train_step,feed_dict={x:X[start:end] , y_:Y[start:end]})
        print(sess.run(w1))

```

以上自定义了一个损失函数，实际值和预测值之间存在的差值分配不用的系数，我们也可以使用均方误差(MSE)：

`loss = tf.reduce_mean(tf.square(y_-y))`

通过比较输出的结果可以看出，不同的损失函数会对模型产生重要影响。

在优化参数的时候，梯度下降法是最常用的神经网络优化算法，具体而言，对于一个优化算法而言，第一步随机产生一个参数的初始值，然后通过梯度和学习率来更新参数的取值。
梯度下降算法的两个缺陷：第一是可能得到局部最优的结果，第二是计算时间太长，因为要计算所有训练数据的损失函数是非常耗时间的，所以就可以使用随机梯度下降算法，具体而言，就是在每一轮的迭代中，随机优化某一条训练数据上的损失函数，但是随机梯度下降法有的时候甚至无法达到局部最优，所以一般采用**每次计算一小部分训练数据的损失函数**的方法，这一小部分数据称为一个batch。

对于learning_rate，常用的是指数衰减法
```python
global_step = tf.Variable(0)
learning_rate = tf.train.exponential_decay(0.001,global_step, 100 , 0.96 ,staircase=True)
train_step = tf.train.AdamOptimizer(learning_rate).minimize(loss)
```
dacay_steps代表了完整的使用一遍训练数据所需要的迭代轮数（总训练样本数除以每一个batch的训练样本数），staircase的值为True时，global_step/decay_steps会被转化成整数。上面各个参数的含义是每训练100轮后学习率乘以0.96。经验有助于设置好学习率、衰减系数和衰减速度。

```python
batch_size = n

x = tf.placeholder(dtype,shape = (batch_size,2), name)
y_ = tf.placeholder(dtype,shape = (batch_size,1), name)

loss = ..
train_step = tf.train.AdamOptimizer(learning_rate).minimize(loss)

with .. :
	for _ in range(STEPS):
		current_X,surrent_Y = ...
		sess.run(train_step,feed_sict = {x:current_X,y_:current_Y})
```

以上代码概括了一般神经网络的训练大致遵循的过程。
