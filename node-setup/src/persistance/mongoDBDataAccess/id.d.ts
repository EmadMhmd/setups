import { Ref } from 'typegoose';
import { User } from '../model';

type userId = Ref<User>

export default userId;
export {
  userId,
};
