import { NextFunction, Request, Response } from 'express';
import { Get, Route } from 'tsoa';
import { hashPassword, isPasswordValid } from '../util/hashing';
import { signUser } from '../util/auth.util';
import { User } from '../services';
import { IUser } from '../services/interfaces';
import { DataAccess } from '../persistance';
import { UserType } from '../types';

const { UserDataAccess } = DataAccess;

@Route('user')
class UserController {
  private user: IUser;

  constructor() {
    const userDataAccess = new UserDataAccess();
    const user = new User(userDataAccess);
    this.user = user;
  }

  @Get('/{id}')
  public async getById(id: string): Promise<any> {
    const user = await this.user.getById(id);
    return user;
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;

      const user = await this.user.create({ ...body, password: hashPassword(body.password) });

      res.send({
        msg: 'User added successfully', user,
      });
    } catch (e) {
      next(e);
    }
  };

  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.user.user;
      const user = await this.user.getById(id);
      res.send({
        msg: 'User got successfully', user,
      });
    } catch (e) {
      next(e);
    }
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body: { email, password } } = req;
      const user = await this.user.getByEmail(email);
      if (user && isPasswordValid(user.password, password)) {
        const token = signUser(user);
        res.send({
          msg: 'Signin successfully',
          token,
        });
      } else {
        throw new Error('Email and password not match, Please try again !!');
      }
    } catch (e) {
      next(e);
    }
  };
}

export default new UserController();
