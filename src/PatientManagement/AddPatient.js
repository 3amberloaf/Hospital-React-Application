import React, { useState } from 'react';
import '../components.css'; 
import DiseaseList from '../OtherPages/DiseaseList';

const AddPatientForm = () => {
  const [patientData, setPatientData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    sex: '',
    // disease selections can be integrated as needed
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
    // Handle the submission of form data
    // Including sending data to a backend or state management store
    console.log(patientData);
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
