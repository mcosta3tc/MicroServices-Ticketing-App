/**
 * The front need to consume a consistently error obj
 * Besides it's a rudy MS error, express MS error, spring MS ,db error
 */
import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/requestValidationError";
import { DatabaseConnectionError } from "../errors/databaseConnectionError";

//Express knows it's an error MiddleWare (= 4 params)
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /**
   * consistently error msg
   */
  if (err instanceof RequestValidationError) {
    console.log("Handling this error a RequestValidationError");
  }
  if (err instanceof DatabaseConnectionError) {
    console.log("Handling this error a DatabaseConnectionError");
  }

  res.status(200).send({
    message: err.message,
  });
};
