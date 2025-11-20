// routes/index.js
import express from "express";
import doctorRoutes from "../modules/doctor/doctor.route.js";
import patientRoute from "../modules/patient/patient.route.js";

const router = express.Router();

// Attach module routes
router.use("/doctors", doctorRoutes);
router.use("/patients", patientRoute);

export default router;
