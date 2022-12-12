import Material from "../models/Material.js";
import Warehouse from "../models/Warehouse.js";
// import Supplier from "../models/Supplier.js";
import { createError } from "../utils/error.js";

export const createMaterial = async (req, res, next) => {
  const warehouseId = req.params.warehouseid;
  const newMaterial = new Material(req.body);

  try {
    const savedMaterial = await newMaterial.save();
    try {
      await Warehouse.findByIdAndUpdate(warehouseId, {
        $push: {
          // id vật liệu
          // materials: [savedMaterial._id, savedMaterial.name],
          materials: {
            name: savedMaterial.name,
            quantity: savedMaterial.quantity,
          },
        },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedMaterial);
    console.log(savedMaterial);
  } catch (err) {
    next(err);
  }
};

export const updateMaterial = async (req, res, next) => {
  try {
    const updatedMaterial = await Material.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedMaterial);
  } catch (err) {
    next(err);
  }
};
// export const updateMaterialAvailability = async (req, res, next) => {
//   try {
//     await Room.updateOne(
//       { "roomNumbers._id": req.params.id },
//       {
//         $push: {
//           "roomNumbers.$.unavailableDates": req.body.dates,
//         },
//       }
//     );
//     res.status(200).json("Room status has been updated.");
//   } catch (err) {
//     next(err);
//   }
// };

// ************ Lưu ý

export const deleteMaterial = async (req, res, next) => {
  const warehouseId = req.params.warehouseid;
  try {
    await Material.findByIdAndDelete(req.params.id);
    try {
      await Warehouse.findByIdAndUpdate(warehouseId, {
        $pull: { materials: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Material has been deleted.");
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
    const materials = await Material.find();
    res.status(200).json(materials);
  } catch (err) {
    next(err);
  }
};

export const getMaterialSupplier = async (req, res, next) => {
  try {
    const material = await Material.findById(req.params.id);
    const list = await Promise.all(
      material.provider.map((item) => {
        return Supplier.findById(item);
      })
    );
    res.status(200).json(list);
    console.log(list);
  } catch (err) {
    next(err);
  }
};
