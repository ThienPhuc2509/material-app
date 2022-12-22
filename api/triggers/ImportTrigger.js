import User from "../models/User.js";
import Material from "../models/Material.js";

//trigger lấy số lượng Hóa đơn nhập mà Nhân viên đã thực hiện - userId
export const GetQuantityImport = async (userId) => {
  if (!userId) return false;
  const ExsitingUser = await User.find({ _id: userId, isDelete: false });
  if (ExsitingUser.length === 0) return true;
  else return false;
};

// trigger tăng số lượng vật liệu khi nhập kho
export const IncreaseQuantity = async (materials) => {
  materials.map(async (i) => {
    const updatedMaterial = await Material.findById(i.materialId);
    updatedMaterial.quantity = updatedMaterial.quantity + i.quantity;
    await updatedMaterial.save();
  });
};
