import { User } from '../../models/mongodb';
import { IUser } from '../../interface';

class UserData {
  saveUser = async (user : IUser) => {
    try {
      const newUser = new User(user);
      await newUser.save();
      return newUser;
    } catch {
      throw new Error('Fail to save the user, Please try again !!');
    }
  };

  getUserById = async (_id: string) => {
    try {
      return User.findOne({ _id });
    } catch {
      throw new Error('Fail to get the user, Please try again !!');
    }
  };
}

export default new UserData();
