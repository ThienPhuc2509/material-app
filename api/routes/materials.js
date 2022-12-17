import express from "express";
import {
  createMaterial,
  deleteMaterial,
  getMaterial,
  getMaterials,
  updateMaterial,
  // updateMaterialAvailability,
} from "../controllers/materialController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", verifyAdmin, createMaterial);

//UPDATE
// router.put("/availability/:id", updateMaterialAvailability);
router.put("/:id", verifyAdmin, updateMaterial);
//DELETE
router.delete("/:id/:warehouseid", verifyAdmin, deleteMaterial);
//GET

router.get("/find/:id", getMaterial);
//GET ALL

router.get("/", getMaterials);

export default router;
