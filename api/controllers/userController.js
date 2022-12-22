import User from "../models/User.js";
import { CheckManagerExsiting } from "../triggers/UserTrigger.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  const deleteUser = await User.findById(req.params.id);
  const check = await CheckManagerExsiting(
    deleteUser.managerId,
    deleteUser.role
  );
  if (check === false) return res.status(500).json("Existing User task");
  try {
    deleteUser.isDelete = true;
    await deleteUser.save();

    res.status(200).json(deleteUser);
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const getUsers = async (req, res, next) => {
  try {

    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
