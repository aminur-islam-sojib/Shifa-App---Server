import { ENV } from "../config/env.js";
import jwt from "jsonwebtoken";
import express from "express";

const router = express.Router();

export const getToken = (req, res) => {
  const data = req.body;
  const token = jwt.sign({ data }, ENV.JWT_SECRET_TOKEN, { expiresIn: "1h" });
  console.log(token);
  res.Jwt_Token = token;
};

router.post("/getJwtToken", getToken);

export default router;
