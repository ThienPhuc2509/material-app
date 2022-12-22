import Supplier from "../models/Supplier.js";
import Material from "../models/Material.js";
import { createError } from "../utils/error.js";

export const createSupplier = async (req, res, next) => {
  const newSupplier = new Supplier(req.body);

  try {
    const savedSupplier = await newSupplier.save();

    res.status(200).json(savedSupplier);
  } catch (err) {
    next(err);
  }
};

export const updateSupplier = async (req, res, next) => {
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSupplier);
  } catch (err) {
    next(err);
  }
};
export const deleteSupplier = async (req, res, next) => {
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      {
        isDelete: true,
      },
      { new: true }
    );
    res.status(200).json(updatedSupplier);
  } catch (err) {
    next(err);
  }
};

export const getSupplier = async (req, res, next) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    res.status(200).json(supplier);
  } catch (err) {
    next(err);
  }
};

export const get = async (req, res, next) => {
  try {
    const supplier = await Supplier.find();
    res.status(200).json(supplier);
  } catch (err) {
    next(err);
  }
};
