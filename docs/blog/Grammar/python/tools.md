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

## 改变解释器外观

```py
import sys
sys.ps1
'>>>'

sys.ps1 = 'cwg-python>>'
```

这样就可以改变解释器前面的那个外观了，注意修改后退出不会保存修改的结果。