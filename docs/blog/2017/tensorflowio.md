
# Tensorflow I/O

## Data Download and Extract

Taking *cifar10* as an example, 

```python
DATA_URL = 'https://www.cs.toronto.edu/~kriz/cifar-10-binary.tar.gz'

filename = DATA_URL.split('/')[-1]
filepath = os.path.join(path, filename)
#output: path\filename
```

A programming skill can be use to display the download progress bar:

```python
def _progress(count, block_size, total_size):
  sys.stdout.write('\r>> Downloading %s %.1%%' % (filename,
                                                 100.0 * count * block_size / total_size))
  sys.stdout.flush()
```

In this code, the function `write()`  is just same as function `print()`, but it can be better used in file status print.

If you want to download models form internet, some **URL** API can be used:

```python
from six.moves import urllib
files, header = urllib.request.urlretrieve(DATA_URL, filepath, _progress)
```

Then show the file info such as file size:

```python
statinfo = os.stat(files)
print('Successfully download', files, statinfo.st_size, 'bytes.')
```

If you download a compressed file( the general is tar.gz file) and want to decompress it:

```python
import tarfile
tarfile.open(files, 'r:gz').extractall(your_file_path)
```

Now, the file was successfully download and extracted.

## Tensorflow Persistent Storage

```python
import tensorflow as tf 

v = tf.Variable(0,dtype = tf.float32,name='v')
for variables in tf.global_variables(): 
    print(variables.name)

ema = tf.train.ExponentialMovingAverage(0.99)
maintain_average_op = ema.apply(tf.global_variables())

for variables in tf.global_variables(): 
    print(variables.name)

saver = tf.train.Saver()
with tf.Session() as sess: 
    init_op = tf.global_variables_initializer()
    sess.run(init_op)

    sess.run(tf.assign(v,10))
    sess.run(maintain_average_op)
    saver.save(sess,"model/model.ckpt")
    print(sess.run([v,ema.average(v)]))
```

then use it:
```python
import tensorflow as tf 

v = tf.Variable(0,dtype = tf.float32,name = 'v')
ema = tf.train.ExponentialMovingAverage(0.99)

print(ema.variables_to_restore())
#output: {u'v/ExponentialMovingAverage': <tf.Variable 'v:0' shape=() dtype=float32_ref>}

saver = tf.train.Saver(ema.variables_to_restore())
with tf.Session() as sess: 
    saver.restore(sess,"model/model.ckpt")
    print(sess.run(v))
```

if want to read checkpoint:
```python
import tensorflow as tf 

reader = tf.train.NewCheckpointReader('model/model.ckpt')

all_variables = reader.get_variable_to_shape_map()
for variable_name in all_variables:
    print(variable_name,all_variables[variable_name])

print(reader.get_tensor("v"))
```
## Command Parameter
### Argparse

In python, argparse is an useful function addition to call the  command parameter. In the project of deep learning, we can use it to adjust parameter easily. To use it:

``` python
import argparse
import os
import sys

parser = argparse.ArgumentParser()

# Basic model parameters.
parser.add_argument('--batch_size', type=int, default=100,
                    help='Number of images to process in a batch')

parser.add_argument('--data_dir', type=str, default='./mnist_data',
                    help='Path to the MNIST data directory.')

parser.add_argument('--model_dir', type=str, default='./mnist_model',
                    help='The directory where the model will be stored.')

parser.add_argument('--train_epochs', type=int, default=40,
                    help='Number of epochs to train.')

parser.add_argument(
    '--data_format', type=str, default=None,
    choices=['channels_first', 'channels_last'],
    help='A flag to override the data format used in the model. channels_first '
         'provides a performance boost on GPU but is not always compatible '
         'with CPU. If left unspecified, the data format will be chosen '
         'automatically based on whether TensorFlow was built for CPU or GPU.')
```

First, we use the import to initialize, then we call the argparse.ArgumentParser() to generate a parser, the is the command parameter, it is really a good trick for coding.

###tf.app.flags

The another way is to use **tf.app.flags** API:

```python
tf.app.flags.DEFINE_string(
    'dataset_name',
    None,
    'The name of the dataset to convert, one of "cifar10", "flowers", "mnist".')

tf.app.flags.DEFINE_string(
    'dataset_dir',
    None,
    'The directory where the output TFRecords and temporary files are saved.')
```

What you can also use is **DEFINE_string, DEFINE_boolean, DEFINE_integer, DEFINE_float**, and then make a judgement and use it:

```python
FLAGS = tf.app.flags.FLAGS
def main(_):
  if not FLAGS.dataset_name:
    raise ValueError('You must supply the dataset name with --dataset_name')
  if not FLAGS.dataset_dir:
    raise ValueError('You must supply the dataset directory with --dataset_dir')

  if FLAGS.dataset_name == 'cifar10':
    download_and_convert_cifar10.run(FLAGS.dataset_dir)
  elif FLAGS.dataset_name == 'flowers':
    download_and_convert_flowers.run(FLAGS.dataset_dir)
  elif FLAGS.dataset_name == 'mnist':
    download_and_convert_mnist.run(FLAGS.dataset_dir)
  else:
    raise ValueError(
        'dataset_name [%s] was not recognized.' % FLAGS.dataset_name)

if __name__ == '__main__':
  tf.app.run()
```

## File IO

### Arrays 

If the output is numbers, it is better to use **array** to input and output, which is more effective than a list:

```python
from array import array
from random import random
floats_file = array('d', (random() for i in range(10**7)))
fp = open('floats_file.bin', 'wb')
# new file 'floats.bin' with size 0 bytes
floats_file.tofile(fp)
#log to file, size is 79.2M
fp.close()

floats_file2 = array('d')
fp = open('floats_file', 'rb')
floats_file2.fromfile(fp, 10**7)
#remeber there are two parameters
fp.close()
# floats_file == floats_file2
```

The array.tofile and array.fromfile are very fast (if want to load millions double-precision floats from a binary file)
