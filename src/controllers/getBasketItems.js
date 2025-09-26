
import handleResponse from "../utils/utils.js";
import {createBasketService,
        getAllItemsService,
        getItemByIdService,
        deleteItemByIdService,
} from "../models/basketService.js";

export const createBasket = async(req, res, next) => {

    const createBasket = await createBasketService(req.body);
    handleResponse(res, 201, "User created successfully", createBasket);
};

export const getAllItems = async (req, res, next) => {
  const items = await getAllItemsService();
  handleResponse(res, 200, "Users fetched successfully", items);
};

export const getItemById = async (req, res, next) => {
  const item = await getItemByIdService(req.params.id);
  if (item) {
    handleResponse(res, 200, "User fetched successfully", item);
  } else {
    handleResponse(res, 404, "User record not found!", item);
  }
};

export const deleteItemById = async (req, res, next) => {
  const item = await deleteItemByIdService(req.params.id);
  if (item) {
    handleResponse(res, 200, "User deleted successfully", item);
  } else {
    handleResponse(res, 404, "User record not found!", item);
  }
};