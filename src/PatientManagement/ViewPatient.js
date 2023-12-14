import React, { useState } from 'react';
import { fetchPatient } from '../Api/EmployeeService'; // Adjust the import path as needed

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    dob: '',
  });
  const [patientData, setPatientData] = useState(null); // State to store fetched patient data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log('handleSearch function is called'); // Add this line
    try { // Add this opening brace
      const data = await fetchPatient(searchParams);
      setPatientData(data); // Update the state with the fetched data
    } catch (error) {
      console.error('Error in fetching patient:', error);
    } // Add this closing brace
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
            />
          </label>
        </div>

       

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
