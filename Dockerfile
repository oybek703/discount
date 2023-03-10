FROM node
WORKDIR /opt/app
ADD api/package*.json ./
RUN npm install
ADD api .
RUN npm run build
CMD ["node", "./dist/main.js"]
