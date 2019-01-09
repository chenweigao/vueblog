# Docker

## Installation

1. Follow the [tutorial](https://docs.docker.com/install/linux/docker-ce/ubuntu/#os-requirements)

2. Test whether the Docker is installed correctly

    ```bash
    sudo docker container run hello-world

    docker --version

    sudo docker info
    ```

3. List the versions available in your repo:

    ```bash
    apt-cache madison docker-ce
    ```