import mongoose from "mongoose";
import { Password } from "../services/password";

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
 * fn keywrd => to refer to 'this' => user in doc !== this of user.ts with an arrow fn
 * done => handling await cause mongoose don't
 */
userSchema.pre("save", async function (done) {
  /**
   * hash the password if only it has been modified
   */
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }

  done();
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
