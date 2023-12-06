import React from 'react';
import { useNavigate } from 'react-router-dom';
import newPatient from '../assets/images/new.jpg';
import viewPatient from '../assets/images/portal.jpg';
import scheduleAppointments from '../assets/images/schedule.jpg';
import doctorSchedule from '../assets/images/calendar.jpg';
import { FaUserPlus, FaInfoCircle, FaCalendarAlt, FaStethoscope } from 'react-icons/fa';
import InfoContainer from '../OtherPages/InfoContainer';
import '../dashboard.css'

function PatientDashboard() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const DashboardItem = ({ navigateTo, path, imgSrc, altText, Icon, text }) => (
    <div className="dashboard-item" onClick={() => navigateTo(path)}>
      <img src={imgSrc} alt={altText} />
      {Icon && <Icon className="icon" />}
      <p>{text}</p>
    </div>
  );

  return (
    <div>
      <div className="welcome">
        <h2>Patient Management Portal</h2>

        <div className="dashboard">
          <DashboardItem navigateTo={navigateTo} path='/addpatient' imgSrc={newPatient} altText="Patient Management" Icon={FaUserPlus} text="Insert New Patient" />
          <DashboardItem navigateTo={navigateTo} path='/viewpatient' imgSrc={viewPatient} altText="View Patient Information" Icon={FaInfoCircle} text="View Patient Information" />
          <DashboardItem navigateTo={navigateTo} path='/scheduleappointments' imgSrc={scheduleAppointments} altText="Schedule Appointments" Icon={FaCalendarAlt} text="Schedule Appointments" />
          <DashboardItem navigateTo={navigateTo} path='/doctorschedule' imgSrc={doctorSchedule} altText="View Doctor Schedule" Icon={FaStethoscope} text="View Doctors Schedule" />
        </div>
      </div>

      <InfoContainer />
    </div>
  );
}

export default PatientDashboard;
