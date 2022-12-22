import Material from "../models/Material.js";
import Export from "../models/Material.js";
import Factory from "../models/Factory.js";

// trigger lấy số lượng Hóa đơn xuất mà Nhân viên đã thực hiện khi xóa Hóa đơn xuất - userId
export const GetQuantityExport = async (userId) => {
  
  if (!userId) return false;
  const quantityExport = Export.where({ userId }).countDocuments();
  if (quantityExport === 0) return true
  else return false
};

// trigger giảm số lượng vật liệu khi xuất kho
export const DecreaseQuantity = async (materials) => {
  materials.forEach(async (i) => {
    const updatedMaterial = await Material.findById(i.materialId);
    updatedMaterial.quantity =
      updatedMaterial.quantity >= i.quantity
        ? updatedMaterial.quantity - i.quantity
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
