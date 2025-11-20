import * as doctorService from "./doctor.service.js";

export const listDoctors = async (req, res) => {
  try {
    const doctors = await doctorService.getAllDoctor();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const searchDoctorsController = async (req, res) => {
  const { query } = req.params;

  try {
    const doctors = await doctorService.searchDoctors(query);
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addDoctorInfo = async (req, res) => {
  const newDoctorData = req.body;

  try {
    const insertedData = await doctorService.addDoctor(newDoctorData);
    res.json(insertedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
