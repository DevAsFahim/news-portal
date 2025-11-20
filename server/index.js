import express from "express";
import dotenv from "dotenv";
import newsRouter from './app/news/news.routes.js'

dotenv.config();

const app = express();
const port = 3000;


// Routes
app.use('/api/v1/', newsRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
