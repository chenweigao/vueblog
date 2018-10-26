# MongoDB

Common RDB(Relational Database): PostgreSQL, MySQL, Orcal, MS SQL Server and SQLite.

`database` –`collection` – `document`– `field` – `index`.

[Install in LInux](http://www.runoob.com/mongodb/mongodb-linux-install.html)

## CRUD

CRUD operations create, read, update, and create documents.

### Cteate

- `db.collection.insertOne()` New in version 3.2
- `db.collection.insertMany()` New in version 3.2

```sh
db.collection.insertOne(
	{
		"name" : "aaa",
		"age: 26
	}
)
```

```sh
db.collection.insertMany(
	[
		{ ... },
		{ ... }
	]
)
```

### Read

Query a collection for document

```bash
db.collections.find(
	{ age: { $gt: 18 } }
).limit(5)
```

### Update

```bash
db.inventory.updateOne(
   { item: "paper" },
   {
     $set: { "size.uom": "cm", status: "P" },
     $currentDate: { lastModified: true }
   }
)
# created filed: 
# "lastModified" : ISODate("2018-10-26T08:59:26.038+0000")
```

- `$set` to update the value
- `$currentDate` operator to update the value of the `lastModified` field to the current date, If lastModified field does not exist, `$currentDate ` will create the field. 

Update many: to update document on inventory where **qty** is less than **50**:

```bash
db.inventory.updateMany(
   { "qty": { $lt: 50 } },
   {
	   #same as updateOne()
   }
)
```
Replace: 

```sh
db.inventory.replaceOne(
	# or updateOne() updateMany()
   { item: "paperpaper" },
   { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 40 } ] },
   { upsert: true }
)
```

If there are matching documents, then the `upsert` operation modifies or replaces the matching document or documents. 

### Delate

MongoDb provides the followinng methods to delete documents of a collection:

- `db.collection.deleteOne()`
- `db.collection.deleteMany()`
- `db.collection.remove()`





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

### Restore

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