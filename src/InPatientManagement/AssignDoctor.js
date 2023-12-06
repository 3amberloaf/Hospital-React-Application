import React, { useState } from 'react';
import '../inpatient.css'; 

function AssignRemoveDoctor() {
  // State for managing things

  const [patients, setPatients] = useState([{ id: 1, name: 'John Doe' }]);
  const [doctors, setDoctors] = useState([{ id: 1, name: 'Dr. Smith' }]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  // Handler for changes in the patient selection
  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  // Handler for changes in the doctor selection
  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  // Handler for assigning doctor to a patient
  const handleAssignDoctor = () => {
    // Logic to assign the selected doctor to the selected patient
    console.log(`Assigned Doctor ${selectedDoctor} to Patient ${selectedPatient}`);
  };

  // Handler for removing a doctor from a patient
  const handleRemoveDoctor = () => {
    // Logic to remove the doctor from the selected patient
    console.log(`Removed Doctor from Patient ${selectedPatient}`);
  };

  // creating the components
  return (
    <div className="assign-remove-doctor-container">
      <h2>Doctor to Patients</h2>
      {/* Dropdown for selecting a patient */}
      <div>
        <label htmlFor="patient-select">Select Patient:</label>
        <select id="patient-select" value={selectedPatient} onChange={handlePatientChange}>
          {patients.map(patient => (
            <option key={patient.id} value={patient.id}>{patient.name}</option>
          ))}
        </select>
      </div>
      {/* Dropdown for selecting a doctor */}
      <div>
        <label htmlFor="doctor-select">Select Doctor:</label>
        <select id="doctor-select" value={selectedDoctor} onChange={handleDoctorChange}>
          {doctors.map(doctor => (
            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
          ))}
        </select>
      </div>
      {/* Buttons for assigning or removing a doctor */}
      <button onClick={handleAssignDoctor}>Assign Doctor</button>
      <button onClick={handleRemoveDoctor}>Remove Doctor</button>
    </div>
  );
}

export default AssignRemoveDoctor;
