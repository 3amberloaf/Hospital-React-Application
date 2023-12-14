import React, { useState } from 'react';
import '../patient.css'; 
import DiseaseList from '../PatientManagement/DiseaseList';

const AddPatientForm = ({ addPatient }) => { 
  const [patientData, setPatientData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    sex: '',
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
    addPatient(patientData.firstName + ' ' + patientData.lastName);
    setPatientData({
      firstName: '',
      lastName: '',
      birthday: '',
      sex: '',
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




        {/* Disease checklist */}
        <div className="disease-checklist">
          <DiseaseList />
        </div>
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatientForm;
