import express from "express";

import controller from "../controllers/contact.controller.js";
import validator from "../validators/contact.validator.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();

router.post(
    "/",
    validator,
    validate,
    controller.create
);

router.get(
    "/",
    controller.getAll
);

export default router;