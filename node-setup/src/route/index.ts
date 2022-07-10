import { Router } from 'express';
import userRoute from './api/user.route';

const routes = Router();

routes.use('/user', userRoute);

export default routes;
