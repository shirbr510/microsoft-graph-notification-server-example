# The instructions for the first stage
FROM node:12-alpine as build

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

RUN apk --no-cache add python make g++

COPY package*.json ./
RUN npm install

# The instructions for second stage
FROM node:12-alpine

WORKDIR /usr/src/app
COPY --from=build node_modules node_modules

COPY . .

EXPOSE 7000

CMD [ "npm","run", "start:prod" ]