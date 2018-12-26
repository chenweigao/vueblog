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

## Shell

This is a basic note about Linux shell, I have wrote plenty of bash shell,  which helps solve problem easily.

Include **system information, SSH, read -p, shell array, sed, AWK**


### System Information

Sometimes, you may want to see the system kernel version, 2 ways are available :

```shell
lsb_release -a
cat /etc/issue
```

change password for a user:

```shell
sudo passwd root
```

echo current time as a file name:

```shell
echo test >> $(date -d "today" +"%Y%m%d_%H%M%S").txt 
# work log
git log -4 > log/$(date -d "today" +"%Y%m%d").txt
```

### SSH

```shell
sudo apt-get install openssh-server
#ssh config
/etc/ssh/sshd_config
```

start server:

```shell
sudo service ssh restart/start
```

A bug:

```shell
sudo ssh-keygen -t rsa -f /etc/ssh/ssh_host_ed25519_key
```



## 2. Add Choice for User

`read -p` is very useful for  this, for example:

```shell
read -n1 -p "What is your system version? 
1: Ubuntu 16.04;
2: Ubuntu 17.10;
3: Ubuntu 18.04;
choose a number between 1, 2 and 3: " answer
case $answer in
1) ...;;
2) ...;;
3) ...;;
esac
```

*Tips* :

- `-n1` : -n and 1 are used together, which means `read` commmand will quit when system accept a single character, no need for Enter.
- `-s` : this options will avoid displaying user *passwords* on the screen.
- `-t 5`: overtime option, this means that user must complete the input within 5 seconds.

## 3. Shell Array

```shell
arrayName=(array_content)
#get the content of arrary, or [*]
echo ${arraryName[@]}
#get the size of array
echo ${#arrayName[*]}
```

## 4. Sed

```shell
current_plugins_version=$(dpkg -s picoscenes-plugins-demo-rxsbroadcaster-chronos | grep Version | sed 's/Version: //g')
```

This is a basic use of sed, `sed 's/Version: //g'` means that a select : 

``` shell
Version: 18.0406.2333
```

Output is:

``` shell
18.0406.2333
```

That means **replace** "Version:  " with **empty**.

To replace the string in the file, use `-i`:

```shell
sudo sed -i 's/GRUB_HIDDEN_TIMEOUT=0/#GRUB_HIDDEN_TIMEOUT=0/g'  /etc/default/
```

This is an example that we do the CSI experiment, update the `~/etc/default/grub` make the new kernel version could be seen.

### tr

`tr` 可以理解为`sed`的简化版本

Usage: `tr [OPTION]... SET1 SET2`

- -c, -C, --complement: use the complement of SET1(不常用)

- -d, -delete: delete characters in SET1

- -s: replace each sequence of a repeated character, 删除所有重复出现字符序列，只保留第一个

  ```shell
  #将所有的the替换为my
  tr -s 'the' 'my'
  tr -s ' ' '\n'
  
  #删除所有的the
  tr -d 'the'
  
  #小写变大写
  tr [a-z] [A-Z]
  
  #删除连续的重复字母
  tr -s [a-zA-Z]
  ```


## 5. AWK

### Basic

[AWK Tutorial](https://www.tutorialspoint.com/awk)

```
$ which awk
usr/bin/awk
```

display the complete content of the files using AWK:

```
awk '{print}' xx.txt
```

**AWK script:**

create a text file `command.awk` containing the AWK command:

```
{print}
```

the use it:

```
$ awk -f command.awk xx.txt
```

### Options

```
# -v option
$ awk -v name=Jerry 'BEGIN{printf "Name = %s\n", name}'

$ awk --help
```

### print column

```
$ awk '{print $3 "\t" $4}' marks.txt

# or in any order
$ awk '{print $4 "\t" $3}' marks.txt
```

there we print the third and the fourth fields.

```
$ awk '/a/ {print $4 "\t" $3}' marks.txt
```

the pattern, only print 4 lines:

```
$ awk '/a/{++cnt} END {print "Count = ", cnt}' marks.txt
# Count = 4(where the marks.txt has 5 lines)
```

> **$0** variable stores the entire line and in the absence of a body block, default action is taken, i.e., the print action.

