import { CustomError } from "./customError";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super("Route not Found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: "Not Found" }];
  }
}
