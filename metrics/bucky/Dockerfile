FROM node:4.1.2

ENV BUCKY_VERSION 0.4.1

RUN wget https://github.com/HubSpot/BuckyServer/archive/v$BUCKY_VERSION.tar.gz -O /opt/BuckyServer.tar.gz && \
    mkdir -p /opt/BuckyServer && \
    tar --strip-components=1 -xzf /opt/BuckyServer.tar.gz -C /opt/BuckyServer

RUN cd /opt/BuckyServer && npm install

WORKDIR /opt/BuckyServer

CMD ["./start.js"]
