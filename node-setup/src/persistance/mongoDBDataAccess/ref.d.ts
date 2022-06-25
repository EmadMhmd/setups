import { Ref } from 'typegoose';
import { User } from '../../models/mongodb';

type userId = Ref<User>

const Refs = {
  userId,
};

export default Refs;
