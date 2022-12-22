import User from "../models/User.js";
import Export from "../models/Export.js";

//trigger tìm nhân viên quản lý phân xưởng đang xóa
export const CheckExistingUser = async (factoryId) => {
  if (!factoryId) return false;
  const ExistingUser = await User.find({
    managerId: factoryId,
    isDelete: false,
  });
  if (ExistingUser.length === 0) return true;
  else return false;
};

// trigger tìm hóa đơn xuất cho phân xưởng đang xóa
export const CheckExistingExport = async (factoryId) => {
  if (!factoryId) return false;
  const ExistingExport = await Export.find({ _id: factoryId, isDelete: false });
  if (ExistingExport.length === 0) return true;
  else return false;
};
