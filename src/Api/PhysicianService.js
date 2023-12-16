import axios from 'axios';

const BASE_URL = 'http://localhost:8080/nwaHospital';

export const fetchAllPhysicians = async () =>{

    try {
        const response = await axios.get(`${BASE_URL}/physicians`);
        return response.data;
    } catch (error) {
        console.error('Error fetching physicians:', error);
        throw error;
    }

}