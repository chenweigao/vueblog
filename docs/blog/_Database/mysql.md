# MySQL

## Tools and Environment

1. 客户端数据库可视化查询软件 SQLyog
2. SQL Server 启动程序 XAMPP

## MySQL Command

### Login

```sql
mysql -uroot

use soc;
show tables;

show columns in table_name;
select * from table_name limit 1 \G;
```

## DROP

删除：

```sql
DROP DATABASE db_name

DROP TABLE table_name

ALTER TABLE table_name DROP INDEX index_name
```

如果想删除表中所有的数据但是不影响到表的结构：

```sql
TRUNCATE TABLE table_name
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

### JOIN

在 MySQL 中，主要是 `INNER JOIN`, 表示内连接，可以同时连接两个表进行组合查询：

```sql
SELECT column_name(s)
FROM table_name1
INNER JOIN table_name2 
ON table_name1.column_name=table_name2.column_name
```

## MySql vs DAG

[可以参考这一篇博客，讲述了如何使用 MySql + 邻接表存储一个 DAG](https://www.codeproject.com/Articles/22824/A-Model-to-Represent-Directed-Acyclic-Graphs-DAG-o)

```sql
EXPLAIN SELECT * FROM node
WHERE id IN (
	SELECT child FROM edge
	WHERE parent = 3 )

CREATE TABLE edge
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
	FOREIGN KEY(child) REFERENCES soc_nodedgee_config(id),
	FOREIGN KEY(parent) REFERENCES edge(id),
	PRIMARY KEY(id),
	KEY parent(parent) USING BTREE,
	KEY child(child) USING BTREE,
	KEY child_to_parent(child, parent) USING BTREE
)

SHOW INDEX FROM child_parent_relation
```

## index

### explain

对于建立的索引，想查看其性能如何：

```sql
explain select * from tables where c1='a1'and c2='c2';
```

使用 explain 命令即可。
