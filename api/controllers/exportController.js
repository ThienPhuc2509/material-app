import Export from "../models/Export.js";
import {
  DecreaseQuantity,
  UpdatedMaterialFactory,
} from "../triggers/ExportTrigger.js";

export const createExport = async (req, res, next) => {
  const newExport = new Export(req.body);
  try {
    const check = await DecreaseQuantity(req.body.materials);
    if(check===false) return  res.status(500).json("error");
    await UpdatedMaterialFactory(req.body.factoryId, req.body.materials);
    const savedExport = await newExport.save();
    res.status(200).json(savedExport);
  } catch (err) {
    next(err);
  }
};

export const updateExport = async (req, res, next) => {
  try {
    await DecreaseQuantity(req.body.materials);
    await UpdatedMaterialFactory(req.body.factoryId, req.body.materials);
    const updatedExport = await Export.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedExport);
  } catch (err) {
    next(err);
  }
};

export const deleteExport = async (req, res, next) => {
  try {
    const updatedExport = await Export.findByIdAndUpdate(
      req.params.id,
      {
        isDelete: true,
      },
      { new: true }
    );
    res.status(200).json(updatedExport);
  } catch (err) {
    next(err);
  }
};

export const getExport = async (req, res, next) => {
  try {
    const exports = await Export.findById(req.params.id);
    res.status(200).json(exports);
  } catch (err) {
    next(err);
  }
};

export const getExports = async (req, res, next) => {
  try {
    const exports = await Export.find();
    res.status(200).json(exports);
  } catch (err) {
    next(err);
  }
};
