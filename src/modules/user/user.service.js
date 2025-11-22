import { getDB } from "../../config/db.js";

export const getUsers = async () => {
  const db = getDB();
  if (!db) throw new Error("Database not initialized");
  const userCollections = db.collection("users");
  return await userCollections.find({}).toArray();
};

export const getUser = async (id) => {
  console.log("service", id);
  const db = getDB();
  if (!db) throw new Error("Database not initialized");
  const userCollections = db.collection("users");
  return await userCollections.findOne(id);
};

export const addUser = async (userDetails) => {
  const db = getDB();
  if (!db) throw new Error("Database not initialized");
  const userCollections = db.collection("users");
  return await userCollections.insertOne(userDetails);
};
