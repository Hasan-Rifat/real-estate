// getting-started.js
import mongoose from "mongoose";

export const connectMongo = async () => mongoose.connect(process.env.uri!);

/* main().catch((err) => console.log(err));

async function main() {
  await connect(`${process.env.uri}`);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
 */
