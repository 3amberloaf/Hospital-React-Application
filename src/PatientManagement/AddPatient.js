import React, { useState } from 'react';
import '../components.css'; 
import DiseaseList from '../OtherPages/DiseaseList';

const AddPatientForm = ({ addPatient }) => { // Accept addPatient as a prop
  const [patientData, setPatientData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    sex: '',
    // add diseases
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the addPatient function with the new patient data
    addPatient(patientData.firstName + ' ' + patientData.lastName);
    // Optionally, reset the form fields after submission
    setPatientData({
      firstName: '',
      lastName: '',
      birthday: '',
      sex: '',
      // Reset additional fields as needed
    });
  };

  return (
    <div className="add-patient-form">
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input 
            id="firstName" 
            type="text" 
            name="firstName" 
            placeholder="Enter First Name" 
            value={patientData.firstName} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input 
            id="lastName" 
            type="text" 
            name="lastName" 
            placeholder="Enter Last Name" 
            value={patientData.lastName} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthday">Birthday:</label>
          <input 
            id="birthday" 
            type="date" 
            name="birthday" 
            value={patientData.birthday} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group sex-selection">
  <span>Sex:</span>
  <input 
    type="radio" 
    id="female" 
    name="sex" 
    value="female" 
    checked={patientData.sex === 'female'} 
    onChange={handleChange} 
  />
  <label className='button-label' htmlFor="female">
    <span className="button">Female</span>
  </label>

  <input 
    type="radio" 
    id="male" 
    name="sex" 
    value="male" 
    checked={patientData.sex === 'male'} 
    onChange={handleChange} 
  />
  <label className='button-label' htmlFor="male">
    <span className="button">Male</span>
  </label>
</div>



        {/* More fields can be added here */}

        {/* Disease checklist */}
        <div className="disease-checklist">
          {/* The DiseaseList component itself should handle the search functionality */}
          <DiseaseList />
        </div>
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatientForm;
