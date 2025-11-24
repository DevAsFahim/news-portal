import express from "express";
import { MainRoutes } from "./app/routes/index.js";
import cors from 'cors' 

const app = express();

app.use(express.json())
app.use(cors())

// Routes
app.use("/api/v1/", MainRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Nexus Report: a news blog website!");
});

export default app;
