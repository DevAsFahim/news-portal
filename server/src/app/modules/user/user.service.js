import User from "./user.model.js";

const createUserToDB = async (data) => {
  const user = await User.findOne({ userName: data.userName });
  if (user) {
    console.log(user)
    throw Error("User name is already exists!");
  } 

  const result = await User.create(data);
  return result;
};
const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};

const getSingleUsersFromDB = async (id) => {
  const result = await User.findById(id);
  return result;
};

const updateUserFromDB = async (id, data) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("User does not exist!");
  }

  const result = await User.findByIdAndUpdate(id, data);
  return result;
};

const deleteUserFromDB = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("User does not exist!");
  }

  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserServices = {
  createUserToDB,
  getAllUserFromDB,
  getSingleUsersFromDB,
  updateUserFromDB,
  deleteUserFromDB,
};
