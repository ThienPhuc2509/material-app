import Export from "../models/Export.js";
import Material from "../models/Material.js";
import User from "../models/User.js";
import Factory from "../models/Factory.js";

export const createExport = async (req, res, next) => {
  const newExport = new Export(req.body);
  const materialId = req.params.materialid;
  const factoryId = req.params.factoryid;
  const userId = req.params.userid;
  try {
    const savedExport = await newExport.save();
    try{
      await Material.findByIdAndUpdate(materialId, 
        await Factory.findByIdAndUpdate(factoryId,{
          $push:{
            materialFactory: savedExport.name
          }
        }))

    }catch(err){
      next(err);

    }
    res.status(200).json(savedExport);
  } catch (err) {
    next(err);
  }
};

export const updateExport = async (req, res, next) => {
  try {
    const updatedExport = await Export.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
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
