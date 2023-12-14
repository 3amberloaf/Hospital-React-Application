//This will call the employee controller/endpoints 

import axios from 'axios';

const BASE_URL = 'http://localhost:8080/nwaHospital'; // Replace with your actual API base URL


// Function to fetch surgeons
export const fetchSurgeons = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/surgeons`);
    return response.data;
  } catch (error) {
    console.error("Error fetching surgeons:", error);
    throw error;
  }
};

// Function to fetch nurses
export const fetchNurses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/nurses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching nurses:", error);
    throw error;
  }
};

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

// fetchPatient.js
export const fetchPatient = async (searchParams) => {
  try {
    const query = new URLSearchParams(searchParams).toString();
    const response = await axios.get(`${BASE_URL}/patients?${query}`);
    // Assuming backend returns an object for a single patient or null if not found
    return response.data; 
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};


// Example function to create an employee
export const addStaffMember = async (memberData) => {
  try {
    const response = await axios.post(`${BASE_URL}/employees`, memberData);
    return response.data;
  } catch (error) {
    console.error('Error adding staff member:', error);
    throw error;
  }
};

export const removeStaffMember = async (emp_id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/employees/${emp_id}`);
    return response.data;
  } catch (error) {
    console.error('Error removing employee:', error);
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

// remove staff
export const addPatient = async (patientData) => {
  try {
    const response = await axios.post(`${BASE_URL}/patients`, patientData);
    return response.data;
  } catch (error) {
    console.error('Error adding patient:', error);
    throw error;
  }
};
