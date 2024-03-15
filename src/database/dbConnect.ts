import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    console.log(process.env.MONGO_URL);
    if (!process.env.MONGO_URL) {
      throw new Error("Missing MONGO_URL environment variable");
    }

    await mongoose.connect(process.env.MONGO_URL, { dbName: "tasks" });
    console.log("Connected To Database Successfully!");
  } catch (err) {
    console.error("Error connecting to database:", err);
  }
};
