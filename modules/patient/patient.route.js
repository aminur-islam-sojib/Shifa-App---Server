import express from "express";
import { addListingPatient, listPatient } from "./patient.controller.js";

const router = express.Router();

router.get("/", listPatient);
router.post("/addPatient", addListingPatient);

export default router;
