import React, { useState } from 'react';
import '../inpatient.css';

// Declaring the AssignRemoveNurse function
function AssignRemoveNurse() {
  
  // useState hook to manage the state of things 
  
  const [patients, setPatients] = useState([{ id: 1, name: 'Jane Doe' }]);
  const [nurses, setNurses] = useState([{ id: 1, name: 'Nurse Riley' }]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedNurse, setSelectedNurse] = useState('');

  // Handler function for when the patient selection changes
  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  // Handler function for when the nurse selection changes
  const handleNurseChange = (event) => {
    setSelectedNurse(event.target.value);
  };

  // Function to assign nurse to a patient
  const handleAssignNurse = () => {
    // Placeholder to assign the selected nurse to the selected patient
    console.log(`Assigned Nurse ${selectedNurse} to Patient ${selectedPatient}`);
  };

  // Function to remove nurse from a patient
  const handleRemoveNurse = () => {
    // Placeholder to remove the nurse from the selected patient
    console.log(`Removed Nurse from Patient ${selectedPatient}`);
  };

  // create the components
  return (
    <div className="assign-remove-container">
      <h2>Assign/Remove Nurse to Patient</h2>
      <div>
        {/* Patient selection dropdown */}
        <label htmlFor="patient-select">Select Patient:</label>
        <select id="patient-select" value={selectedPatient} onChange={handlePatientChange}>
          {patients.map(patient => (
            <option key={patient.id} value={patient.id}>{patient.name}</option>
          ))}
        </select>
      </div>
      <div>
        {/* Nurse selection dropdown */}
        <label htmlFor="nurse-select">Select Nurse:</label>
        <select id="nurse-select" value={selectedNurse} onChange={handleNurseChange}>
          {nurses.map(nurse => (
            <option key={nurse.id} value={nurse.id}>{nurse.name}</option>
          ))}
        </select>
      </div>
      {/* Buttons to assign or remove a nurse */}
      <button onClick={handleAssignNurse}>Assign Nurse</button>
      <button onClick={handleRemoveNurse}>Remove Nurse</button>
    </div>
  );
}

export default AssignRemoveNurse;
