// routes/index.js
import express from "express";

import doctorRoutes from "../modules/doctor/doctor.route.js";

const router = express.Router();

// Attach module routes
router.use("/doctors", doctorRoutes);

export default router;
