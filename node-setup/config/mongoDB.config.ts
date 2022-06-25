import mongoose from 'mongoose';

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_DATABASE,
  ENV_TYPE,
  MONGODB_HOST,
  MONGODB_PORT,
} = process.env;

let url = '';

if (ENV_TYPE === 'dev') {
  url = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;
} else {
  url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}?authSource=admin`;
}

const connectToMongo = () => {
  mongoose.connect(url);
  mongoose.connection.on('connected', () => {
    console.log('Connected Successfully To Database ');
  });
  mongoose.connection.on('error', (err) => {
    console.error(`Failed To Database : ${err}`);
  });
};

export default connectToMongo;
