# will use multi stage later

FROM node:16.13.1

WORKDIR /server
COPY package.json .
RUN npm install
COPY . .
CMD npm start
