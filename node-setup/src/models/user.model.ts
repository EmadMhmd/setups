import { Typegoose, prop } from 'typegoose';
// import { User } from '../users/user.model';
// import { Review } from '../Helper Classes/review';
export class User extends Typegoose {
//   @prop({ ref: User, required: true })
//     user?: Ref<User>;

  @prop({ required: true })
    name?: string;

  @prop({ required: true, unique: true })
    email?: string;

  //   @prop({ default: [] })
  //     reviews?: Review[];

  @prop({ required: true, default: Date.now() })
    createdAt?: Date;

  @prop({ required: true, default: Date.now() })
    updatedAt?: Date;
}
const userModel = new User().getModelForClass(User);
export default userModel;
