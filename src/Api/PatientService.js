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
        `${BASE_URL}/patients/${id}/physician/${physicianId}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating patient with ID ${id}:`, error);
      throw error;
    }
  };
  
  

export const updatePatientNurse = async (id, nurseId) => {
    try {
        console.log("nurseID in api call: "  , nurseId)
      const response = await axios.put(
        `${BASE_URL}/patients/${id}/nurse/${nurseId}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating patient with ID ${id}:`, error);
      throw error;
    }
  };

  
  export const removePatientNurse = async (id) => {
    try {
        console.log("nurseID in remove !!!!api call: ")
      const response = await axios.put(
        `${BASE_URL}/patients/${id}/removeNurse`
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
