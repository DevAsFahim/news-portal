import User from "./user.model.js";

const createUserToDB = async (data) => {
  const result = await User.create(data);
  return result;
};
const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};

export const UserServices = {
  createUserToDB,
  getAllUserFromDB,
};
