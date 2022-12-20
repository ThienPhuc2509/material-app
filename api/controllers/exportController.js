import Export from "../models/Export.js";
import Material from "../models/Material.js";
import User from "../models/User.js";
import Factory from "../models/Factory.js";

export const createExport = async (req, res, next) => {
  const newExport = new Export(req.body);
  //console.log(newExport);
  try {
    const savedExport = await newExport.save();

    savedExport.materials.forEach(async (i) => {
      const updatedMaterial = await Material.findById(i.materialId);
      updatedMaterial.quantity =
        updatedMaterial.quantity >= i.quantity
          ? updatedMaterial.quantity - i.quantity
          : 0;
      await updatedMaterial.save();
      try {
        await Factory.findByIdAndUpdate(req.body.factoryId, {
          $push: {
            // id vật liệu
            // materials: [savedMaterial._id, savedMaterial.name],
            materials: req.body.materials,
          },
        });
      } catch (err) {
        next(err);
      }
    });
    res.status(200).json(savedExport);
  } catch (err) {
    next(err);
  }
};

// trường hợp lúc đầu a => -3 => -5 => 3-5 =-2 | -5 => -3 => 5 -

export const updateExport = async (req, res, next) => {
  try {
    const updatedExport = await Export.findByIdAndUpdate(req.params.id, {
      isDelete: true,
    });
    updatedExport.materials.forEach(async (i) => {
      const updatedMaterial = await Material.findById(i.materialId);
      updatedMaterial.quantity =
        updatedMaterial.quantity >= i.quantity
          ? updatedMaterial.quantity - i.quantity
          : 0;
      await updatedMaterial.save();
    });
    res.status(200).json(updatedExport);
  } catch (err) {
    next(err);
  }
};

export const deleteExport = async (req, res, next) => {
  try {
    await Export.findByIdAndDelete(req.params.id);
    res.status(200).json("Export has been deleted.");
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
