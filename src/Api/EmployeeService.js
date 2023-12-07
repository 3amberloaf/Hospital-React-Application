//This will call the employee controller/endpoints 

// apiCaller.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/nwaHospital'; // Replace with your actual API base URL

// const apiCaller = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     // Add any additional headers if needed
//   },
// });

// Example function to fetch all employees
export const fetchEmployees = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/employees`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

// Example function to create an employee
export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`/${BASE_URL}/employees`, employeeData);
    return response.data;
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};

// Example function to update an employee
export const updateEmployee = async (employeeId, updatedEmployeeData) => {
  try {
    const response = await axios.put(`/${BASE_URL}/employees/${employeeId}`, updatedEmployeeData);
    return response.data;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

// Example function to delete an employee
export const deleteEmployee = async (employeeId) => {
  try {
    const response = await axios.delete(`/${BASE_URL}/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};

