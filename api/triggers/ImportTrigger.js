const { Export: Import } = require("../models");

const GetQuantityImport = (req, res, next) => {
  // trigger lấy số lượng Hóa đơn nhập mà Nhân viên đã thực hiện - userId
  try {
    const userId = req.params.userId;
    if (!userId) return res.status(503).json("Invalid User");
    const quantityUser = Import.where({ userId }).countDocuments();
    if (quantityUser === 0) next();
    else return res.status(504).json("Existing User");
  } catch (error) {
    res.status(500).json(err);
  }
};

module.exports = {
  GetQuantityImport,
};
