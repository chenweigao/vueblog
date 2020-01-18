# Problems in DL Training

## 虚环境

安装 Python3 虚环境

```python
virtualenv -p python3 envname
virtualenv -p python3 envname
```

启动使用：

```
source racv/bin/activate
```

http://201.117.21.195/

## 远程访问 Visdom

重定向 8097 端口到本地：

```python
ssh -L 18097:127.0.0.1:8097 username@remote_server_ip
```

在服务器上启动 visdom server：

```python
python3 -m visdom.server
```

查看 GPU 的信息：

```bash
nvidia-smi
```

