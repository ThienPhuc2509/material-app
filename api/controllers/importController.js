import Import from "../models/Import.js";
import Material from "../models/Material.js";
export const createImport = async (req, res, next) => {
  const newImport = new Import(req.body);

  try {
    const savedImport = await newImport.save();
    savedImport.materials.forEach(async (i) => {
      const updatedMaterial = await Material.findById(i.materialId);
      updatedMaterial.quantity = updatedMaterial.quantity + i.quantity;
      await updatedMaterial.save();
      //console.log(updatedMaterial);
    });
    res.status(200).json(savedImport);
  } catch (err) {
    next(err);
  }
};

export const updateImport = async (req, res, next) => {
  try {
    const updatedImport = await Import.findByIdAndUpdate(req.params.id, {
      isDelete: true,
    });
    res.status(200).json(updatedImport);
  } catch (err) {
    next(err);
  }
};

export const deleteImport = async (req, res, next) => {
  try {
    await Import.findByIdAndDelete(req.params.id);
    res.status(200).json("Import has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getImport = async (req, res, next) => {
  try {
    const imports = await Import.findById(req.params.id);
    res.status(200).json(imports);
  } catch (err) {
    next(err);
  }
};
export const getImports = async (req, res, next) => {
  try {
    const imports = await Import.find();
    res.status(200).json(imports);
  } catch (err) {
    next(err);
  }
};
