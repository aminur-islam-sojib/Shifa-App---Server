import express from "express";
import patientRoute from "../src/modules/patient/patient.route.js";
import doctorRoute from "../src/modules/doctor/doctor.route.js";

const router = express.Router();

// Attach module routes
router.use("/doctors", doctorRoute);
router.use("/patients", patientRoute);

export default router;
