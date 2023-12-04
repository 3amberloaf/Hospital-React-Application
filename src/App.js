import React, { useState } from 'react';
import NavBar from './Patient_Management/components/NavBar';
import AddPatientForm from './Patient_Management/components/AddPatientForm';
import PatientList from './Patient_Management/components/PatientList';
import AppointmentList from './Patient_Management/components/AppointmentList';
import PatientInfo from './Patient_Management/components/PatientInfo';
import PatientHistory from './Patient_Management/components/PatientHistory';
import ScheduleAppointments from './Patient_Management/components/ScheduleAppointments';
import SideBar from './Patient_Management/components/SideBar'; // Import the Sidebar component
import './App.css';


function App() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientHistory, setPatientHistory] = useState([]);


  const handleAddPatient = (name) => {
    const newPatient = { name, id: patients.length + 1 };
    setPatients([...patients, newPatient]);
  };

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const selectPatient = (patient) => {
    setSelectedPatient(patient);
    setPatientHistory([{ date: '2021-01-01', diagnosis: 'Example Diagnosis', treatment: 'Example Treatment' }]);
  };

  return (
    <div className="App">
      <SideBar /> {SideBar}
      <div className="content"></div>
      <NavBar />
      <AddPatientForm addPatient={handleAddPatient} />
      <ScheduleAppointments addAppointment={addAppointment} />
      <PatientList patients={patients} onSelectPatient={selectPatient} />
      {selectedPatient && <PatientInfo patient={selectedPatient} />}
      {selectedPatient && <PatientHistory history={patientHistory} />}
      <AppointmentList appointments={appointments} />
    </div>
  );
}

export default App;
