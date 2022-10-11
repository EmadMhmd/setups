/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../util/auth.util';

declare global {
  namespace Express {
    // eslint-disable-next-line no-shadow
    interface Request {
      user?: any;
    }
  }
}

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get('Authorization');
    const authType = authHeader?.split(' ')[0].toLowerCase();
    const authToken = authHeader?.replace(/[ ]+/, ' ').split(' ')[1];

    const user = verifyToken(authToken as string);

    const isTokenValid = user && authType === 'bearer';
    if (isTokenValid) {
      req.user = user;
      next();
    } else {
      throw new Error('Unauthorized user !!, Please Try to login first !!');
    }
  } catch {
    next(new Error('Unauthorized user !!, Please Try to login first !!'));
  }
};

export default isAuth;
