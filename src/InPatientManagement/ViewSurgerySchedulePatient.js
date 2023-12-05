import React, { useState, useEffect } from 'react';
import '../inpatient.css'; // Ensure this path is correct

function ViewSurgerySchedulePatient() {
  const [scheduledSurgeries, setScheduledSurgeries] = useState([
    // Example data, replace with actual data fetching
    { id: 1, patientName: 'John Doe', surgeryType: 'Type 1', date: '2023-12-10', surgeon: 'Dr. Smith' },
    { id: 2, patientName: 'Jane Doe', surgeryType: 'Type 2', date: '2023-12-12', surgeon: 'Dr. Jones' },
    // ... other scheduled surgeries ...
  ]);

  useEffect(() => {
    // Fetch scheduled surgeries data from a backend or other source
    // setScheduledSurgeries(fetchedData);
  }, []);

  return (
    <div className="scheduled-surgeries-container">
      <h2>Scheduled Surgeries per Patient</h2>
      <table className="scheduled-surgeries-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Surgery Type</th>
            <th>Date</th>
            <th>Surgeon</th>
          </tr>
        </thead>
        <tbody>
          {scheduledSurgeries.map(surgery => (
            <tr key={surgery.id}>
              <td>{surgery.patientName}</td>
              <td>{surgery.surgeryType}</td>
              <td>{surgery.date}</td>
              <td>{surgery.surgeon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSurgerySchedulePatient;
