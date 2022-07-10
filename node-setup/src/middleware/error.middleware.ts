import { NextFunction, Request, Response } from 'express';
import { Error } from '../interface';

const errorMiddleware = async (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Whoops!! Something went wrong';
  res.status(status).json({ status, message });
};

export default errorMiddleware;
