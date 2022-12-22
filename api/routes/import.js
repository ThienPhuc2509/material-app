import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createImport,
  updateImport,
  deleteImport,
  getImport,
  getImports,
} from "../controllers/importController.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createImport);

//UPDATE
router.put("/:id", verifyAdmin, updateImport);
//DELETE
router.put("/delete/:id", verifyAdmin, deleteImport);
//GET

router.get("/find/:id", getImport);
//GET ALL

router.get("/", getImports);

export default router;
