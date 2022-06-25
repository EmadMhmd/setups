import userModel from './user.model';
import { db } from '../../../config/postgresDB.config';

const User = userModel(db);

db.sync({ force: false })
  .then(() => {
    console.log('Tables Created');
  });

export {
  User,
};
