FROM node:24-slim AS build

WORKDIR /app
ARG APP_PATH=app
COPY ${APP_PATH}/package.json ${APP_PATH}/package-lock.json ./

RUN npm ci --include=dev --no-audit --no-fund

COPY ${APP_PATH}/ ./
RUN npm run build

FROM nginx:stable-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
