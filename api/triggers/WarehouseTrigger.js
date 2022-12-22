import User from "../models/User.js";
import Import from "../models/Export.js";

//trigger tìm nhân viên quản lý kho đang xóa
export const CheckExistingUser = async (wareHouseId) => {
  if (!wareHouseId) return false;
  const ExistingUser = await User.find({
    managerId: wareHouseId,
    isDelete: false,
  });
  if (ExistingUser.length === 0) return true;
  else return false;
};

// trigger tìm hóa đơn xuất cho kho đang xóa
export const CheckExistingImport = async (wareHouseId) => {
  if (!wareHouseId) return false;
  const ExistingExport = await Import.find({
    _id: wareHouseId,
    isDelete: false,
  });
  if (ExistingExport.length === 0) return true;
  else return false;
};
