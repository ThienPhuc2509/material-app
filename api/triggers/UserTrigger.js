import Factory from "../models/Factory.js";
import Warehouse from "../models/Warehouse.js";

//trigger kiểm tra nhiệm vụ của Nhân viên khi xóa
export const CheckManagerExsiting = async (managerId, role) => {
  if (!managerId || !role) return false;
  if (role === 3) {
    const wareHouseManager = await Warehouse.findById(managerId);
    if (wareHouseManager.length === 0) return true;
  }
  if (role === 5) {
    const facctoryManager = await Factory.findById(managerId);
    if (facctoryManager.length === 0) return true;
  }
  return false;
};
