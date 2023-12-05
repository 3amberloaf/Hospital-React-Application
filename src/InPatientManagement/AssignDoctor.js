import React, { useState } from 'react';
import '../inpatient.css'; 

function AssignRemoveDoctor() {
  const [patients, setPatients] = useState([{ id: 1, name: 'John Doe' }, /* ... other patients ... */]);
  const [doctors, setDoctors] = useState([{ id: 1, name: 'Dr. Smith' }, /* ... other doctors ... */]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleAssignDoctor = () => {
    // Logic to assign the selected doctor to the selected patient
    console.log(`Assigned Doctor ${selectedDoctor} to Patient ${selectedPatient}`);
  };

  const handleRemoveDoctor = () => {
    // Logic to remove the doctor from the selected patient
    console.log(`Removed Doctor from Patient ${selectedPatient}`);
  };

  return (
    <div className="assign-remove-doctor-container">
      <h2> Doctor to Patients</h2>
      <div>
        <label htmlFor="patient-select">Select Patient:</label>
        <select id="patient-select" value={selectedPatient} onChange={handlePatientChange}>
          {patients.map(patient => (
            <option key={patient.id} value={patient.id}>{patient.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="doctor-select">Select Doctor:</label>
        <select id="doctor-select" value={selectedDoctor} onChange={handleDoctorChange}>
          {doctors.map(doctor => (
            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
          ))}
        </select>
      </div>
      <button onClick={handleAssignDoctor}>Assign Doctor</button>
      <button onClick={handleRemoveDoctor}>Remove Doctor</button>
    </div>
  );
}

export default AssignRemoveDoctor;
