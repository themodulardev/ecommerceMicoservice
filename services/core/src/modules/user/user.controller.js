import * as UserService from "./user.service.js";
import { validateUserCreate, validateUserUpdate } from "./user.validator.js";

export const createUser = async (req, res, next) => {
  try {
    const { error } = validateUserCreate(req.body);
    if (error) return res.status(400).json({ success: false, message: error.message });

    const user = await UserService.createUser(req.body);
    res.status(201).json({ success: true, message: "User created successfully", data: user });
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { error } = validateUserUpdate(req.body);
    if (error) return res.status(400).json({ success: false, message: error.message });

    const updatedUser = await UserService.updateUser(req.params.id, req.body);
    res.status(200).json({ success: true, message: "User updated successfully", data: updatedUser });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deleted = await UserService.deleteUser(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};
