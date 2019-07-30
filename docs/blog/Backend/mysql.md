# MySQL and ORM

## Tools and Environment

1. 客户端数据库可视化查询软件 SQLyog
2. SQL Server 启动程序 XAMPP
3. Python peewee 模块

## MySQL Command

### Login

```sql
mysql -uroot

use soc;
show tables;

show columns in table_name;
select * from table_name limit 1 \G;
```

### ALTER

在数据库中插入新的 table 或者说新的列：

```sql
ALTER TABLE table_name
ADD column_name datatype

ALTER TABLE edge
ADD ancestor VARCHAR(256)
```

删除同理：

```sql
ALTER TABLE edge 
DROP COLUMN ancestor
```

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
    class Meta:
        table_name = "database_name"
```

在数据库中使用 sql 语句创建表字段，然后可以使用 `User` model 对其进行操作。

### Query operators

[http://docs.peewee-orm.com/en/latest/peewee/query_operators.html](http://docs.peewee-orm.com/en/latest/peewee/query_operators.html)


其中几个需要着重理解注意：

| Comparison |  Meaning  |
|:----------:|:---------:|
|     <<     |   x IN y  |
|     >>     |   x IS y  |
|      %     |  x LIKE y |
|     **     | x ILIKE y |

LIKE 和 ILIKE 操作符可以模糊匹配字符串，LIKE 是一般用法，ILIKE 匹配时则不区分字符串的大小写。

:::warning ORM vs Python Grammar
So just remember:

- Use `.in_()` and `.not_in()` instead of `in` and not `in`
- Use `&` instead of and
- Use `|` instead of or
- Use `~` instead of not
- Use `.is_null()` instead of is None or == None.
- Don’t forget to wrap your comparisons in parentheses when using logical operators.
:::

## MySql vs DAG

```sql
EXPLAIN SELECT * FROM node
WHERE id IN (
	SELECT child FROM edge
	WHERE parent = 3 )

CREATE TABLE soc_node_config
(
    id INT(11) UNIQUE COMMENT '节点id',
    state VARCHAR(25),
    PRIMARY KEY(id)
)

CREATE TABLE child_parent_relation 
(
	id INT(11) COMMENT '标识符id，作为主键',
	child INT(11) COMMENT '子节点的id',
	parent INT(11) COMMENT '子节点对应的父节点id',
	FOREIGN KEY(child) REFERENCES soc_node_config(id),
	FOREIGN KEY(parent) REFERENCES soc_node_config(id),
	PRIMARY KEY(id),
	KEY parent(parent) USING BTREE,
	KEY child(child) USING BTREE,
	KEY child_to_parent(child, parent) USING BTREE
)

SHOW INDEX FROM child_parent_relation
```