import { User } from '../models/user.model';
import userData from '../persistance/user.data';

class UserServices {
  saveUser = async (user : User) => {
    try {
      userData.saveUser(user);
    } catch (e) {
      throw new Error('Error throwed from strMatching service');
    }
  };
}

export default new UserServices();
