import User from "../models/User.js";

export const CheckExistingUser = async (factoryId) => {
  //trigger tìm nhân viên quản lý phân xưởng đang xóa
  // const userId = userId;
  if (!factoryId) return false;
  const ExistingUser = await User.find({ managerId: factoryId });
  if (ExistingUser.length === 0) return true;
  else return false;
};
