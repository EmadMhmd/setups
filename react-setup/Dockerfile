# pull official base image (latest stable image [lts])
FROM node:16.13.1 AS builder 

# set working directory
WORKDIR /app

# install app dependencies
#copies package.json and package-lock.json to Docker environment
COPY package.json ./

# Installs all node packages
RUN npm install 

# Copies everything over to Docker environment
COPY . ./
RUN npm run build

#Stage 2
#######################################
#pull the official nginx:1.20.0 base image (latest stable image [lts])
FROM nginx:1.20.1  
#copies React to the container directory
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
# Copies static resources from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# COPY ../.env .env
COPY ./env.sh .

RUN chmod +x env.sh


EXPOSE 80

CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh > env.js && nginx -g \"daemon off;\""]

