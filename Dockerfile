FROM ubuntu:16.04

ENV TZ=Asia/Kolkata

RUN apt-get -y update && \
    apt-get install -y wget \
    curl \
    tzdata \
    python-software-properties \
    net-tools \
    htop \
    curl \
    telnet && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    echo "Asia/Kolkata" > /etc/timezone && \
    dpkg-reconfigure -f noninteractive tzdata

WORKDIR /var/www/html

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run transpile

EXPOSE 3000

CMD [ "npm", "run", "start"]
