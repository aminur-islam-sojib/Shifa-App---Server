import express from "express";
import patientRoute from "../src/modules/patient/patient.route.js";
import doctorRoute from "../src/modules/doctor/doctor.route.js";
import userRoute from "../src/modules/user/user.route.js";
import tokeRoute from "../src/utilities/jwt.js";

const router = express.Router();

// Attach module routes
router.use("/doctor", doctorRoute);
router.use("/patient", patientRoute);
router.use("/user", userRoute);
router.use("/token", tokeRoute);

export default router;
