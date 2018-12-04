# Tools

## IPython

```bash
pip install jupyter
jupyter notebook
```

## urllib

### Reading json file from URL

```python
from urllib import request
import json

with request.urlopen('http://118.24.241.17/path.json') as f:
    data = f.read()
    data_json = json.loads(data.decode('utf8'))
```
`data_json` is the json file we need.