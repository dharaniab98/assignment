FROM node:16.4.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN set -ex; \
    apt-get update; \
    apt-get install default-mysql-client -y

COPY . .

EXPOSE 8080
