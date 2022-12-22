import Material from "../models/Material.js";
import Warehouse from "../models/Warehouse.js";
// import Supplier from "../models/Supplier.js";
import { createError } from "../utils/error.js";
import { CheckExistingFactory } from "../triggers/MaterialTrigger.js";

export const createMaterial = async (req, res, next) => {
  try {
    const newMaterial = new Material(req.body);
    const savedMaterial = await newMaterial.save();
    res.status(200).json(savedMaterial);
  } catch (err) {
    next(err);
  }
};

export const updateMaterial = async (req, res, next) => {
  try {
    const updatedMaterial = await Material.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedMaterial);
  } catch (err) {
    next(err);
  }
};

// ************ Lưu ý

export const deleteMaterial = async (req, res, next) => {
  if (CheckExistingFactory(req.params.id) === true)
    return res.status(500).json("Existing this material in Factoty");
  try {
    const updatedMaterial = await Material.findByIdAndUpdate(
      req.params.id,
      {
        isDelete: true,
      },
      { new: true }
    );
    res.status(200).json(updatedMaterial);
  } catch (err) {
    next(err);
  }
};
// ************

export const getMaterial = async (req, res, next) => {
  try {
    const material = await Material.findById(req.params.id);

    res.status(200).json(material);
  } catch (err) {
    next(err);
  }
};
export const getMaterials = async (req, res, next) => {
  try {
    const materials = await Material.find({isDelete:false});
    res.status(200).json(materials);
  } catch (err) {
    next(err);
  }
};

export const getMaterialSupplier = async (req, res, next) => {
  try {
    const material = await Material.findById(req.params.id);
    const list = await Promise.all(
      material.supplierId.map((item) => {
        return Supplier.findById(item);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
