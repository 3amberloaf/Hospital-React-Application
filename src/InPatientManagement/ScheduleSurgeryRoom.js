import React, { useState, useEffect } from 'react';
import '../inpatient.css'; // Ensure this path is correct

function ViewSurgeryScheduleRoom() {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room 101', surgeries: [{ id: 201, patientName: 'John Doe', date: '2023-12-10', surgeryType: 'Type A' }] },
    { id: 2, name: 'Room 102', surgeries: [{ id: 202, patientName: 'Jane Doe', date: '2023-12-10', surgeryType: 'Type B' }] },
    // ... other rooms and their surgeries ...
  ]);

  useEffect(() => {
    // Fetch rooms and their scheduled surgeries data
    // setRooms(fetchedData);
  }, []);

  return (
    <div className="surgeries-by-room-container">
      <h2>Scheduled Surgeries per Room</h2>
      {rooms.map(room => (
        <div key={room.id} className="room-schedule">
          <h3>{room.name}</h3>
          <ul>
            {room.surgeries.map(surgery => (
              <li key={surgery.id}>
                {surgery.date}: {surgery.patientName} - {surgery.surgeryType}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ViewSurgeryScheduleRoom;
