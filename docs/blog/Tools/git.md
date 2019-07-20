# Git

## SSH Server

Clone form server file using SSH:

```bash
git clone ssh://root@120.78.71.220:22/~/data
```

Connect using ssh:

```bash
ssh root@174.137.62.75
```

ssh key:

```bash
ssh-keygen
```

## Git Reset

在某次提交后如果发现自己忘记添加某些文件，或者写错了提交信息，可以使用`--amend`选项

一个使用 --amend 的例子：

```bash
git commit -m "initial commit"
git add forgotten_file
git commit --amend
```

撤销已暂存的文件

```bash
git reset HEAD reset.md
```

舍弃对文件的修改

```bash
git checkout -- <filename>
git checkout -- .
```

！但是要主要到，`git checkout`是一条非常危险的命令，执行该命令以后，任何对文件作出的修改都会丢失，因为上述命令用之前版本的文件做了覆盖。

回到远程仓库的状态

```bash
git fetch --all && git rest --hard origin/master
```

放弃所有更改

```bash
git checkout .
```

## Git Config

```bash
git config --global user.name <username>
git config --global user.email <useremail>
git config --global core.editor emacs

git config --list
git config user.name
```

```bash
git help <verb>
```

cache the config:

```bash
git config --global credential.helper cache
git config --global credential.helper store
```

如果遇到了 443 的问题，则可以重置 git 的配置：

```bash
git config --global credential.helper store
```

## GitHub Accelerate

1. Update the host in `C:\Windows\System32\drivers\etc`

2. Visit  [http://tool.chinaz.com/dns](http://tool.chinaz.com/dns)

3. Found the IP and update hosts as the follow example:

```bash
13.250.177.223 github.com
151.101.228.133 assets-cdn.github.com
151.101.73.194 github.global.ssl.fastly.net
```

## Git Clone

克隆较慢时使用：

```bash
git clone --depth=1 ulr
```

## Tag

show tags:

```bash
git tag
git tag -l
```

add tags:

```bash
git tag -a v1.0 -m "my first version"
```

push tags to origin:

```bash
git push origin v1.0
```

强制推送使用：

```bash
git push -f origin branch_name
```

## Status

```bash
git status
git status -s
# ??: untrack
# M : Modified
# A : Modified new file
```

## .gitignore

```bash
cat .gitignore
*.[oa]
*~

#Example
*.a
!lib.a # 仍然跟踪 lib.a, 即使上一行指令要忽略
/TODO # 忽略当前目录的 todo 文件
build/ # 忽略 build/ 目录下的所有文件
doc/*.txt # 忽略 doc/notes.txt, 而不忽略 doc/server/arch.txt
doc/**/*.pdf # 忽略 doc/ 目录下的所有.pdf文件
```

如果改动文件不生效的话，使用：

```bash
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

除此之外，还可以参考[GitHub官方示例](https://github.com/github/gitignore)

## Differ

如果想知道具体的变更内容，而不像 `git status` 那么宽泛，可以使用 `git diff`

查看有哪些已暂存的内容会进入下一次提交，该命令将暂存的变更与上一次提交的内容相比较:

```bash
git diff --staged
git diff --cached
```

如果要把文件保存在工作目录，但从暂存区移除该文件:

```bash
rm <filename>
git rm --cached README
git rm log/\*.log

git mv README.md README
```

查看提交历史:

```bash
git log
git log -p -2
```

查看简略信息:

```bash
git log --stat
```

## Remote

列出远程仓库的简短名称:

```bash
git remote
```

显示出Git存储的每个远程仓库对应的 URL:

```bash
git remote -v
```

检查远程仓库，列出远程仓库的 url 地址以及每个分支的跟踪信息：

``` bash
git remote show origin
```

添加一个远程仓库，并给它起一个简短的名称以便于引用:

```bash
git remote add [shortname] [url]
```

删除远程仓库

```bash
git remote rm <rep-name>
```

从远程仓库获取和拉取数据:

```bash
git fetch [remote-name]
# e.g. git fetch pb
```

将变更推送到远程仓库:

```bash
git push origin master
```

需要注意的一点是，推送变更时需要拥有远程仓库的写权限，并且克隆后没有任何其他人向远程仓库推送过数据。如果别人和你都clone了这个仓库，而他先推送，你后推送，那么你的这次推送会直接被拒绝。你必须先拉取别人的变更，将其整合到你的工作成果中，然后才能推送。




## Git 别名

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.unstage 'reset HEAD --'
# git unstage filaA == git reset HEAD --fileA
```

## Git Branch

分支意味着偏离开发主线并继续你自己的工作而不影响主线开发，分支机制是Git的“杀手锏”！

当你创建一个新分支的时候会发生什么？实际上，Git会创建一个可移动的新指针供你使用。

创建分支:

```bash
git branch testing
```

列出所有分支:

```bash
git branch
```

切换分支:

`checkout` 命令会改变 HEAD 指针，使其指向 testing 分支，在 Gi t中，HEAD 是一个指向当前所在的本地分支的指针

```bash
git checkout testing
```

分支与合并, 创建并切换到该分支，一般使用这个快速创建分支：

```bash
git checkout -b testing
```

切换回master分支:

```bash
git checkout master
```

合并分支:

```bash
git merge testing
```

删除分支:

```bash
git branch -d testing
```

注意到在merge的时候会有提示"fast-forward"，这由于当前的master分支所指向的提交是要并入的testing分支的直接上游，因为Git会将master分支指针向前移动。

合并冲突处理，配置合并工具：

```bash
git config merge.tool vimdiff
git config merge.conflictstyle diff3
```

### 分支管理

查看每个分支上的最新提交:

```bash
git branch -v
```

查看哪些分支已经合并入当前分支的:

```bash
git branch --merged
git branch --no-merged
```

远程分支

如果从Git服务器clone到本地，Git的 clone 命令会自动把这台服务器命名为 origin，使用`git clone -o <yourname>`便可以修改远程仓库的默认名称为：your name/master。

如果你在本地的 master 分支上进行了一些工作，与此同时，别人向 Git 服务器推送了数据，更新了服务器上的 master 分支，这时你的提交历史就与服务器上的历史产生了偏离。

于是要与服务器同步，下面的命令会查询 origin 对应的服务器地址，并从服务器取得本地尚未包含的数据，然后更新本地数据库，最后把 origin/master 指针移动到最新的位置上去。

与服务器同步:

```bash
git fetch origin
```

与其他人共享serverfix分支:

```bash
git push origin serverfix
git push (remote) (branch)
```

等价于下述代码的省略形式:

```bash
git push origin serverfix:serverfix
```

第一个为本地分支名，第二个为远程分支名，可把远程分支重命名

跟踪分支

当你克隆一个远程仓库时，Git默认情况下会自动地创建跟踪这远程origin/master分支的本地master分支。除此之外，你也可是设置成不跟踪master分支。

`git checkout --track origin/serverfix`

或者`git checkout -b  sf origin/serverfix`

完成上述命令以后，你的本地sf就会从origin/server上获取数据。

拉取

`git fetch`命令会拉取本地没有的远程最新更改数据，但它只会从服务器上拉取数据，然后让你自己进行合并。

`git pull`命令在大多数情况下基本等同于执行`git fetch`之后紧跟着执行了`git merge`命令。

一般来说，显示地直接使用fetch和merge命令比使用git pull要更好，因为git pull的机制常常使人迷惑。

删除远程服务器上的master分支:

```bash
git push origin --delete serverfix
```

上述操作只是删除了远程服务器上的分支指针，Git会保留数据一段时间知道下一次触发垃圾回收。