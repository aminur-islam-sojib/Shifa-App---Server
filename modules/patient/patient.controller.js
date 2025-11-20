import * as patientsService from "./patient.service.js";

export const listPatient = async () => {
  try {
    const patients = await patientsService.getAllPatient();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addListingPatient = async (req, res) => {
  const patientInfo = req.body;

  try {
    const patient = await patientsService.addListingPatient(patientInfo);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
