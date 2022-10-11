import * as express from 'express';
import { userController } from '../../controller';
import isAuth from '../../middleware/auth.middleware';
import isUserValid from '../../middleware/userValidation.middleware';

const router = express.Router();

router.route('/')
  .all(isUserValid)
  .post(userController.create);

router.route('/login')
  .all(isUserValid)
  .post(userController.login);

router.route('/')
  .all(isAuth)
  .get(userController.get);
// .delete(userController.getUserById)
// .patch(userController.getUserById)
// .put(userController.getUserById);

export default router;
