import { NextFunction, Request, Response } from 'express';
import { body } from 'express-validator';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isUserValid = async (req: Request, res: Response, next: NextFunction) => {
  try {
    body('email').isEmail();
    body('password').isLength({ min: 5 });
  } catch (e) {
    next(e);
  }
};

export default isUserValid;
