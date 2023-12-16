// basic imports
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//main dashboard imports
import SideBar from './OtherPages/SideBar';
import Dashboard from './OtherPages/Dashboard';
// patient management dashboard
import ScheduleAppointments from './PatientManagement/ScheduleAppointments';
import AddPatientForm from './PatientManagement/AddPatient';
import ViewPatient from './PatientManagement/ViewPatient';
import DoctorsSchedule from './PatientManagement/DoctorsSchedule';
import PatientDashboard from './PatientManagement/PatientDashboard';
// in-patient management dashboard
import CheckAvailableRoom from './InPatientManagement/AvailableRooms';
import AssignRemoveDoctor from './InPatientManagement/AssignDoctor';
import AssignRemoveNurse from './InPatientManagement/AssignNurse';
import BookSurgery from './InPatientManagement/BookSurgery';
import ViewSurgerySchedulePatient from './InPatientManagement/ViewSurgerySchedulePatient';
import InPatientDashboard from './InPatientManagement/InPatientDashboard';
import AssignRemovePatientRoom from './InPatientManagement/AssignRoom';
// import all Medical Staff Routes
import MedicalStaffDashboard from './MedicalStaff/MedicalStaffDashboard';
import ScheduleJobShifts from './MedicalStaff/ScheduleJobShift';
import ViewStaffByJobType from './MedicalStaff/ViewStaffMember';
import AddRemoveStaffMember from './MedicalStaff/AddRemoveMember';

function App() {
  const [patients, setPatients] = useState([]);

  const addPatient = (name) => {
    const newPatient = { name, id: patients.length + 1 };
    setPatients([...patients, newPatient]);
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
            <Route path="/viewsurgerybypatient" element={<ViewSurgerySchedulePatient />} />
            <Route path="/addpatient" element={<AddPatientForm addPatient={addPatient} />} />
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