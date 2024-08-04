FROM node:18 as build-stage

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM ubuntu:22.04

RUN apt-get update
RUN apt-get install nginx -y
  
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /var/www/html/

ENV APP_BASE_URL=/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
