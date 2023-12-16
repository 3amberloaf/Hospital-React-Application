import axios from 'axios';

const BASE_URL = 'http://localhost:8080/nwaHospital';

export const fetchSurgeons = async () =>{

    try {
        const response = await axios.get(`${BASE_URL}/surgeons`);
        return response.data;
    } catch (error) {
        console.error('Error fetching surgeons : ', error);
        throw error;
    }

}

