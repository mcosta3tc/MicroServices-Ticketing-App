/**
 * The front need to consume a consistently error obj
 * Besides it's a rudy MS error, express MS error, spring MS ,db error
 */
import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/customError";

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
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(200).send({
    errors: [
      {
        message: "Something went wrong",
      },
    ],
  });
};
