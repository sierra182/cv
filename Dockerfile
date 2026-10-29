FROM node:24-slim

WORKDIR /app
ARG APP_PATH=./app
COPY ${APP_PATH}/package*.json ./

RUN npm i

CMD ["npm", "run", "dev"]