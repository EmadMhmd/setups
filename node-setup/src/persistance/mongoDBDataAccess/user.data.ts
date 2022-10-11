/* eslint-disable no-underscore-dangle */
import { User } from '../../models/mongodb';
import { UserType } from '../../types';
import { UserRepo } from '../Repositories';

class UserData implements UserRepo {
  // constructor(private readonly x: string) { }

  create = async (user: UserType) => {
    try {
      const newUser = new User(user);
      await newUser.save();

      let userDTO: UserType | undefined;
      if (newUser) {
        userDTO = {
          email: user.email,
          mobile: user.mobile,
          name: user.name,
          password: '',
        };
      }

      return userDTO;
    } catch {
      throw new Error('Fail to create the user, Please try again !!');
    }
  };

  getById = async (id: string) => {
    try {
      const user = await User.findOne({ id });

      let userDTO: UserType | undefined;
      if (user) {
        userDTO = {
          email: user.email || '',
          mobile: user.mobile || '',
          name: user.name || '',
          password: '',
        };
      }

      return userDTO;
    } catch {
      throw new Error('Fail to get the user, Please try again !!');
    }
  };

  getByEmail = async (email: string) => {
    try {
      const user = await User.findOne({ email });

      let userDTO: UserType | undefined;
      if (user) {
        userDTO = {
          id: user._id,
          email,
          mobile: user.mobile,
          name: user.name || '',
          password: user.password || '',
        };
      }

      return userDTO;
    } catch {
      throw new Error('Fail to get the user, Please try again !!');
    }
  };
}

export default UserData;
