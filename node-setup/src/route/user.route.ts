import * as express from 'express';
import userController from '../controller/user.controller';

const router = express.Router();

router.route('/user/:id?')
  .post(userController.saveUser)
  .get(userController.getUserById);

export default router;
