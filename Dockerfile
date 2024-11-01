FROM node:18.12-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install --force
RUN npm run build

CMD [ "npm", "start" ]

# FROM nginx:1.17.1-alpine
# COPY  --from=build /usr/src/app/build/ /usr/share/nginx/html/fe-staging/AI-GEN-WEB/savine-local-conflict/build

