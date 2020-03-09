FROM node:12.16.1

ARG APP_DIR=/client
WORKDIR ${APP_DIR}

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
