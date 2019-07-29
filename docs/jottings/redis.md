---
{
  "title": "Store Tree in Redis",
  "tags": ["backend","DB"],
}
---

# Store Tree in Redis

> Storing Tree structure in redis. ... Redis doesn't support nested data structures, so we need to represent data and parent attributes as redis HASH and children as redis LIST. Reading a tree node requires two calls to redis, one to get the details of the node and second one to get the list of children.


表结构设计，假设父节点单一：

```json
{
    "parent" : 1,
    "children" : [3, 5, 6],
    "data" : {
        
    }
}
```