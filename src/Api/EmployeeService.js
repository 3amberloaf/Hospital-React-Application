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


// remove member
export const addMember = (staffMembers, newMember, setStaffMembers, setNewMember) => {
  if (newMember) {
    setStaffMembers([...staffMembers, newMember]);
    setNewMember(''); // Reset input after adding
  }
};

//add member
export const removeMember = (staffMembers, index, setStaffMembers) => {
  const updatedMembers = [...staffMembers];
  updatedMembers.splice(index, 1);
  setStaffMembers(updatedMembers);
};
