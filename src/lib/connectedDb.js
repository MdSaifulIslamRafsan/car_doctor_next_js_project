// lib/connectDb.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI; // Ensure this is defined in .env.local

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Use a global variable to preserve the MongoClient during hot reloads in development
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, use a new client instance
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export const connectDb = async () => {
  try {
    const client = await clientPromise;
    return client.db('Car-Doctor-Next'); 
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
