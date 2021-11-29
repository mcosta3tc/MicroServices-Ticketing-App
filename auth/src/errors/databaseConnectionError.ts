export class DatabaseConnectionError extends Error {
  reason = "Error Connection DB";

  constructor() {
    super();
    /**
     * TS :
     * extending a built in class
     */
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
