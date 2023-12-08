import React, { useState } from 'react';
import '../inpatient.css';

// Declare function 
function BookSurgery() {

  // use useState for managing the state of the patients, surgeons, dates, and surgery types
  const [patients, setPatients] = useState([{ id: 1, name: 'John Doe' }]);
  const [surgeons, setSurgeons] = useState([{ id: 1, name: 'Dr. Smith' }]);
  const [surgeryTypes, setSurgeryTypes] = useState(['Type 1', 'Type 2']);

  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedSurgeon, setSelectedSurgeon] = useState('');
  const [selectedSurgeryType, setSelectedSurgeryType] = useState('');
  const [surgeryDate, setSurgeryDate] = useState('');

  // Handler function for when data changes
  const handlePatientChange = (e) => {
    setSelectedPatient(e.target.value);
  };

  const handleSurgeonChange = (e) => {
    setSelectedSurgeon(e.target.value);
  };

  const handleSurgeryTypeChange = (e) => {
    setSelectedSurgeryType(e.target.value);
  };

  const handleSurgeryDateChange = (e) => {
    setSurgeryDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Surgery booked for Patient ${selectedPatient} with Surgeon ${selectedSurgeon} on ${surgeryDate} for ${selectedSurgeryType}`);
    // SEND DATA TO SERVER
  };

  // create the components
  return (
    <div className="common-container">
      <h2>Book a Surgery</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientSelect">Select Patient:</label>
          <select id="patientSelect" name="patient" onChange={handlePatientChange} required>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="surgeonSelect">Select Surgeon:</label>
          <select id="surgeonSelect" name="surgeon" onChange={handleSurgeonChange} required>
            {surgeons.map((surgeon) => (
              <option key={surgeon.id} value={surgeon.id}>
                {surgeon.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="surgeryTypeSelect">Select Surgery Type:</label>
          <select id="surgeryTypeSelect" name="surgeryType" onChange={handleSurgeryTypeChange} required>
            {surgeryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="surgeryDate">Select Surgery Date:</label>
          <input
            type="date"
            id="surgeryDate"
            name="surgeryDate"
            value={surgeryDate}
            onChange={handleSurgeryDateChange}
            required
          />
        </div>
        
        <div className="form-group">
          <button type="submit">Book Surgery</button>
        </div>
      </form>
    </div>
  );
}

export default BookSurgery;
