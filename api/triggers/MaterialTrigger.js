import Factory from "../models/Factory.js";

export const CheckExistingFactory = async (materialId) => {
  //trigger tìm phân xưởng có chứa vật liệu
  if (!materialId) return false;
  const factory = await Factory.find();
  let existingFactory = [];
  factory.forEach((i) => {
    i.materials.forEach((j)=> {
      if (i.materialId === materialId) existingFactory.push(i);
    })
  })
  if (existingFactory.length > 0) return false;
  else return true;
};

export const IncreaseQuantity = (req, res, next) => {
  // trigger tăng số lượng vật liệu khi nhập kho
  try {
    const increaseQuantity = req.body;
    increaseQuantity.materials.forEach(async (i) => {
      const updatedMaterial = await Material.findById(i.materialId);
      updatedMaterial.quantity = updatedMaterial.quantity + i.quantity;
      await updatedMaterial.save();
      next();
    });
  } catch (error) {
    res.status(500).json(err);
  }
};

