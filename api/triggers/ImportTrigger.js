import Import from "../models/Import.js";
import Material from "../models/Material.js";


//trigger lấy số lượng Hóa đơn nhập mà Nhân viên đã thực hiện - userId
export const GetQuantityImport = async (userId) => {
  if (!userId) return false;
  const quantityImport = await Import.find({ userId });
  if (quantityImport.length === 0) return true;
  else return false;
};

// trigger tăng số lượng vật liệu khi nhập kho
export const IncreaseQuantity = async (materials) => {
  materials.forEach(async (i) => {
    const updatedMaterial = await Material.findById(i.materialId);
    updatedMaterial.quantity = updatedMaterial.quantity + i.quantity;
    await updatedMaterial.save();
  });
};
