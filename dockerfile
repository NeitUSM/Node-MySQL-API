FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT=3000
ENV PORT=${PORT}

ENV NODE_ENV=production

EXPOSE ${PORT}

CMD ["npm", "start"]