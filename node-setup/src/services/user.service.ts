import { IUser } from './interfaces';
import { UserType } from '../types';
import { UserRepo } from '../persistance/Repositories';

class User implements IUser {
  // eslint-disable-next-line no-useless-constructor
  constructor(private userData: UserRepo) {}

  create = async (user: UserType) => {
    try {
      return this.userData.create(user);
    } catch {
      throw new Error('Fail to login the user, Please try again !!');
    }
  };

  getById = (id: string) => {
    try {
      return this.userData.getById(id);
    } catch {
      throw new Error('Fail to get the user Data, Please try again !!');
    }
  };

  getByEmail = (email: string) => {
    try {
      return this.userData.getByEmail(email);
    } catch {
      throw new Error('Fail to get the user Data, Please try again !!');
    }
  };
}

export default User;
