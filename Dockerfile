FROM node

WORKDIR /opt/app

ADD package*.json ./

RUN npm install --prefix api

ADD . .

RUN npm run build --prefix api

CMD ["node", "./api/dist/main.js"]
