import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './PatientManagement/NavBar';
import PatientList from './PatientManagement/PatientList';
import AppointmentList from './PatientManagement/AppointmentList';
import PatientInfo from './PatientManagement/PatientInfo';
import PatientHistory from './PatientManagement/PatientHistory';
import ScheduleAppointments from './PatientManagement/ScheduleAppointments';
import SideBar from './OtherPages/SideBar';
import Dashboard from './OtherPages/Dashboard';
import AddPatient from './PatientManagement/AddPatient';
import ViewPatient from './PatientManagement/ViewPatient';
import DoctorsSchedule from './PatientManagement/DoctorsSchedule';
import PatientDashboard from './PatientManagement/PatientDashboard'; // Import the new component
import CheckAvailableRoom from './InPatientManagement/AvailableRooms';
import AssignRemoveDoctor from './InPatientManagement/AssignDoctor';
import AssignRemoveNurse from './InPatientManagement/AssignNurse';
import BookSurgery from './InPatientManagement/BookSurgery';
import ViewSurgerySchedulePatient from './InPatientManagement/ViewSurgerySchedulePatient';
import ViewSurgeryScheduleRoom from './InPatientManagement/ScheduleSurgeryRoom'; 
import InPatientDashboard from './InPatientManagement/InPatientDashboard';
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
            <Route path="/viewpatient" element={<ViewPatient />} />
            <Route path="/scheduleappointments" element={<ScheduleAppointments />} />
            <Route path="/patientdashboard" element={<PatientDashboard />} />
            <Route path="/doctorschedule" element={<DoctorsSchedule />} />
            <Route path="/inpatientdashboard" element={<InPatientDashboard />} />
            <Route path="/check-available-room" element={<CheckAvailableRoom />} />
            <Route path="/assign-room" element={<CheckAvailableRoom />} />
            <Route path="/assign-nurse" element={<AssignRemoveNurse />} />
            <Route path="/book-surgery" element={<BookSurgery />} />
            <Route path="/assign-doctor" element={<AssignRemoveDoctor />} />
            <Route path="/view-surgery-schedule-room" element={<ViewSurgeryScheduleRoom />} />
            <Route path="/view-surgery-schedule-patient" element={<ViewSurgerySchedulePatient />} />
            <Route exact path="/" element={
              <>
                <NavBar />
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
