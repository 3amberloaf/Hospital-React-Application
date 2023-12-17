import React, { useState, useEffect } from "react";
import '../inpatient.css';
import { fetchClinicBeds, updateClinicBed , deleteClinicBed } from "../Api/ClinicBedService";
import { fetchPatients } from "../Api/PatientService";

function AssignRemovePatientRoom() {
  const [patients, setPatients] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState();
  const [selectedRoom, setSelectedRoom] = useState();
  const [message, setMessage] = useState(null);

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handleUpdateBed = async (bedId , patientId) => {
    try {
      await updateClinicBed(bedId, patientId);
      console.log('Bed updated successfully:');
    } catch (error) {
      console.error('Bed removed successfully:', error);
      setMessage('Bed removed successfully');
    }
  };

  const handleAssignRoom = () => {
    if (!selectedPatient || !selectedRoom) {
      setMessage('Please select both a patient and a room.');
      return;
    }

    handleUpdateBed(selectedRoom , selectedPatient);
    setMessage('Bed assigned successfully')

  };

  const handleRemoveRoom = () => {


    handleUpdateBed(selectedRoom , null);
    // deleteClinicBed(selectedRoom);
    setMessage('Bed removed successfully')
  };

  const fetchAllRooms = async () => {
    try {
      const fetchedRooms = await fetchClinicBeds();
      setRooms(fetchedRooms);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const fetchAllPatients = async () => {
    try {
      const fetchedPatients = await fetchPatients();
      setPatients(fetchedPatients);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  useEffect( ()  => {
    fetchAllPatients();
    setSelectedPatient(patients[0])
  }, []);
  useEffect( ()  => {
     fetchAllRooms();
     setSelectedRoom(rooms[0])
   }, []);

  return (
    <div className="common-container">
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
        <label htmlFor="room-select">Select Bed by bed id:</label>
        <select id="room-select" value={selectedRoom} onChange={handleRoomChange}>
          {rooms.map(room => (
            <option key={room.bedId} value={room.bedId}>{room.bedId}</option>
          ))}
        </select>
      </div>
      <button onClick={handleAssignRoom}>Assign</button>
      <button onClick={handleRemoveRoom}>Remove</button>
      <span>{ message } </span>
    </div>
  );
}

export default AssignRemovePatientRoom;
