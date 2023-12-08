import React, { useState, useEffect } from 'react';
import '../inpatient.css';

// Declare function
function CheckAvailableRooms() {
  // useState for managing the state of rooms
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room 101', isAvailable: true },
    { id: 2, name: 'Room 102', isAvailable: false },
  ]);

  // useEffect hook to fetch room availability
  useEffect(() => {
    // Logic to fetch the latest rooms' availability information
    // The fetched data would then be used to update the rooms' state using setRooms
    // setRooms(fetchedRoomsData);
  }, []); // The empty dependency array means this effect runs once after the initial render

  // create components
  return (
    <div className="common-container">
      <h2>Check Available Rooms</h2>
      <div className="rooms-list">
        {rooms.map(room => (
          <div key={room.id} className={`room ${room.isAvailable ? 'available' : 'occupied'}`}>
            <span>{room.name}</span>
            <span>{room.isAvailable ? 'Available' : 'Occupied'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckAvailableRooms;
