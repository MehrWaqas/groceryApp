import express from "express";
import {createBasket, getAllItems, getItemById, deleteItemById} from "../controllers/getBasketItems.js";


const router = express.Router()

router.post("/basket/item", createBasket);
router.get("/basket/item", getAllItems);
router.get("/basket/item/:id", getItemById);
router.delete("/basket/item/:id", deleteItemById);



export default router;