# Database

Common RDB(Relational Database): PostgreSQL, MySQL, Orcal, MS SQL Server and SQLite.

## MongoDB

### Basic

`database` –`collection` – `document`– `field` – `index`.

[Install in LInux](http://www.runoob.com/mongodb/mongodb-linux-install.html)

Process in terminal:

```bash
./mongo.exe
> show dbs
> use [db name] #create db
> db #see db
> db.createCollection(name, options) #create collections
> show collections
> db.colname.insert({"xx", "xx"})
> db.collection_name.find()
> db.collection_name.find().pretty() #show in formatted
```

batch import `.json` file:

```bash
mongoimport --db users --collection contacts --file xx.json
```

### mongorestore

```bash
mongorestore -h <hostname><:port> -d dbname <path>
```

[mongodump and mongorestore](http://www.runoob.com/mongodb/mongodb-mongodump-mongorestore.html)

## Flask-PyMongo

Install: `pip install flask_pymongo`

in `config.py`:

```python
class Config:
    MONGO_URI = "mongodb://localhost:27017/myDatabase"
```

in `app/___init__.py`:

```python
from flask_pymongo import PyMongo
from config import config
mongo = PyMongo()
mono.init_app(app)
```

in `views.py`:

```python
from app import mongo
@main.route('/', methods=['GET', 'POST'])
def index():
	data = mongo.db.mycol.find()
	# mycol is the name of collections
```

## Python SQL

Take `SQLite3` for example:

`cur.execute("CREATE TABLE demo(num int, str varchar(20));")`，DB-API规范，创建`cur`游标对象用于执行SQL命令。[Source Code](https://github.com/chenweigao/python_web/blob/master/orm/db_test.py)

```python
conn = sqlite3.connect('test.db')
cur = conn.cursor()
cur.execute("INSERT INTO demo VALUES (%d, '%s')" % (1, 'aaa'))
```

## SQLite3

[Create table](http://www.runoob.com/sqlite/sqlite-create-table.html)

format the table:

```bash
sqlite> .header on
sqlite> .mode column
sqlite> SELECT * FROM COMPANY;
```

update:

```bash
sqlite> UPDATE COMPANY SET ADDRESS = 'Texas' WHERE ID = 6;
 update users set confirmed = 1 where id=4;
```

register:

```python
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
```