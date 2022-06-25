import { User } from '../../models/postgres';

class UserData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveUser = async (user: any) => {
    try {
      const newUser = User.create(user);
      return newUser;
    } catch (e) {
      Object(e).message = 'Fail to save the user !!';
      throw e;
    }
  };

  getUserById = async (id: string) => {
    try {
      const user = await User.findOne({ where: { id } });
      return user;
    } catch (e) {
      Object(e).message = 'Fail to get the user !!';
      throw e;
    }
  };
}

export default new UserData();
