import Material from "../models/Material.js";
import User from "../models/User.js";
import Factory from "../models/Factory.js";

// trigger kiểm tra nhân viên xuất háo đơn có tồn tại hay không khi xóa hóa đơn - userId
export const GetQuantityExport = async (userId) => {
  if (!userId) return false;
  const existingUser = await User.find({ _id: userId, isDelete: false });
  if (existingUser === 0) return true;
  else return false;
};

// trigger giảm số lượng vật liệu khi xuất kho
export const DecreaseQuantity = async (materials) => {
  materials.map(async (i) => {
    const updatedMaterial = await Material.findById(i.materialId);
    updatedMaterial.quantity =
      updatedMaterial.quantity >= i.quantity
        ? updatedMaterial.quantity - parseInt(i.quantity)
        : 0;
    await updatedMaterial.save();
  });
};

// trigger cập nhập số lượng vật liệu cho Phân xưởng khi xuất kho
export const UpdatedMaterialFactory = async (factoryId, materials) => {
  await Factory.findByIdAndUpdate(factoryId, {
    $push: {
      materials: materials,
    },
  });
};
