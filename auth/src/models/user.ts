import mongoose from "mongoose";

/**
 * describes properties required to create a new User => TS's type checking
 */
interface UserAttributes {
  email: string;
  password: string;
}

/**
 * describes properties User Model as
 */
interface UserModel extends mongoose.Model<UserDoc> {
  build(attributes: UserAttributes): UserDoc;
}

/**
 * describes properties User Document as
 */
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

/**
 * Schema def
 */
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

/**
 * custom fn built in the model
 * @param attributes
 */
userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
