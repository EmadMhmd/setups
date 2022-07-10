import { Sequelize } from 'sequelize';
import Env from './env.config';

const {
  POSTGERS_USER,
  POSTGERS_PASSWORD,
  POSTGERS_DATABASE,
  POSTGRES_HOST,
  POSTGRES_PORT,
} = Env;

export const db = new Sequelize(`postgres://${POSTGERS_USER}:${POSTGERS_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGERS_DATABASE}`);

const connectToPostgres = async () => {
  try {
    await db.authenticate();
    console.log('Connect to postgres db has been established successfully.');
  } catch (error) {
    // db.close();
    console.error('Unable to connect to the postgres db:', error);
  }
};

export default connectToPostgres;
