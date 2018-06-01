Just a frontend built in Vue.
If you have Docker installed you just need to run 2 commands and thats all:
# docker build -t docker.io/node:vue .
# docker run --name=vue --publish=80:8080 --detach docker.io/node:vue
then you will be able to access it using url address in your browser: 
http://localhost
