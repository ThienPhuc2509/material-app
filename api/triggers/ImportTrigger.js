import Import from "../models/Import.js";

export const GetQuantityImport = async (userId, res) => {
  //trigger lấy số lượng Hóa đơn nhập mà Nhân viên đã thực hiện - userId
  // const userId = userId;
  if (!userId) return res.status(503).json("Invalid User");
  const quantityUser = await Import.find({ userId });
  if (quantityUser.length > 0) return true;
  else return false;
};
