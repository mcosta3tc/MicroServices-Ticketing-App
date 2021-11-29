import { CustomError } from "./customError";

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error Connection DB";

  constructor() {
    //logs
    super("Error Connection DB");
    /**
     * TS :
     * extending a built in class
     */
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
