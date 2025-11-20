import { getDB } from "../../config/db.js";

export const getAllPatient = async () => {
  const db = getDB();
  if (!db) throw new Error("Database not initialized");
  const patientCollection = db.collection("patients");
  return await patientCollection.find({}).toArray();
};

export const addPatient = async (patientInfo) => {
  const db = getDB();
  if (!db) throw new Error("Database not initialized");
  const patientCollection = db.collection("patients");
  return await patientCollection.insertOne(patientInfo);
};
