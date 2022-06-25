import { User } from '../models/mongodb/user.model';
import userData from '../persistance/postgresDBDataAccess/user.data';

class UserServices {
  saveUser = async (user : User) => {
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

export default new UserServices();
