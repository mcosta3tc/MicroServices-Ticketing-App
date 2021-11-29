import express, { Response, Request } from "express";
import { body, validationResult } from "express-validator";

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
      res.status(400).send(errors.array());
    }
    console.log("Creating a user...");
    const { email, password } = req.body;

    res.send({ email, password });
  }
);

//Exporting and rename it
export { router as signUpRouter };
