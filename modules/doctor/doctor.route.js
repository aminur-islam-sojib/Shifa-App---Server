import express from "express";
import {
  addDoctorInfo,
  listDoctors,
  searchDoctorsController,
} from "./doctor.controller.js";

const router = express.Router();

// Routes
router.get("/", listDoctors);
router.get("/search/:query", searchDoctorsController);
router.post("/addDoctor", addDoctorInfo);

export default router;
