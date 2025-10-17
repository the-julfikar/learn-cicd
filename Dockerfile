FROM node:latest

COPY package.json /app/
COPY app.js /app/

WORKDIR /app

RUN npm install

CMD [ "node", "app.js" ]
