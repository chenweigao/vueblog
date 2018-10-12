
# Flask

[How to build socketio in Flask project : socketio](#socketio)

Flask **variable, [blueprint](#blueprint)** and install from **[requirement.txt](#requirement.txt)**, some basic knowledge about **WSGI, Nginx and Django**.


## Reference

| NAME           | URL                                                          | DESCRIPTION                                                  |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| flask_socketio | [https://github.com/miguelgrinberg/flack](https://github.com/miguelgrinberg/flack) | a project using `flask_socketio`                             |
|                | https://flask-socketio.readthedocs.io/en/latest/             | `flask_socketio ` official tutorial                          |
| blueprint      | http://flask.pocoo.org/docs/1.0/blueprints/                  | [official tutorial](http://flask.pocoo.org/docs/1.0/blueprints/) |



## SocketIO

```bash
pip install flask-socketio
```



## Flask Structure

**application context and request context**：

| variable      | context             | description                                          |
| ------------- | ------------------- | ---------------------------------------------------- |
| `current_app` | application context | The application instance for the active application. |
| `g`           | ac                  |                                                      |
| `request`     | request context     |                                                      |
| `session`     | rc                  |                                                      |

```python
from flask import current_app
```
[`g`](http://flask.pocoo.org/docs/1.0/api/#flask.g) is a special object that is unique for each request. It is used to store data that might be accessed by multiple functions during the request. The connection is stored and reused instead of creating a new connection if `get_db` is called a second time in the same request.

## Blueprint

[Tutorial : Modular Applications with Blueprints](http://flask.pocoo.org/docs/1.0/blueprints/)

We use the `create_app()` so that the application is created at runtime.

A blueprint is similar to an application in that it can also define routes. The difference is that routes associated with a blueprint are in a dormant state until the blueprint is registered with an application, at which point the routes become part of it.

```python
# app/main/__init__.py
from flask import Blueprint
main = Blueprint('main', __name__)
```

The constructor for this class takes two required arguments: **the blueprint name** and **the model or package where the blueprint is located**(always default `__name__`).

## Virtual environment

### Installation

Take Linux system as example:

```python
pip install virtualenv
```

### Usage 

```python
cd [project directory]
virtualenv venv
```

该命令执行后，将在当前目录中建立一个venv目录，该目录复制了一份完整的当前系统的python环境。之后运行python时可以直接运行该项目的bin文件夹中的命令。

例：在当前虚环境下安装Tornado组件：

```python
./venv/bin/pip install tornado
```

或者在该虚环境中运行python程序：

```python
./venv/bin/python xxxx.py
```

也可以使用`activate`命令启动虚环境，之后不必再显示地调用虚环境bin文件夹中的命令：

```python
source ./venv/bin/activate
```

退出虚拟环境使用`deactive`：

```python
(venv) xxx:~/xxx$ deactivate
```

## Requirement.txt

Install from `requirement.txt`:

```python
pip install -r requirements.txt
```

generate a `requirement.txt` from current project:

```bash
pip freeze > requirement.txt
```

## Video Streaming with Flask

## Flask Script

```python
# manage.py
import os
from app import create_app, db
from app.models import User, Role
from flask.ext.script import Manager, Shell
from flask.ext.migrate import Migrate, MigrateCommand

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
manager = Manager(app)
migrate = Migrate(app, db)

def make_shell_context():
    return dict(app=app, db=db, User=User, Role=Role)

manager.add_command("shell", Shell(make_context=make_shell_context))
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()
```

## Web Server

目前主流的Web服务器包括**Nginx, Apache, lighthttpd, IIS, etc..**，Python服务端程序在Linux平台下使用最广泛的是Nginx。

### WSGI

Web Server Gateway Interface[^2], 为Python语言定义Web服务器和服务端程序的通用接口规范。

[^2]: [WSGI, wiki](https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface)

### Nginx

```shell
sudo apt-get install nginx
sudo service nginx start/status/stop/restart
```

## Django

### Installation

```python
pip3 install django
```

测试是否安装成功：

```python
python3
>>> import django
>>> print(django.VERSION)
```

### Establish application

建立项目：

```python
django-admin startproject [project-name]
```

建立应用：

```python
python manage.py startapp [app-name]
```

例如，在当前目录中创建一个项目*my_project*, 并且拥有特定的目录结构：

```python
djangp-admin startproject my_project
cd my_project
python3 manage.py startapp my_app
```

完成之后目录结构类似于：

```shell
my_project/
	manage.py
	my_project/
		__init__.py
		settings.py
		urls.py
		wsgi.py
	my_app/
		__init__.py
		admin.py
		apps.py
		migrations/
			__init__.py
		models.py
		tests.py
		views.py
```

内置web服务器运行：

```python
python manage.py runserver 0.0.0.0:8001
```

生成数据移植文件：

```python
python manage.py makemigrations app
```

移植到数据库：

```python
python manage.py migrate
```

## New Words

| words |                means                |
| :---: | :---------------------------------: |
|  PK   |             primary key             |
|  FK   |             foregin key             |
| CRUD  | create, retrieve, update and delete |

