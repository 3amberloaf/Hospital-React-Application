import axios from "axios";

const BASE_URL = "http://localhost:8080/nwaHospital";

export const fetchPatients = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/patients`);
    return response.data;
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw error;
  }
};

export const updatePatientPCP = async (id, physicianId) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/patients/updatePhyscian/${id}/physicianId/${physicianId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating patient with ID ${id}:`, error);
    throw error;
  }
};

export const getPatientById = async (id) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/patients/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating patient with ID ${id}:`, error);
      throw error;
    }
}
