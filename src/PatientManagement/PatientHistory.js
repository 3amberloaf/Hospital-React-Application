// PatientHistory.js
import React from 'react';

function PatientHistory({ history }) {
  return (
    <div>
      <h2>Patient History</h2>
      {history.map((record, index) => (
        <div key={index}>
          <p>Date: {record.date}</p>
          <p>Diagnosis: {record.diagnosis}</p>
          <p>Treatment: {record.treatment}</p>
        </div>
      ))}
    </div>
  );
}

export default PatientHistory;
