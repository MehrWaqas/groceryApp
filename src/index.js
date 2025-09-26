import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
import createBasketTable from "./data/createBasketTable.js";
import userRoutes from "./routes/userRoutes.js";
import basketRoute from "./routes/basketRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

createUserTable();
createBasketTable();
// Routes
app.use("/api", userRoutes);
app.use("/api", basketRoute);

// Error handling middleware
app.use(errorHandler);

// Server running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
