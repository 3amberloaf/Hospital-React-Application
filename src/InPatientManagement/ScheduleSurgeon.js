import React, { useState, useEffect } from 'react';
import '../inpatient.css';

function ViewSurgeriesBySurgeon() {
  const [surgeons, setSurgeons] = useState([
    { id: 1, name: 'Dr. Smith', surgeries: [{ id: 101, patientName: 'John Doe', date: '2023-12-10', surgeryType: 'Type A' }] },
    { id: 2, name: 'Dr. Jones', surgeries: [{ id: 102, patientName: 'Jane Doe', date: '2023-12-10', surgeryType: 'Type B' }] },
  ]);

  useEffect(() => {
    // Fetch surgeons and their scheduled surgeries data
    // setSurgeons(fetchedData);
  }, []);

  return (
    <div className="surgeries-by-surgeon-container">
      <h2>Scheduled Surgeries per Surgeon</h2>
      {surgeons.map(surgeon => (
        <div key={surgeon.id} className="surgeon-schedule">
          <h3>{surgeon.name}</h3>
          <ul>
            {surgeon.surgeries.map(surgery => (
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

export default ViewSurgeriesBySurgeon;
