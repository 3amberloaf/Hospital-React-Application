import React from 'react'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom for navigation
import newPatient from '../assets/images/new.jpg'; // Import image for new patient option
import viewPatient from '../assets/images/portal.jpg'; // Import image for view patient option
import scheduleAppointments from '../assets/images/schedule.jpg'; // Import image for scheduling appointments
import doctorSchedule from '../assets/images/calendar.jpg'; // Import image for viewing doctor's schedule
import { FaUserPlus, FaInfoCircle, FaCalendarAlt, FaStethoscope } from 'react-icons/fa'; // Import specific icons from react-icons
import InfoContainer from '../OtherPages/InfoContainer'; // Import contact info container 
import '../patient.css' // Import patient CSS to style

function PatientDashboard() {
  const navigate = useNavigate(); // Hook to enable navigation 

  // Function to navigate to a different route
  const navigateTo = (path) => {
    navigate(path);
  };

  // Set up dashboard
  return (
    <div>
      <div className="dashboard" >
      <h2>Patient Management Portal</h2> 
      </div>

      <div className="dashboard-links">
        {/* Add a new patient container */}
        <div className="dashboard-item" onClick={() => navigateTo('/addpatient')}>
        <img src={newPatient} alt="Patient Management" />
        <FaUserPlus className="icon" />
          <p>Insert New Patient</p>
        </div>

        {/* Viewing patient information container */}
        <div className="dashboard-item" onClick={() => navigateTo('/viewpatient')}>
        <img src={viewPatient} alt="View Patient Information" />
          <FaInfoCircle  className= "icon" />
          <p>View Patient Information</p>
        </div>

        {/* Scheduling appointments container*/}
        <div className="dashboard-item" onClick={() => navigateTo('/scheduleappointments')}>
          <img src={scheduleAppointments} alt ="Schedule Appointments" />
          <FaCalendarAlt className= "icon" />
          <p>Schedule Appointments</p>
        </div>

        {/* Viewing doctor's schedule container*/}
        <div className="dashboard-item" onClick={() => navigateTo('/doctorschedule')}>
          <img src={doctorSchedule} alt= "View Doctor Schedule" />
          <FaStethoscope className= "icon" />
          <p>View Doctors Schedule</p>
        </div>
        </div>
        
        <InfoContainer /> {/* Contact and visiting info */}
      </div>
  );
}

export default PatientDashboard; 
