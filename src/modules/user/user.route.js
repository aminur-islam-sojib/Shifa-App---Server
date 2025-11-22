import express from "express";
import { addUser, listUser, listUsers } from "./user.controller.js";

const router = express.Router();

router.get("/", listUsers);
router.get("/:id", listUser);
router.post("/add-user", addUser);

export default router;
