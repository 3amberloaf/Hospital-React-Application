import axios from 'axios';

const BASE_URL = 'http://localhost:8080/nwaHospital';


export const fetchSurgeryTypes = async () =>{

    try {
        const response = await axios.get(`${BASE_URL}/surgeries/surgeryTypes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching surgeryTypes : ', error);
        throw error;
    }

}

export const createSurgery = async (surgeryData) => {
    try {
      const response = await axios.post(`${BASE_URL}/surgeries`, surgeryData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const fetchSurgerySchedule = async () =>{

  try {
    const response = await axios.get(`${BASE_URL}/surgeries/schedule`);
    return response.data
  } catch (error) {
    throw(error)
  }
}