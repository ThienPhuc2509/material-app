import Warehouse from "../models/Warehouse.js";
import Material from "../models/Material.js";

export const createWarehouse = async (req, res, next) => {
  const newWarehouse = new Warehouse(req.body);

  try {
    const savedWarehouse = await newWarehouse.save();
    res.status(200).json(savedWarehouse);
  } catch (err) {
    next(err);
  }
};
export const updateWarehouse = async (req, res, next) => {
  try {
    const updatedWarehouse = await Warehouse.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedWarehouse);
  } catch (err) {
    next(err);
  }
};
export const deleteWarehouse = async (req, res, next) => {
  try {
    const updatedWarehouse = await Warehouse.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedWarehouse);
  } catch (err) {
    next(err);
  }
};
export const getWarehouse = async (req, res, next) => {
  try {
    const warehouse = await Warehouse.findById(req.params.id);

    res.status(200).json(warehouse);
  } catch (err) {
    next(err);
  }
};
export const getWarehouses = async (req, res, next) => {
  // const { min, max, ...others } = req.query;
  try {
    const warehouses = await Warehouse.find();

    res.status(200).json(warehouses);
  } catch (err) {
    next(err);
  }
};
