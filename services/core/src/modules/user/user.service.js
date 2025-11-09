import { User } from "../../../models/index.js";
import bcrypt from "bcrypt";

export const createUser = async (data) => {
  const existing = await User.findOne({ where: { email: data.email } });
  if (existing) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await User.create({ ...data, password: hashedPassword });
  return user;
};

export const getAllUsers = async () => {
  return await User.findAll({ attributes: { exclude: ["password"] } });
};

export const getUserById = async (id) => {
  return await User.findByPk(id, { attributes: { exclude: ["password"] } });
};

export const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found");

  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  await user.update(data);
  return user;
};

export const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return false;

  await user.destroy();
  return true;
};
