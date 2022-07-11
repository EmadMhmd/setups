import mongoose from 'mongoose';

import Env from './env.config';

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_DATABASE,
  SERVER_ENV,
  MONGODB_HOST,
  MONGODB_PORT,
} = Env;

let url = '';

if (SERVER_ENV === 'dev') {
  url = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;
} else {
  url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}?authSource=admin`;
}

const connectToMongo = () => {
  mongoose.connect(url);
  mongoose.connection.on('connected', () => {
    console.log('Connected successfully to MongoDB ');
  });
  mongoose.connection.on('error', (err) => {
    console.error(`Fail to connect to MongoDB : ${err}`);
  });
};

export default connectToMongo;
