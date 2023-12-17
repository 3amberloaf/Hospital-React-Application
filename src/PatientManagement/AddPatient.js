import React, { useState } from 'react';
import '../patient.css';
import { addPatient } from '../Api/EmployeeService'; 

const AddPatientForm = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    gender: '',
    ssn: '',
    bloodType: '',
    primaryPhysician: '',
    admittedDate: '',
    address: '',
  });

  const [isSuccess, setIsSuccess] = useState(false); // New state for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({ ...prevData, [name]: value }));
    setIsSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSuccess(false);
    try {
      const response = await addPatient(patientData);
      setIsSuccess(true);
      console.log('Patient added:', response);
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  return (
    <div className="add-patient-form">
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={patientData.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>

        <div className="form-group sex-selection">
          <span>Gender:</span>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={patientData.gender === 'female'}
            onChange={handleChange}
          />
          <label className="button-label" htmlFor="female">
            Female
          </label>

          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={patientData.gender === 'male'}
            onChange={handleChange}
          />
          <label className="button-label" htmlFor="male">
            Male
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="ssn">Social Security Number:</label>
          <input
            id="ssn"
            type="text"
            name="ssn"
            placeholder="Enter SSN"
            value={patientData.ssn}
            onChange={handleChange}
            autoComplete="ssn"
          />
        </div>

        <div className="form-group">
          <label htmlFor="primaryPhysician">Primary Care Physician:</label>
          <input
            id="primaryPhysician"
            type="text"
            name="primaryPhysician"
            placeholder="Enter Primary Care Physician"
            value={patientData.primaryPhysician}
            onChange={handleChange}
            autoComplete="primaryPhysician"
          />
        </div>

        <div className="form-group">
          <label htmlFor="bloodType">Blood Type:</label>
          <input
            id="bloodType"
            type="text"
            name="bloodType"
            placeholder="Enter Blood Type"
            value={patientData.bloodType}
            onChange={handleChange}
            autoComplete="bloodType"
          />
        </div>

        <div className="form-group">
          <label htmlFor="admittedDate">Admitted Date:</label>
          <input
            id="admittedDate"
            type="text"
            name="admittedDate"
            placeholder="Enter Admitted Date"
            value={patientData.admittedDate}
            onChange={handleChange}
            autoComplete="admittedDate"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Enter Address"
            value={patientData.address}
            onChange={handleChange}
            autoComplete="address"
          />
        </div>

        <button type="submit">Add Patient</button>
        {isSuccess && <div className="success-message">Patient successfully added!</div>}
      </form>
    </div>
  );
};

export default AddPatientForm;
