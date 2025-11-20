// server.js
import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());

// Connect MongoDB
await connectDB();

// Routes
app.use("/", routes);

// Start server
app.listen(ENV.PORT, () => {
  console.log(`🚀 Server running on port ${ENV.PORT}`);
});
