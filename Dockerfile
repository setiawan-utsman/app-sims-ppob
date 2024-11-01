#
# WORKDIR /usr/src/app
# COPY . .
# RUN npm install --force
# RUN npm run build
# COPY . /usr/src/app/

# FROM nginx:1.17.1-alpine
# COPY  --from=build /usr/src/app/build/ /usr/share/nginx/html/fe-staging/AI-GEN-WEB/savine-local-conflict/build

FROM node:18.12.0 AS build
WORKDIR /usr/src/app
RUN npm install
RUN npm run build
COPY . /usr/src/app/
