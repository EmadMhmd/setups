import { User } from '../../models/postgres';

class UserData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveUser = async (user: any) => {
    try {
      const newUser = User.create(user);
      return newUser;
    } catch {
      throw new Error('Fail to save the user, Please try again !!');
    }
  };

  getUserById = async (id: string) => {
    try {
      const user = await User.findOne({ where: { id } });
      return user;
    } catch {
      throw new Error('Fail to get the user, Please try again !!');
    }
  };
}

export default new UserData();
