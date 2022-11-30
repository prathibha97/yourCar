FROM node:latest AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --ignore-engines --production=false

COPY . .

RUN yarn build

CMD ["node", "server.js"]