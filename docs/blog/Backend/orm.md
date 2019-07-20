# MySQL and ORM

## Tools and Environment

1. 客户端数据库可视化查询软件 SQLyog
2. SQL Server 启动程序 XAMPP
3. Python peewee 模块

## Peewee

创建模型和表字段：

```py
from peewee import *
mysql_db = MySQLDatabase('my_database')

class BaseModel(Model):
    class Meta:
        database = mysql_db

class User(BaseModel):
    username = CharField()
    # etc, etc
```

在数据库中使用 sql 语句创建表字段，然后可以使用 `User` model 对其进行操作。