import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  deleteUserByIdService,
} from "../models/userService.js";
import handleResponse from "../utils/utils.js";

export const createUser = async (req, res, next) => {
  const newUser = await createUserService(req.body);
  handleResponse(res, 201, "User created successfully", newUser);
};

export const getAllUsers = async (req, res, next) => {
  const users = await getAllUsersService();
  handleResponse(res, 200, "Users fetched successfully", users);
};

export const getUserById = async (req, res, next) => {
  const user = await getUserByIdService(req.params.id);
  if (user) {
    handleResponse(res, 200, "User fetched successfully", user);
  } else {
    handleResponse(res, 404, "User record not found!", user);
  }
};

export const deleteUserById = async (req, res, next) => {
  const user = await deleteUserByIdService(req.params.id);
  if (user) {
    handleResponse(res, 200, "User deleted successfully", user);
  } else {
    handleResponse(res, 404, "User record not found!", user);
  }
};
