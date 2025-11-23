import News from "./news.model.js";

const createNewsIntoDB = async (data) => {
  const result = await News.create(data);

  return result;
};

export const NewsServices = {
    createNewsIntoDB,
}
