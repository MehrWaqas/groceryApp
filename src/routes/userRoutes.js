import express from "express";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.delete("/user/:id", deleteUserById);

export default router;
