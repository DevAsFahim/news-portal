import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

async function bootstrap() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(process.env.PORT, () => {
      console.log(`Database connected on port ${process.env.PORT}`);
    });
  } catch(err) {
    console.log("Cannot connect to the database", err);
  }
}

bootstrap();
