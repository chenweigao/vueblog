# Linux

## ssh

```bash
sudo ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key
sudo service ssh start
```

## File server

```bash
python -m http.server
#default port: 8000

python -m http.server 80
#in port 80
```

## program status

```bash
echo $?

echo %ERRORLEVEL%
#windows
```