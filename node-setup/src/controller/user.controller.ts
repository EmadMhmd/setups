import { Request, Response } from 'express';
import { userService } from '../services';

class UserContoller {
  saveUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      await userService.saveUser(body);
      res.send({
        msg: 'User added successfully',
      });
    } catch (e) {
      res.status(401).send({
        error: 'Error Throwed From  User add service',
      });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await userService.getUserById(id);
      res.send({
        msg: 'User got successfully', user,
      });
    } catch (e) {
      res.status(401).send({
        error: 'Error Throwed From  get user service',
      });
    }
  };
}

export default new UserContoller();
