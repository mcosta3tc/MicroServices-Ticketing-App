import express, { Response, Request } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/requestValidationError";
import { DatabaseConnectionError } from "../errors/databaseConnectionError";

const router = express.Router();

router.post(
  "/api/users/signup",
  // Validation steps
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({
        min: 4,
        max: 20,
      })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  (req: Request, res: Response) => {
    // catch validations errors in the request
    const errors = validationResult(req);

    //if the errors obj !empty
    if (!errors.isEmpty()) {
      //return the errors obj as array of errors ==> sent as json data
      throw new RequestValidationError(errors.array());
    }
    console.log("Creating a user...");
    const { email, password } = req.body;

    throw new DatabaseConnectionError();

    res.send({ email, password });
  }
);

//Exporting and rename it
export { router as signUpRouter };
