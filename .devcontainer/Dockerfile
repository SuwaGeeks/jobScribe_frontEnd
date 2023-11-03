FROM node

ENV TZ=Asia/Tokyo

RUN apt-get update &&\
    apt-get upgrade -y &&\
    apt-get install -y --no-install-recommends git openssh-client &&\
    apt-get install --reinstall ca-certificates -y &&\
    apt-get clean &&\
    rm -rf /var/lib/apt/lists/*
    
RUN yarn install -g
