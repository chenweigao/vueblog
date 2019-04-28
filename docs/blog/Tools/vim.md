# Vim

## reference

| NAME        | URL                                                          | DES                |
| ----------- | ------------------------------------------------------------ | ------------------ |
| VundleVim   | [https://github.com/VundleVim/Vundle.vim](https://github.com/VundleVim/Vundle.vim) | Vim plugin manager |
| ale         | [https://github.com/w0rp/ale](https://github.com/w0rp/ale)   |                    |
| vim-airline | [https://github.com/vim-airline/vim-airline](https://github.com/vim-airline/vim-airline) |                    |

## Plugin Manager

[Vundle](http://github.com/VundleVim/Vundle.vim) is short for *Vim bundle* and is a [Vim](http://www.vim.org/) plugin manager.

```bash
mkdir ~/.vim/bundle
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
vim ~/.vimrc
```

 In `.vimrc`, this is my config:

```bash
set nocompatible
filetype off

set ts=4
set expandtab

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'
Plugin 'https://github.com/Valloric/YouCompleteMe.git'
Bundle 'luochen1990/rainbow'
let g:rainbow_active = 1
Plugin 'w0rp/ale'
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
call vundle#end()
filetype plugin indent on
```

Then build:

```bash
vim +PluginInstall +qall

# options: PluginClean, PluginUpdate, PluginList
```

Other useful settings:

```bash
set nu!
set autoindent #自动对齐
syntax on
```
