import Factory from "../models/Factory.js";
import { createError } from "../utils/error.js";
import { CheckExistingUser } from "../triggers/FactoryTrigger.js";

export const createFactory = async (req, res, next) => {
  const newFactory = new Factory(req.body);

  try {
    const savedFactory = await newFactory.save();
    res.status(200).json(savedFactory);
  } catch (err) {
    next(err);
  }
};

export const updateFactory = async (req, res, next) => {
  try {
    const updatedFactory = await Factory.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFactory);
  } catch (err) {
    next(err);
  }
};
export const deleteFactory = async (req, res, next) => {
  const check = await CheckExistingUser(req.params.id);
  if (check === false)
    return res.status(500).json("Vẫn còn quản lý đang quản lý kho");
  try {
    const updatedFactory = await Factory.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFactory);
  } catch (err) {
    next(err);
  }
};

export const getFactory = async (req, res, next) => {
  try {
    const factory = await Factory.findById(req.params.id);
    res.status(200).json(factory);
  } catch (err) {
    next(err);
  }
};

export const get = async (req, res, next) => {
  try {
    const factory = await Factory.find();
    res.status(200).json(factory);
  } catch (err) {
    next(err);
  }
};
