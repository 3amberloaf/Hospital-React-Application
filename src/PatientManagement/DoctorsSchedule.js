import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import { fetchSurgerySchedule } from "../Api/SurgeryService";

function DoctorsSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const fetchTheSchedule = async () => {
    try {
      const fetchedSchedule = await fetchSurgerySchedule();
      setSchedule(fetchedSchedule);
    } catch (error) {
      console.error("ERROR FETCHING SCHEDULE", error);
    }
  };

  useEffect(() => {
    fetchTheSchedule();
  }, []);

  // Filter the schedule for doctors working on the selected date
  const doctorsOnSelectedDate = schedule.filter(item => {
    const scheduleDate = new Date(item.date);
    return scheduleDate.getDate() === date.getDate() &&
           scheduleDate.getMonth() === date.getMonth() &&
           scheduleDate.getFullYear() === date.getFullYear();
  });

  return (
    <div className="calendar-container">
      <h2>NWA Doctor Schedule</h2>
      <Calendar
        onChange={setDate}
        value={date}
      />
      <h3>Doctors working on {date.toDateString()}:</h3>
      <ul>
        {doctorsOnSelectedDate.length > 0 ? (
          doctorsOnSelectedDate.map((item, index) => (
            item.surgeonId ? <li key={index}>Surgeon ID: {item.surgeonId}</li> : <li key={index}>Surgeon ID not available</li>
          ))
        ) : (
          <li>No doctors available on this day.</li>
        )}
      </ul>
    </div>
  );
        }

export default DoctorsSchedule;