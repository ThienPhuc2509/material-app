import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createExport,
  updateExport,
  deleteExport,
  getExport,
  getExports,
} from "../controllers/exportController.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createExport);

//UPDATE
router.put("/:id", verifyAdmin, updateExport);
//DELETE
router.delete("/:id", verifyAdmin, deleteExport);
//GET

router.get("/find/:id", getExport);
//GET ALL

router.get("/", getExports);

export default router;
