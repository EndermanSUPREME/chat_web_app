# Will perform an automatic docker pull
# to link the image that will be used throughout
# this Dockerfile

# FROM ubuntu:latest
FROM docker.io/library/nginx:latest

# Sets the working directory for any command
# that follows it in the Dockerfile
WORKDIR /

# COPY will copy all files from localhost to the
# containers current working directory
COPY ./app /app

# Execute commands that run during the
# image build process
RUN apt-get update && apt-get install -y sudo
RUN apt install systemctl
RUN apt install nodejs
RUN apt-get install mariadb-server
RUN apt install npm && npm install express && npm install mysql

# Commands that will be executed after the build process
CMD [ "nodejs", "/app/server.js" ]
# CMD [ "systemctl", "start", "nginx" ]
