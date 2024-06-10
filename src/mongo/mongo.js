// import { MongoClient, ServerApiVersion } from "mongodb";

import mongoose from "mongoose";

const mongoConnectionUri = process.env.Mongo_URI;
// const mongoConnectionUri = process.env.Mongo_URI;
export default function connect() {
  return mongoose.connect(mongoConnectionUri);
}
