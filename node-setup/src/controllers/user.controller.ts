import { Request, Response } from 'express';
import userData from '../persistance/user.data';

class UserContoller {
  saveUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      userData.saveUser(body);
      res.send({
        msg: 'User added successfully',
      });
    } catch (e) {
      res.status(401).send({
        error: 'Error Throwed From  User add service',
      });
    }
  };
}

export default new UserContoller();
