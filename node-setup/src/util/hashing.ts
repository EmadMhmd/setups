import bcrypt from 'bcrypt';
import Env from '../../config';

const { PEPPER, SALT } = Env;

const hashPassword = (password: string) => {
  const salt = parseInt(SALT as string, 10);
  return bcrypt.hashSync(`${password}${PEPPER}`, salt);
};

const isPasswordValid = (hashedPassword: string, password: string) => {
  const isValid = bcrypt.compareSync(
    `${password}${PEPPER}`,
    hashedPassword,
  );
  return isValid;
};

export {
  hashPassword,
  isPasswordValid,
};
