import express from "express";
import {
  createWarehouse,
  deleteWarehouse,
  getWarehouse,
  getWarehouses,
  updateWarehouse,
} from "../controllers/warehouseController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createWarehouse);

//UPDATE
router.put("/:id", verifyAdmin, updateWarehouse);
//DELETE
router.put("/delete/:id", verifyAdmin, deleteWarehouse);
//GET

router.get("/find/:id", getWarehouse);
//GET ALL

router.get("/", getWarehouses);

export default router;
