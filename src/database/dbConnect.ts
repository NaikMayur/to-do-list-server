import mongoose from "mongoose";
export const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL!, { dbName: "tasks" })
    .then(() => {
      console.log("Connected To Database Successfully!");
    })
    .catch((err) => {
      console.log(`Something went wrong while connecting to database ${err}`);
    });
};
