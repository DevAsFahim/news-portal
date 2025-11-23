import { NewsServices } from "./news.service.js";


const createNews = async (req, res) => {
  try {
    const data = req.body;

    const result = await NewsServices.createNewsIntoDB(data);

    res.status(201).json({
      success: true,
      message: "News created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const NewsControllers = {
    createNews,
}