# CHAT

## Setting up Ubuntu/Nginx Docker
When we want to pull an image off the internet we can use:
* docker pull ubuntu:latest
* docker images --> Shows what images we have locally

When we want to run our docker container:
* docker run --name [container name] -i -t -d ubuntu:latest /bin/bash -> builds the container as a detached container (-d) and makes this docker interactive (-i)
* docker ps --> Shows active docker containers
* podman container list --all --> may help find containers docker cmd isnt

When we want to build a Docker-Image via Dockerfile:
* docker build -t [image name] .

Concerning stopping/removing a container:
* docker rm/stop [container name]
* podman rm [container name]

Concerning Shelling into detached container:
* docker exec -it [docker id] /bin/bash

In order to remove images we do not want/need:
* docker image rm [ID]

Setting up `sudo` and network bins like `ifconfig` and updating ubuntu container:
* apt-get update && apt-get install -y sudo
* apt install net-tools

## Setting up Basic NodeJS Express Web-Server
First you will need to have installed `npm` and `nodejs`, this will allow you
to both write express.js code with express API, and nodejs will let you host
a web-server givin some web-server.js file.

Basic server.js code:
```js
const express = require('express');
const app = express();
const port = 2222; // can be any port you desire

app.get([web target ie /, /login, /reg, /user, ...], (req, res)=> {
    // logic on how the website reacts
    // in order to send a file like dashboard.html
    res.sendFile(__dirname + "/dashboard.html");

    // the __dirname macro returns the root directory of the website
    // which is the location the nodejs cmd is being executed
});

app.listen(port, () => {
    // you need to use back-ticks to allow the ${var} to link
    // the var value into this return string
    console.log(`Server is running on port ${port}`);
});
```

## Integrating with NGINX:
We can use Nginx to act as a reverse PROXY, allowing port 80
to be hit publically while closing expresses port to the public

/etc/nginx/sites=available/default:
```
server {
    listen 80 default_server;
    server_name _;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_pass http://localhost:3000; #port where you are serving your express app.

    }
}
```
Then to check if everything is set up correctly:
* sudo nginx -t --> Check for errors in the default file
* sudo nginx -s reload --> Restart the nginx service

