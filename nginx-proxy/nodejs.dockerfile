FROM node:18-alpine

WORKDIR /app

RUN mkdir static

COPY static ./static

COPY package*.json .

RUN npm install

COPY index.js .

CMD ["node", "index.js"]
