import express from "express";
import { MainRoutes } from "./app/routes/index.js";

const app = express();

app.use(express.json())

// Routes
app.use("/api/v1/", MainRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
