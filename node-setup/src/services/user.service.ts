import { IUser } from '../interface';
import { userData } from '../persistance/postgresDBDataAccess';
// import { userData } from '../persistance/mongoDBDataAccess';

class UserService {
  saveUser = async (user : IUser) => {
    try {
      const newUser = await userData.saveUser(user);
      return newUser;
    } catch (e) {
      throw new Error('Error throwed from strMatching service');
    }
  };

  getUserById = async (id: string) => {
    try {
      const user = await userData.getUserById(id);
      return user;
    } catch (e) {
      throw new Error('Error throwed from strMatching service');
    }
  };
}

export default new UserService();
