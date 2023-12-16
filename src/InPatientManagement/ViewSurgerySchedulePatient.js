import React, { useState, useEffect } from 'react';
import '../inpatient.css'; // Ensure this path is correct
import { fetchSurgerySchedule } from "../Api/SurgeryService";


function ViewSurgerySchedulePatient() {
  const [schedule, setSchedule] = useState([ ]);
  /// FeTCHING DATA

  const fetchTheSchedule = async () => {

    try {
      const fetchedSchedule = await fetchSurgerySchedule();
      setSchedule(fetchedSchedule)
    } catch (error) {
      console.error("ERROR FETCHING SCHEDULE" , error)
    }
  }

  useEffect(() => {
    // Fetch scheduled surgeries data from a backend or other source
    // setScheduledSurgeries(fetchedData);
    fetchTheSchedule();

  }, []);

  return (
    <div className="common-container">
      <h2>Scheduled Surgeries per Patient</h2>
      <table className="scheduled-surgeries-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Surgery Type</th>
            <th>Date</th>
            <th>Surgeon</th>
            <th>Nurses</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(surgery => (
            <tr key={surgery.surgeryId}>
              <td>{surgery.patientName}</td>
              <td>{surgery.surgeryType}</td>
              <td>{surgery.date}</td>
              <td>{surgery.surgeonId}</td>
              <td>{surgery.nurses.map(n => " " + n.employeeInfo.name + " , " )}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSurgerySchedulePatient;
