import React, { useState } from 'react';
import '../inpatient.css'; // Ensure this path is correct

function AssignRemovePatientRoom() {
  const [patients, setPatients] = useState([{ id: 1, name: 'John Doe' }, /* ... other patients ... */]);
  const [rooms, setRooms] = useState([{ id: 1, name: 'Room 101' }, /* ... other rooms ... */]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handleAssignRoom = () => {
    // Logic to assign the selected room to the selected patient
    console.log(`Assigned Patient ${selectedPatient} to ${selectedRoom}`);
  };

  const handleRemoveRoom = () => {
    // Logic to remove the patient from the selected room
    console.log(`Removed Patient ${selectedPatient} from ${selectedRoom}`);
  };

  return (
    <div className="assign-remove-container">
      <h2>Assign/Remove Patient to Room</h2>
      <div>
        <label htmlFor="patient-select">Select Patient:</label>
        <select id="patient-select" value={selectedPatient} onChange={handlePatientChange}>
          {patients.map(patient => (
            <option key={patient.id} value={patient.id}>{patient.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="room-select">Select Room:</label>
        <select id="room-select" value={selectedRoom} onChange={handleRoomChange}>
          {rooms.map(room => (
            <option key={room.id} value={room.id}>{room.name}</option>
          ))}
        </select>
      </div>
      <button onClick={handleAssignRoom}>Assign to Room</button>
      <button onClick={handleRemoveRoom}>Remove from Room</button>
    </div>
  );
}

export default AssignRemovePatientRoom;
