import express from "express";
import {
  createWarehouse,
  deleteWarehouse,
  getWarehouse,
  getWarehouseRooms,
  getWarehouses,
  updateWarehouse,
} from "../controllers/warehouseController.js";
import Warehouse from "../models/Warehouse.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createWarehouse);

//UPDATE
router.put("/:id", verifyAdmin, updateWarehouse);
//DELETE
router.delete("/:id", verifyAdmin, deleteWarehouse);
//GET

router.get("/find/:id", getWarehouse);
//GET ALL

router.get("/", getWarehouses);

router.get("/room/:id", getWarehouseRooms);

export default router;
