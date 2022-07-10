import { Request, Response } from 'express';
import { userService } from '../services';

class UserController {
  saveUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      await userService.saveUser(body);
      res.send({
        msg: 'User added successfully',
      });
    } catch (e: unknown) {
      res.status(401).send({
        error: (e instanceof Error && e.message) || 'Fail to signup the user, Please try again !!',
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
    } catch (e: unknown) {
      res.status(401).send({
        error: (e instanceof Error && e.message) || 'Fail to get user data, Please try again !!',
      });
    }
  };
}

export default new UserController();
