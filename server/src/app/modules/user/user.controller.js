import { UserServices } from "./user.service.js";

const createUser = async (req, res) => {
  try {
    const data = req.body;

    const result = await UserServices.createUserToDB(data);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAllUserFromDB();

    res.status(201).json({
      success: true,
      message: "Users are retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleUsers = async (req, res) => {
  try {
    const {userId} = req.params;
    const result = await UserServices.getSingleUsersFromDB(userId);

    res.status(201).json({
      success: true,
      message: "User is retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const data = req.body
    const { userId } = req.params;
    const result = await UserServices.updateUserFromDB(userId, data);

    res.status(201).json({
      success: true,
      message: "User is updated successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.deleteUserFromDB(userId);

    res.status(201).json({
      success: true,
      message: "User is deleted successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUsers,
  updateUser,
  deleteUser
};
