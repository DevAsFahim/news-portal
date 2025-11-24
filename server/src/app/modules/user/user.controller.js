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

export const UserControllers = {
  createUser,
  getAllUsers,
};
