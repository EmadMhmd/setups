import mongoose from 'mongoose';

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_DATABASE,
  ENV_TYPE,
} = process.env;

let {
  DB_HOST,
  DB_PORT,
} = process.env;

// if server is running without docker
if (!DB_PORT) {
  DB_PORT = String(27017);
}

// if server is running without docker
if (!DB_HOST) {
  DB_HOST = 'localhost';
}

let url = '';

if (ENV_TYPE === 'dev') {
  url = `mongodb://${DB_HOST}/${MONGODB_DATABASE}`;
} else {
  url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${DB_HOST}:${DB_PORT}/${MONGODB_DATABASE}?authSource=admin`;
}

const connectDb = () => {
  mongoose.connect(url);
  mongoose.connection.on('connected', () => {
    console.log('Connected Successfully To Database ');
  });
  mongoose.connection.on('error', (err) => {
    console.error(`Failed To Database : ${err}`);
  });
};

export default connectDb;
