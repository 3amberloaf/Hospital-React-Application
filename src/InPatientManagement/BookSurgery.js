import React, { useState } from 'react';
import '../inpatient.css'; // Ensure this path is correct

function BookSurgery() {
  const [patients, setPatients] = useState([{ id: 1, name: 'John Doe' }, /* ... other patients ... */]);
  const [surgeons, setSurgeons] = useState([{ id: 1, name: 'Dr. Smith' }, /* ... other surgeons ... */]);
  const [surgeryTypes, setSurgeryTypes] = useState(['Type 1', 'Type 2', /* ... other types ... */]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedSurgeon, setSelectedSurgeon] = useState('');
  const [selectedSurgeryType, setSelectedSurgeryType] = useState('');
  const [surgeryDate, setSurgeryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Surgery booked for Patient ${selectedPatient} with Surgeon ${selectedSurgeon} on ${surgeryDate} for ${selectedSurgeryType}`);
    // Here, you would typically send this data to a server or process it further
  };

  return (
    <div className="book-surgery-form">
      <h2>Book a Surgery</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Patient:</label>
          <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
            {patients.map(patient => (
              <option key={patient.id} value={patient.id}>{patient.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Select Surgeon:</label>
          <select value={selectedSurgeon} onChange={(e) => setSelectedSurgeon(e.target.value)}>
            {surgeons.map(surgeon => (
              <option key={surgeon.id} value={surgeon.id}>{surgeon.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Select Surgery Type:</label>
          <select value={selectedSurgeryType} onChange={(e) => setSelectedSurgeryType(e.target.value)}>
            {surgeryTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Surgery Date:</label>
          <input type="date" value={surgeryDate} onChange={(e) => setSurgeryDate(e.target.value)} />
        </div>

        <button type="submit">Book Surgery</button>
      </form>
    </div>
  );
}

export default BookSurgery;
