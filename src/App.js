import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientList from './PatientManagement/PatientList';
import AppointmentList from './PatientManagement/AppointmentList';
import PatientInfo from './PatientManagement/PatientInfo';
import PatientHistory from './PatientManagement/PatientHistory';
import ScheduleAppointments from './PatientManagement/ScheduleAppointments';
import SideBar from './OtherPages/SideBar';
import Dashboard from './OtherPages/Dashboard';
import AddPatientForm from './PatientManagement/AddPatient';
import ViewPatient from './PatientManagement/ViewPatient';
import DoctorsSchedule from './PatientManagement/DoctorsSchedule';
import PatientDashboard from './PatientManagement/PatientDashboard'; // Import the new component
import CheckAvailableRoom from './InPatientManagement/AvailableRooms';
import AssignRemoveDoctor from './InPatientManagement/AssignDoctor';
import AssignRemoveNurse from './InPatientManagement/AssignNurse';
import BookSurgery from './InPatientManagement/BookSurgery';
import ViewSurgerySchedulePatient from './InPatientManagement/ViewSurgerySchedulePatient';
import ViewSurgeryScheduleRoom from './InPatientManagement/ScheduleSurgeryRoom'; 
import ViewSurgeriesBySurgeon from './InPatientManagement/ScheduleSurgeon';
import InPatientDashboard from './InPatientManagement/InPatientDashboard';
import './App.css';
import AssignRemovePatientRoom from './InPatientManagement/AssignRoom';

// import all Medical Staff Routes
import MedicalStaffDashboard from './MedicalStaff/MedicalStaffDashboard';
import ScheduleJobShifts from './MedicalStaff/ScheduleJobShift';
import ViewStaffByJobType from './MedicalStaff/ViewStaffMember';
import AddRemoveStaffMember from './MedicalStaff/AddRemoveMember';



function App() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientHistory, setPatientHistory] = useState([]);

  const addPatient = (name) => {
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
            <Route path="/viewpatient" element={<ViewPatient />} />
            <Route path="/scheduleappointments" element={<ScheduleAppointments />} />
            <Route path="/patientdashboard" element={<PatientDashboard />} />
            <Route path="/doctorschedule" element={<DoctorsSchedule />} />
            <Route path="/inpatientdashboard" element={<InPatientDashboard />} />
            <Route path="/checkroom" element={<CheckAvailableRoom />} />
            <Route path="/assignroom" element={<AssignRemovePatientRoom />} />
            <Route path="/assignnurse" element={<AssignRemoveNurse />} />
            <Route path="/booksurgery" element={<BookSurgery />} />
            <Route path="/assigndoctor" element={<AssignRemoveDoctor />} />
            <Route path="/viewsurgeryscheduleroom" element={<ViewSurgeryScheduleRoom />} />
            <Route path="/viewsurgerybypatient" element={<ViewSurgerySchedulePatient />} />
            <Route path="/addpatient" element={<AddPatientForm addPatient={addPatient} />} />
            <Route path="/viewsurgerybysurgeon" element={<ViewSurgeriesBySurgeon />} />
            <Route path="/medicalstaffdashboard" element={<MedicalStaffDashboard />} />
            <Route path="/schedulejobshift" element={<ScheduleJobShifts />} />
            <Route path="/viewstaff" element={<ViewStaffByJobType />} />
            <Route path="/addremovestaff" element={<AddRemoveStaffMember />} />
            <Route exact path="/" element={
              <>
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;