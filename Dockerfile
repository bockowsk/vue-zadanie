FROM docker.io/node
WORKDIR /usr/src/app
COPY [".","/usr/src/app"]
RUN npm install
EXPOSE 8080
RUN npm run build
CMD [ "npm", "run", "start" ]
