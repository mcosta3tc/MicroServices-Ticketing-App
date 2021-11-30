/**
 * Make sure Errors implement. Error obj structure
 *
 * Extending CustomError:
 *  - have all this properties
 */
export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    // bcz extending a class existing in JS
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
