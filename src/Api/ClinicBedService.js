//This will call the employee controller/endpoints 

import axios from 'axios';

const BASE_URL = 'http://localhost:8080/nwaHospital';

export const fetchClinicBeds = async () =>{

    try {
        const response = await axios.get(`${BASE_URL}/beds`);
        return response.data;
    } catch (error) {
        console.error('Error fetching clinic beds:', error);
        throw error;
    }

}

export const updateClinicBed = async (bedId, patientId) => {
    try {
      const response = await axios.put(`${BASE_URL}/beds/${bedId}/${patientId}`);
      return response.data;
    } catch (error) {
      console.error(`Error updating clinic bed with ID ${bedId}:`, error);
      throw error;
    }
  };

export const deleteClinicBed = async (bedId) => {
    try {
        const response = await axios.put(`${BASE_URL}/beds/remove/${bedId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting clinic bed with bedId ${bedId}:`, error);
        throw error;
    }
};


