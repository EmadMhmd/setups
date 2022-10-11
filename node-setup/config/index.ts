import mongoDBConfig from './mongoDB.config';
import postgresDBConfig from './postgresDB.config';
import Env from './env.config';

const connectToDB = () => {
  mongoDBConfig();
  postgresDBConfig();
};

export { connectToDB };

export default Env;
