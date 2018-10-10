# qqbot

## Overview

In the [github document](https://github.com/pandolia/qqbot/blob/master/README.MD)

Installation:

```shell
pip install qqbot
```

Run: 

```shell
qqbot

#or in these way
qqbot -q qqnumber
```

See help or others:

```shell
qq help|stop|restart|fresh-restart
```

## Plugin

```shell
qq plug/unplug myplugin
```

## Create a bot

Use the ‘图灵机器人’ API:

```python
# -*- coding: utf-8 -*-
import json
import urllib
import random

def onQQMessage(bot, contact, member, content):
    api_url = "http://openapi.tuling123.com/openapi/api/v2"
    req = {
        "perception":
        {
            "inputText":
            {
                "text": content
            },

            "selfInfo":
            {
                "location":
                {
                    "city": "西安",
                    "province": "陕西",
                    "street": "高新二路"
                }
            }
        },

        "userInfo":
        {
            "apiKey": "2da9ae73b65f4cce8cff91fc027fa---",
            "userId": "OnlyUseAlphabet"
        }
    }
    req = json.dumps(req).encode('utf8')
    http_post = urllib.request.Request(api_url, data=req, headers={
                                       'content-type': 'application/json'})
    response = urllib.request.urlopen(http_post)
    response_str = response.read().decode('utf8')
    response_dic = json.loads(response_str)
    intent_code = response_dic['intent']['code']
    results_text = response_dic['results'][0]['values']['text']

    if content is not None and contact.ctype == 'buddy':
        # bot.SendTo(contact, results_text, resendOn1202=True)
        bot.SendTo(contact, results_text)
```

## Timed transmission

```python
@qqbotsched(hour='10, 11, 12, 13, 14', minute='01')
def sendMyMessage(bot):
    gl = bot.List('buddy', 'Jack')
    if gl is not None:
        for member in gl:
            bot.SendTo(member, 'Hi, this is a TimingMessage!')
```

