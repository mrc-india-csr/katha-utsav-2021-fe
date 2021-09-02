FROM node:14.15.4-stretch-slim as build
WORKDIR /home/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm rebuild node-sass
FROM node:14.15.4-stretch-slim
COPY --from=build /home/app/dist/ /home/app/dist/
COPY --from=build /home/app/package.json /home/app/
COPY --from=build /home/app/src/server /home/app/src/server
COPY --from=build /home/app/package.json/ /home/app/
COPY --from=build /home/app/package-lock.json/ /home/app/
COPY --from=build /home/app/public/ /home/app/public/
WORKDIR /home/app
RUN npm install --only=production
RUN chown -R node /home/app
USER node
EXPOSE 9002
CMD npm run start:server