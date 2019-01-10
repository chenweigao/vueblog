# Docker

## Command

List the command that will be used and for srarch:

```bash
docker build -t friendlyhello .  # Create image using this directory's Dockerfile
docker run -p 4000:80 friendlyhello  # Run "friendlyname" mapping port 4000 to 80
docker run -d -p 4000:80 friendlyhello         # Same thing, but in detached mode
docker container ls                                # List all running containers
docker container ls -a             # List all containers, even those not running
docker container stop <hash>           # Gracefully stop the specified container
docker container kill <hash>         # Force shutdown of the specified container
docker container rm <hash>        # Remove specified container from this machine
docker container rm $(docker container ls -a -q)         # Remove all containers
docker image ls -a                             # List all images on this machine
docker image rm <image id>            # Remove specified image from this machine
docker image rm $(docker image ls -a -q)   # Remove all images from this machine
docker login             # Log in this CLI session using your Docker credentials
docker tag <image> username/repository:tag  # Tag <image> for upload to registry
docker push username/repository:tag            # Upload tagged image to registry
docker run username/repository:tag                   # Run image from a registry
```

## Installation

1. Follow the [tutorial](https://docs.docker.com/install/linux/docker-ce/ubuntu/#os-requirements)

2. Test whether the Docker is installed correctly (Ubuntu 16.04)

    ```bash
    sudo docker container run hello-world

    docker --version

    sudo docker info

    sudo docker image ls (-all)
    ```

3. List the versions available in your repo:

    ```bash
    apt-cache madison docker-ce
    ```

## Containers

Make sure all is set up:

```bash
docker run hello-world
```

Run the app, before this, a `Dockerfile` should be created:

```bash
sudo docker run -p 4000:80 friendlyhello

sudo docker run -d -p 4000:80 friendlyhello
# run on background
```

将 Docker 的 80 端口映射出去至 4000 端口，如果是在后台运行的话，可查看：

```bash
sudo docker container ls

#stop
sudo docker container stop 1fa4a...
```

## Share images

1. Login

    ```bash
    sudo docker login
    ```

2. Tag the image

    ```bash
    sudo docker tag friendlyhello weigaochen/get-started:part2
    # docker tag image username/respository:tag

    sudo docker image ls
    ```

3. Push the image

    ```bash
    sudo docker push weigaochen/get-started:part2
    ```

4. Pull

    ```bash
    sudo docker run -p 4000:801 weigaochen/get-started:part2
    ```

## Services

- 通过 `docker-compose.yml` 来配置，在其中引用已经 Published 的 image
    > A `docker-compose.yml` file is a YAML file that defines how Docker containers should behave in production.

- Run the new load-balanced app

    ```bash
    sudo docker swarm init
    sudo docker stack deploy -c docker-compose.yml getstartedlab
    ```

    注意到其中的 `getstartedlab` 是我们给 app 起的一个名字

- 查看：

    ```bash
    sudo docker service ls
    ```

    注意到 `NAME` 属性的值为 `getstartedlab_web`.

### task

> A single container running in a service is called a task.

Let us list the **task**:

```bash
sudo service ps getstartedlab_web
```

如果顺利的话，这时候可以看到 5 个 task: `getstartedlab_web.1` 至 `getstartedlab_web.5`, 原因是我们在  `docker-compose.yml` 文件中配置了 5 个 `replices`.