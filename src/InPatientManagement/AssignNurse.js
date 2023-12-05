import React, { useState } from 'react';
import '../inpatient.css'; // Ensure this path is correct

function AssignRemoveNurse() {
  const [patients, setPatients] = useState([{ id: 1, name: 'Jane Doe' }, /* ... other patients ... */]);
  const [nurses, setNurses] = useState([{ id: 1, name: 'Nurse Riley' }, /* ... other nurses ... */]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedNurse, setSelectedNurse] = useState('');

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  const handleNurseChange = (event) => {
    setSelectedNurse(event.target.value);
  };

  const handleAssignNurse = () => {
    // Logic to assign the selected nurse to the selected patient
    console.log(`Assigned Nurse ${selectedNurse} to Patient ${selectedPatient}`);
  };

  const handleRemoveNurse = () => {
    // Logic to remove the nurse from the selected patient
    console.log(`Removed Nurse from Patient ${selectedPatient}`);
  };

  return (
    <div className="assign-remove-container">
      <h2>Assign/Remove Nurse to Patient</h2>
      <div>
        <label htmlFor="patient-select">Select Patient:</label>
        <select id="patient-select" value={selectedPatient} onChange={handlePatientChange}>
          {patients.map(patient => (
            <option key={patient.id} value={patient.id}>{patient.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="nurse-select">Select Nurse:</label>
        <select id="nurse-select" value={selectedNurse} onChange={handleNurseChange}>
          {nurses.map(nurse => (
            <option key={nurse.id} value={nurse.id}>{nurse.name}</option>
          ))}
        </select>
      </div>
      <button onClick={handleAssignNurse}>Assign Nurse</button>
      <button onClick={handleRemoveNurse}>Remove Nurse</button>
    </div>
  );
}

export default AssignRemoveNurse;
