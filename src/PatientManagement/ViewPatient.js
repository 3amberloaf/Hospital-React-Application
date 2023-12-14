import React, { useState } from 'react';
import { fetchPatient } from '../Api/EmployeeService'; 

// Component to render a single patient's information
const PatientInfo = ({ patient }) => (
  <li>
    <div><strong>ID:</strong> {patient.id}</div>
    <div><strong>Name:</strong> {patient.name}</div>
    <div><strong>DOB:</strong> {patient.dob}</div>
    <div><strong>SSN:</strong> {patient.ssn}</div>
    <div><strong>Blood Type:</strong> {patient.bloodType}</div>
    <div><strong>Address:</strong> {patient.address}</div>
  </li>
);

const Search = () => {
  const [searchParams, setSearchParams] = useState({ name: '', dob: '' });
  const [patientData, setPatientData] = useState([]); // State to store fetched patient data

  // Handles input changes for the search form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({ ...prevParams, [name]: value }));
  };

  // Handles the search operation
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const patients = await fetchPatient(searchParams); // Fetch all patients
      const filteredPatients = patients.filter(patient => 
        patient.name === searchParams.name && patient.dob === searchParams.dob
      );
      setPatientData(filteredPatients); // Set the filtered results
    } catch (error) {
      console.error('Error in fetching patients:', error);
    }
  };

  return (
    <div className="add-patient-form">
      <h1>Patient Information</h1>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={searchParams.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={searchParams.dob}
              onChange={handleChange}
              autoComplete="bday"
            />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
      
      {patientData.length > 0 && (
      <div>
        <h2>Search Results</h2>
        <ul style={{ listStyleType: 'none' }}> {/* Inline style to remove bullets */}
          {patientData.map((patient, index) => (
            <PatientInfo key={index} patient={patient} />
          ))}
        </ul>
      </div>
    )}
  </div>
);
};

export default Search;
