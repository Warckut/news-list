FROM node:18 as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
  
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /var/www/html/

ENV APP_BASE_URL=/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
