import mongoose from "mongoose";
export const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL!, { dbName: "Mongo Db 1" })
    .then(() => {
      console.log("Connected To Database Successfully!");
    })
    .catch((err) => {
      console.log(`Something went wrong while connecting to database ${err}`);
    });
};
