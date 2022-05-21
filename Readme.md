# redshper test backend


# Installation


```javascript

    // clone the application with git clone

    // then install the npm modules using
     
    npm install


```


# Running the application


```javascript


    node server.js


```


# Building docker image

```bash

    docker build -t <imagename:version> .

```



# Running docker container


```bash

    // 3001 port is given since the docker file contains 3001 port
    docker run -it -d -p <outside-port-of-your-choice>:3001 <imagename:version>

```

