import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Patient_Management/components/NavBar';
import AddPatientForm from './Patient_Management/components/AddPatientForm';
import PatientList from './Patient_Management/components/PatientList';
import AppointmentList from './Patient_Management/components/AppointmentList';
import PatientInfo from './Patient_Management/components/PatientInfo';
import PatientHistory from './Patient_Management/components/PatientHistory';
import ScheduleAppointments from './Patient_Management/components/ScheduleAppointments';
import SideBar from './Patient_Management/components/SideBar';
import Dashboard from './OtherPages/Dashboard';
import AddPatient from './OtherPages/AddPatient';
import SearchPage from './OtherPages/SearchPage';
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
    <Router>
      <div className="App">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addpatient" element={<AddPatient />} />
            <Route path="/search" element={<SearchPage />} />
            <Route exact path="/" element={
              <>
                <NavBar />
                <AddPatientForm addPatient={handleAddPatient} />
                <ScheduleAppointments addAppointment={addAppointment} />
                <PatientList patients={patients} onSelectPatient={selectPatient} />
                {selectedPatient && <PatientInfo patient={selectedPatient} />}
                {selectedPatient && <PatientHistory history={patientHistory} />}
                <AppointmentList appointments={appointments} />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
