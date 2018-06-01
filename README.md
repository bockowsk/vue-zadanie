Just a frontend built in Vue.

Spawn your application using [**Docker**](https://www.docker.com/community-edition) container just running 2 commands:
~~~
docker build -t docker.io/node:vue .
docker run --name=vue --publish=80:8080 --detach docker.io/node:vue
~~~
then you will be able to access a simple app using url address in your browser: 
~~~
http://localhost
~~~
