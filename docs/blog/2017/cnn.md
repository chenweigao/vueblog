# CNN


Filter

使用卷积操作后可能会导致两个问题：

1. 图像的像素越来越小；
2. 边缘像素的丢失
   为解决这个问题，可以使用padding操作，padding分两类：Valid（No Padding）和Same（output size = input size）
   **一般来说，padding取值为奇数(3,5etc)
   parameter sharing** and sparsity of connections

Strided convolution

stride = 2 的时候 (n+2p-f)/2 + 1

Convolutions on RGB image

2 filters = 2 features

channel should be same between input & filter

A  example:

```python
import tensorflow as tf
import numpy as np

M = np.array([
    [1, -1, 0],
    [-1, 2, 1],
    [0, 2, -2]
])

filter_weight = tf.get_variable('weights', [2, 2, 1, 1], initializer=tf.constant_initializer(
    [[1, -1], [0, 2]]
))
biases = tf.get_variable('biases', [1], initializer=tf.constant_initializer(1))

M = np.array(M, dtype='float32')
M = M.reshape(1, 3, 3, 1)

x = tf.placeholder(tf.float32, [1, None, None, 1])

conv = tf.nn.conv2d(x, filter_weight, [1, 2, 2, 1], 'SAME')
bias = tf.nn.bias_add(conv, biases)

pool = tf.nn.avg_pool(x, [1, 2, 2, 1], [1, 2, 2, 1], padding='SAME')

with tf.Session() as sess:
    tf.global_variables_initializer().run()
    convluted_M = sess.run(bias, feed_dict={x: M})
    pooled_M = sess.run(pool, feed_dict={x: M})

    print('convluted_M:\n', convluted_M)
    print('pooled_M:\n', pooled_M)
```

