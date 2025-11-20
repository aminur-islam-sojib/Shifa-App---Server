import { MongoClient, ServerApiVersion } from "mongodb";
import { ENV } from "./env.js";

const uri =
  ENV.DB_USERNAME &&
  ENV.DB_PASSWORD &&
  ENV.DB_HOST &&
  `mongodb+srv://${encodeURIComponent(ENV.DB_USERNAME)}:${encodeURIComponent(
    ENV.DB_PASSWORD
  )}@${ENV.DB_HOST}/?appName=mongoDB`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

export const connectDB = async () => {
  try {
    await client.connect();
    db = client.db("shifaDB");

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
};

export const getDB = () => db;
