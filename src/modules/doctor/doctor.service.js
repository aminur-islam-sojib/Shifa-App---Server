import { getDB } from "../../config/db.js";

// Get all doctors
export const getAllDoctor = async () => {
  const db = getDB();
  if (!db) throw new Error("Database not initialized");
  const doctorsCollection = db.collection("doctors");
  return await doctorsCollection.find({}).toArray();
};

// Search doctor by name or specialization
export const searchDoctors = async (query) => {
  const db = getDB();
  return await db
    .collection("doctors")
    .find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { specialization: { $regex: query, $options: "i" } },
      ],
    })
    .toArray();
};

export const addDoctor = async (doctorInfo) => {
  const db = getDB();
  return await db.collection("doctors").insertOne(doctorInfo);
};
