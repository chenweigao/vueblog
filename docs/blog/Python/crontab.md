# Crontab

使用 crontab 做定时任务或循环任务。

```bash
pip install python-crontab
```

## 时序语法

现在，要安排一个 cron 作业来执行上面的脚本来输出到另一个文件，你需要添加以下代码行：

```bash
50 19 * * * python hello.py >> a.txt
```

上述代码行将文件的标准输出重定向到名为 a.txt 的文件中。要执行命令前面的数字定义了作业的执行时间。时序语法有五个部分：

1. minute（分钟）
2. hour（小时）
3. day of month（月的第几天）
4. month（月）
5. day of week（一周的第几天)

时序语法中的星号「*」表示每次都会运行。

