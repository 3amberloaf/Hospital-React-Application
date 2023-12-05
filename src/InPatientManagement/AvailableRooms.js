import React, { useState, useEffect } from 'react';
import '../inpatient.css'; // Ensure this path is correct

function CheckAvailableRooms() {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room 101', isAvailable: true },
    { id: 2, name: 'Room 102', isAvailable: false },
    // ... other rooms ...
  ]);

  useEffect(() => {
    // Fetch the latest rooms' availability information
    // setRooms(fetchedRoomsData);
  }, []);

  return (
    <div className="check-rooms-container">
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
