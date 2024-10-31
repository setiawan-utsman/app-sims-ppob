FROM node:16.15-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install --force
RUN npm run build

# FROM nginx:1.17.1-alpine
# COPY  --from=build /usr/src/app/build/ /usr/share/nginx/html/fe-staging/AI-GEN-WEB/savine-local-conflict/build

