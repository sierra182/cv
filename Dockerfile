FROM node:24-slim AS build

WORKDIR /app
COPY app/package.json app/package-lock.json ./

RUN npm ci --include=dev --no-audit --no-fund

COPY app/ ./
RUN npm run build

FROM nginx:stable-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
