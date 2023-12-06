import React, { useState } from 'react';
import '../inpatient.css';

// Delcare function
function AssignRemovePatientRoom() {
  // useState for managing the state of things
  
  const [patients, setPatients] = useState([{ id: 1, name: 'John Doe' }]);
  const [rooms, setRooms] = useState([{ id: 1, name: 'Room 101' }]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');

  // Handler function for when the patient selection changes
  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  // Handler function for when the room selection changes
  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  // Function to assign a room to a patient
  const handleAssignRoom = () => {
    // Placeholder logic to assign the selected room to the selected patient
    console.log(`Assigned Patient ${selectedPatient} to ${selectedRoom}`);
  };

  // Function to remove patient from a room
  const handleRemoveRoom = () => {
    // Placeholder logic to remove the patient from the selected room
    console.log(`Removed Patient ${selectedPatient} from ${selectedRoom}`);
  };

  // create the components
  return (
    <div className="assign-remove-container">
      <h2>Assign/Remove Patient to Room</h2>
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
        {/* Room selection dropdown */}
        <label htmlFor="room-select">Select Room:</label>
        <select id="room-select" value={selectedRoom} onChange={handleRoomChange}>
          {rooms.map(room => (
            <option key={room.id} value={room.id}>{room.name}</option>
          ))}
        </select>
      </div>
      {/* Buttons to assign or remove a patient from a room */}
      <button onClick={handleAssignRoom}>Assign to Room</button>
      <button onClick={handleRemoveRoom}>Remove from Room</button>
    </div>
  );
}

export default AssignRemovePatientRoom;
