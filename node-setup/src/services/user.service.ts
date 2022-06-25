import { IUser } from '../interface';
import { userData } from '../persistance/postgresDBDataAccess';
// import { userData } from '../persistance/mongoDBDataAccess';

class UserService {
  saveUser = async (user : IUser) => {
    try {
      const newUser = await userData.saveUser(user);
      return newUser;
    } catch {
      throw new Error('Fail to signup the user, Please try again !!');
    }
  };

  getUserById = async (id: string) => {
    try {
      const user = await userData.getUserById(id);
      return user;
    } catch {
      throw new Error('Fail to get the user Data');
    }
  };
}

export default new UserService();
