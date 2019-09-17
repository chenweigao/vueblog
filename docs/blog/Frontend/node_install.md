# Install the Latest Node.js in Ubuntu

## Install Node.js and npm@latest

在 Linux 下部署可能会存在一些问题，虽然安装方法很多，但是实践下来最好的方法是使用 apt:

1. 安装 node.js

```bash
sudo apt-get install nodejs-legacy
sudo apt-get install npm
```

2. 升级 npm 的版本：

```bash
sudo npm install npm@latest -g
```

3. 安装用于安装 node.js 的模块 n

```bash
sudo npm install n -g
```

4. 通过 n 模块安装指定的 node.js

```bash
sudo n latest
sudo n stable
sudo n lts
```

## Update yarn

如果想更新所有的 package.json 中的依赖到最新版本，则可以使用：

```bash
yarn upgrade-interactive --latest
```

需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择。
