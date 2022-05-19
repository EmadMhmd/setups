# Corelia Cyber Scurity Accelerator (COCA) Project

Internal tool used by a Corelia cyber security team to reduce spended time in a data gathering stage

## Development

### Prerequirements

- Node.js v16.13.1
- MongoDB v5.0.8

### Configuration

Copy example.dev.env to dev.env and adapt you vaiables if needed

- Database (MongoDB)

```env
MONGODB_USER=${USER}
MONGODB_PASSWORD=${PASSWORD}
MONGODB_DATABASE=${DATABASE}
MONGODB_LOCAL_PORT=${LOCAL_PORT}
MONGODB_DOCKER_PORT=${DOCKER_PORT}
```

- Ports

```env
NODE_LOCAL_PORT=${NODE_LOCAL_PORT}
NODE_DOCKER_PORT=${NODE_DOCKER_PORT}
REACT_LOCAL_PORT=${REACT_LOCAL_PORT}
```

- Backend URL

```env
REACT_APP_BACKEND_BASE_URL=${URL}
```

example (Windows) : `REACT_APP_BACKEND_BASE_URL=http://localhost:${NODE_LOCAL_PORT}`

example (Linux) : `REACT_APP_BACKEND_BASE_URL=http://0.0.0.0:${NODE_LOCAL_PORT}`

- Tools tokens

```env
ST=${ST_Token}
IPINFO=${IPINFO_Token}
SHODAN=${SHODAN_Token}
ZOOMEEYE=${ZOOMEEYE_Token}
HUNTER=${HUNTER_Token}
```

- linkedin credentials

```env
EMAIL_IN=${email}
PASS_IN=${pass}
```

### Run instructions

- Install server dependancies

```sh
cd server
npm install
```

- You need to load env variables for the server from dev.env

```sh
# For windows (use Gitbash)
set -a && source ../dev.env && set +a
# Or
export $(grep -v '^#' ../dev.env | xargs)

# For linux
source ../dev.env

```

- Run the server

```sh
npm start
```

- Install client dependancies

```sh
cd client
npm install
```

- You need to load env variables for the client from dev.env

```sh
# For windows (use Gitbash)
set -a && source ../dev.env && set +a
# Or
export $(grep -v '^#' ../dev.env | xargs)

# For linux
source ../dev.env

```

- Run the client

```sh
npm start
```

### Helpful tools

- Visual studio code (VS)
- Markdownlint VS extension
- ESLint VS extension

## Docker instructions

### For developement server

- Copy example.dev.env to dev.env and adapt you vaiables (See configuraion section)

- To run the server

```sh
docker-compose -f docker-compose.dev.yml --env-file example.dev.env up -d
```

- To connect to it

```sh
docker-compose -f docker-compose.dev.yml --env-file dev.env exec server /bin/bash
```

- Start the server

```sh
cd app
npm install
npm start
```

### For production server

- Copy example.env to .env and adapt you vaiables (See configuraion section)

- Build image (Go to server directory)

```sh
cd server
make build
```

- Publish image (Go to server directory)

```sh
cd server
make publish
```

- Test it

```sh
docker-compose up -d
```

### For developement client

- Copy example.dev.env to dev.env and adapt you vaiables (See configuraion section)

- To run the client (if you didn't run this command before for the server)

```sh
docker-compose -f docker-compose.dev.yml --env-file example.dev.env up -d
```

- To connect to it

```sh
docker-compose -f docker-compose.dev.yml --env-file dev.env exec client /bin/bash
```

- Start the server

```sh
cd app
npm install
npm start
```

### For production client

- Copy example.env to .env and adapt you vaiables (See configuraion section)

- Build image (Go to client directory)

```sh
cd client
make build
```

- Publish image (Go to client directory)

```sh
cd client
make publish
```

- Test it (if you didn't run this command before for the server)

```sh
docker-compose up -d
```
