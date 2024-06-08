// import { MongoClient, ServerApiVersion } from "mongodb";

import mongoose from "mongoose";

const mongoConnectionUri =
  "mongodb+srv://youssuf:Sambasong123654@learnnode.kuuvs.mongodb.net/?retryWrites=true&w=majority&appName=LearnNode";
// const mongoConnectionUri = process.env.Mongo_URI;
export default function connect() {
  return mongoose.connect(mongoConnectionUri);
}
