FROM node:8.7.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD ./package.json /usr/src/app/package.json

RUN yarn install

ADD . ./usr/src/app

CMD npm start