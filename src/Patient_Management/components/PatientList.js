// PatientList.js
import React from 'react';

function PatientList({ patients, onSelectPatient }) {
  return (
    <div>
      {patients.map((patient, index) => (
        <div key={index} onClick={() => onSelectPatient(patient)}>
          {patient.name}
        </div>
      ))}
    </div>
  );
}


export default PatientList;
