
import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDb = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

    if (!uri) {
      throw new Error("Please add your MongoDB URI to .env.local");
    }
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
   db = client.db("Car-Doctor-Next");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
