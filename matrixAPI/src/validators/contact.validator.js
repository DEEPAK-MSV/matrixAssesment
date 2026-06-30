import { body } from "express-validator";

export default [

    body("name").notEmpty(),

    body("email").isEmail(),

    body("message").notEmpty()

];