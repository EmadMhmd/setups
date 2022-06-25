import { Typegoose, prop } from 'typegoose';

export class User extends Typegoose {
  @prop({ required: true })
    name?: string;

  @prop({ required: true, unique: true })
    email?: string;

  @prop({ required: false })
    mobile?: string;

  @prop({ required: true, default: Date.now() })
    createdAt?: Date;

  @prop({ required: true, default: Date.now() })
    updatedAt?: Date;
}

const userModel = new User().getModelForClass(User);
export default userModel;
