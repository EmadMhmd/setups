import jwt from 'jsonwebtoken';
import Env from '../../config';
import { UserType } from '../types';

const { SECRETE } = Env;

const signUser = (user: UserType) => {
  const token = jwt.sign({ user }, SECRETE as string);
  return token;
};

const verifyToken = (authToken: string) => {
  const user = jwt.verify(authToken, SECRETE as string);
  return user;
};

export {
  signUser,
  verifyToken,
};
