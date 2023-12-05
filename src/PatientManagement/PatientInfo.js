// PatientInfo.js
import React from 'react';

function PatientInfo({ patient }) {
  return (
    <div>
      <h2>Patient Information</h2>
      <p>Name: {patient.name}</p>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      {/* Add more patient details here */}
    </div>
  );
}

export default PatientInfo;
