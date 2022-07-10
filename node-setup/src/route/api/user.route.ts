import * as express from 'express';
import { userController } from '../../controller';

const router = express.Router();

router.route('/')
  .post(userController.saveUser)
  .get(userController.saveUser);

router.route('/:id')
  .get(userController.getUserById)
  .delete(userController.getUserById)
  .patch(userController.getUserById)
  .put(userController.getUserById);

// router.route('/user/test')
//   .get(async (req: express.Request, res:express.Response) => {
//     res.send('Done');
//   });

export default router;
