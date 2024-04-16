# Caching Express Server using Redis. (REDIS-STACK Docker Image)

### **Points to know**

- Redis is key-value pair in-memory(RAM) database
- One string value limit is 512 MB.


### **Installation**

- Setup Redis server with Redis-Stack (GUI) using docker images
    
    ```bash
    docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
    ```
    
    ```bash
    --name = name of container i.e redis-stack which is anything given by user
    -d   = it runs container in background (detached mode)
    -p   = map port 6379 to 6379 where 6379 is redis server default port
    -p   = map port 8001 to 8001 where 8001 is redis-stack (gui) default port
    redis-stack/latest  = latest of version of redis-stack server
    ```
    
    At first, the image will not be found in our system, then docker automatically fetch from the docker hub where the redis-stack image is hosted/located. and then will run the images.
    
    After succesfully image run we can see the gui of redis in port `localhost:8001` 
    
- Navigate  to docker container where our redis server is located
    
    ```bash
    docker exec -it containerId bash
    
    -it  = interactive mode where we can write, delete, edit, ..
    bash = open bash terminal where we can put command
    ```
    
- Test if `redis-cli` is exists in bash or not
    
    ```bash
    redis-cli ping
    
    redis-cli = entry command 
    Result = PONG
    ```
    
- Open `redis-cli`
    
    ```bash
    redis-cli
    ```
    

- Store data in `redis` in key-value pair
    
    ```bash
    set <entity>:<id> value
    
    i.e
    
    set user:name parbat
    set user:age 12
    
    user:name, user:age = key
    parbat, 12 = value
    
    **Set multiple key value**
    
    *mset user:name "hacker" message:1 "Ola gamostas"*
    ```
    
- Get data from key
    
    ```bash
    get <entity>:<id>
    i.e
    get user:name
    get user:age
    
    G**et multiple key value**
    
    *mget user:name message:1*
    ```
    

- Store data only if key doesn’t exists using (`nx`) and called `Locks`
    
    ```bash
    set <entity>:<id> value nx
    ```
    
- Counter increment/decrement using `incre` `incrby` `decr` `decrby`
    
    ```bash
    set count 0
    
    incr count                        result= 1
    
    incrby count 10                   result= 10
    
    decr count                        result= 9
    
    decrby count 5                    result= 4
    ```
