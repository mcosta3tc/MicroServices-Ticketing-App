/**
 * scrypt => hashing fn but callback based fn (!= async await)
 *  ==> promisify
 */
import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export class Password {
  /**
   * static: can get access to these methods != creating instance of the class
   *    ex: Password.toHash
   */
  static async toHash(password: string) {
    // generates random string
    const salt = randomBytes(8).toString("hex");
    //as => TS => knows the type
    const buffer = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buffer.toString("hex")}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashPassword, salt] = storedPassword.split(".");
    const buffer = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    // comparing the buffer and the hash password in db
    return buffer.toString("hex") === hashPassword;
  }
}
