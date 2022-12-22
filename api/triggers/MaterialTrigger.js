import Factory from "../models/Factory.js";

//trigger tìm phân xưởng có chứa vật liệu
export const CheckExistingFactory = async (materialId) => {
  if (!materialId) return false;
  const factory = await Factory.find({ isDelete: false });
  let existingFactory = [];
  factory.forEach((i) => {
    i.materials.forEach((j) => {
      if (j.materialId === materialId) existingFactory.push(i);
    });
  });
  if (existingFactory.length > 0) return false;
  else return true;
};
