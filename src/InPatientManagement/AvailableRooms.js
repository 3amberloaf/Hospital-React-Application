import React, { useState, useEffect } from "react";
import "../inpatient.css";
import { fetchClinicBeds } from "../Api/ClinicBedService";

// Declare function
function CheckAvailableRooms() {
  // useState for managing the state of rooms
  const [rooms, setRooms] = useState([]);

  const fetchAllRooms = async () => {
    try {
      const fetchedRooms = await fetchClinicBeds();
      setRooms(fetchedRooms);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // useEffect hook to fetch room availability
  useEffect(() => {
    // Logic to fetch the latest rooms' availability information
    // The fetched data would then be used to update the rooms' state using setRooms
    // setRooms(fetchedRoomsData);

    fetchAllRooms();

    console.log(rooms);
  }, []); // The empty dependency array means this effect runs once after the initial render

  // create components
  return (
    <div className="common-container">
      <h2>Check Available Rooms</h2>
      <div className="rooms-list">
        {rooms.map((room) => (
          <div
            key={room.bedId}
            className={`room ${!room.patientId ? "available" : "occupied"}`}
          >
            <span>Bed Id: {room.bedId} </span>
            <span>Nurse Unit {room.unit} </span>
            <span>Wing {room.wing} </span>
            <span> {room.bedLetter} </span>
            <span> { room.admittedDate } </span>
            <span> { room.patientId ? room.name : "No patient"} </span>
            <span> {room.patientId ? room.gender : " "} </span>
            <span> {!room.patientId ? " Available " : " Occupied "} </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckAvailableRooms;
