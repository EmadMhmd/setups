import { User } from '../../models/mongodb';
import { IUser } from '../../interface';

class UserData {
  saveUser = async (user : IUser) => {
    try {
      const newUser = new User(user);
      await newUser.save();
      return newUser;
    } catch (e) {
      Object(e).message = 'Fail to save the employee !!';
      throw e;
    }
  };

  getUserById = async (_id: string) => {
    try {
      return User.findOne({ _id });
    } catch (e) {
      Object(e).message = 'Fail to get the user !!';
      throw e;
    }
  };
}

export default new UserData();
