
# Snap - Easily Upgraded, Universal Linux Package


Snaps are containerised software packages that are simple to create and install. They auto-update and are safe to run. And because they bundle their dependencies, they work on all major Linux systems without modification.



Snapcraft is a command line tool used to build snaps. This guide details the recommended steps to get ready to build snaps.The easiest way to package your code as a snap is to use Snapcraft, which supports building from source and from existing packages, integrates into your CI process and handles publishing your snaps to the world.

## Snap

### 1. Abstract

Snapcraft builds on top of tools like autotools, make, and cmake to create snaps fro people to install on Linux.

`sudo apt-get install snapcraft`

Here are some snap advantages that will benefit many C/C++ projects:

- Installation: `snap install myapp`
- Directly control the delivery of automatic application updates

### 2. DOSBox Snap

Snaps are defined in a single yaml file placed in the root of your project. The DOSBox example shows the entire `snapcraft.yaml` for a existing project.

``` shell
name: dosbox
version: "0.74-svn"
summary: DOSBox
description: |
  DOSBox is a x86 emulator with Tandy/Hercules/CGA/EGA/VGA/SVGA graphics
  sound and DOS. It's been designed to run old DOS games under platforms that
  don't support it.

confinement: devmode

apps:
  dosbox:
    command: dosbox

parts:
  dosbox:
    plugin: autotools
    source-type: tar
    source: http://source.dosbox.com/dosboxsvn.tgz
    build-packages:
      - g++
      - make
      - libsdl1.2-dev
      - libpng12-dev
      - libsdl-net1.2-dev
      - libsdl-sound1.2-dev
      - libasound2-dev
```

#### Confinement

To get started, we won’t [confine](https://docs.snapcraft.io/reference/confinement) this application. Unconfined applications, specified with `devmode`, can only be released to the hidden “edge” channel where you and other developers can install them.

```
confinement: devmode
```

#### Parts

Parts define how to build your application.

Before building the part, the dependencies listed as **build-package** are installed. More information of autotools plugin is given by command `snapcraft help autotools`.

### 3.Basic about Snap

#### Install snap on Ubuntu

Ubuntu includes Snap by default starting with the 16.04LTS release, for the older 14.04LTS release or any flavor, you have to install it form the archive:

```shell
sudo apt install snap
```

#### Using the snap command

Login with [Ubuntu One Account](https://login.ubuntu.com/)

``` shell
sudo snap login <youremail>
```

When you are logged in, **find snaps** in the snap store, and then you can install it using the snap name.

```shell
snap find hello
snap install hello-world
snap list # view details about installed snap
```

### 4.Snapcraft

#### Setup LXD

LXD installation on Ubuntu is quite straightforward:

```shell
snap install
sudo lxd init
sudo usermod -g lxd ${USER}
#LXD requires that your user is in the lxd group.
```

#### Test a container build

By now should be all set, we can test that everything is setup correctly with a few commands:

```shell
mkdir test-snapcraft
cd test-snapcraft
snapcraft init
snapcraft cleanbuild
```

#### Build first snap

Snapcraft uses single text file to describe the entire build process for a snap:

```shell
vim test-snapcraft/snapcraft.yaml
```

To get start with a template, you can run `snapcraft init`, it wll create a new directory *snap* with a file named *snapcraft.yaml* , the final file looks like this:

```shell
name: hello
version: "2.10"
summary: GNU Hello, the "hello world" snap
description: GNU Hello prints a friendly greeting.
grade: stable
confinement: strict

apps:
  hello:
    command: hello

parts:
  gnu-hello:
    plugin: autotools
    source: http://ftp.gnu.org/gnu/hello/hello-2.10.tar.gz
```

This is the only file needed in the directory, Snapcraft can use local source code or fetch everything needed to build the snap from remote sources.

#### Run snapcraft

You can now build a snap out of your `snapcraft.yaml` by running `snapcraft` in the project directory:

```shell
snapcraft
```

After this process, the snap is now available in your directory.

```shell
$ ls
hello_2.10_amd64.snap  parts  snap  prime 
$ sudo snap install hello_2.10_amd64.snap --dangerous
hello 2.10 installed
$ hello
Hello, World!
$sudo snap remove dosbox
```