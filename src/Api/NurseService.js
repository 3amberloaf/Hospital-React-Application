import axios from "axios";

const BASE_URL = "http://localhost:8080/nwaHospital";



export const fetchNurses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/nurses`);
      return response.data;
    } catch (error) {
      console.error("Error fetching patients:", error);
      throw error;
    }
  };

  