import express from "express";
import { json } from "express";
import { currentUserRouter } from "./routes/currentUser";
import { signInRouter } from "./routes/signIn";
import { signOutRouter } from "./routes/signOut";
import { signUpRouter } from "./routes/signUp";

const app = express();
app.use(json());

//Routes
/*app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
*/
app.use(signUpRouter);

module.exports = app;
