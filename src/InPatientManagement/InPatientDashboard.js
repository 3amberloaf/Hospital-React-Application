import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import checkRoom from '../assets/images/room.jpg';
import assignRoom from '../assets/images/bed.jpg';
import assignDoctor from '../assets/images/doctor.jpg';
import assignNurse from '../assets/images/nurse.jpg';
import surgerySchedule from '../assets/images/surgeryschedule.jpg';
import bookSurgery from '../assets/images/book.jpg';
import { FaBed, FaUserMd, FaUserNurse, FaCalendarCheck, FaBookMedical } from 'react-icons/fa';
import InfoContainer from '../OtherPages/InfoContainer';
import '../inpatient.css';

function InPatientDashboard() {
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
      <div className="dashboard">
        <h2>In-Patient Management Portal</h2> 

        <div className="dashboard-links">
          <DashboardItem navigateTo={navigateTo} path='/checkroom' imgSrc={checkRoom} altText="Check Room Availability" Icon={FaBed} text="Check for Available Room/Bed" />
          <DashboardItem navigateTo={navigateTo} path='/assignroom' imgSrc={assignRoom} altText="Assign Room" Icon={FaBed} text="Assign/Remove a Patient to a Room/Bed" />
          <DashboardItem navigateTo={navigateTo} path='/assigndoctor' imgSrc={assignDoctor} altText="Assign Doctor" Icon={FaUserMd} text="Assign/Remove a Doctor to a Patient" />
          <DashboardItem navigateTo={navigateTo} path='/assignnurse' imgSrc={assignNurse} altText="Assign Nurse" Icon={FaUserNurse} text="Assign/Remove a Nurse to a Patient" />
          <DashboardItem navigateTo={navigateTo} path='/viewsurgeryscheduleroom' imgSrc={surgerySchedule} altText="View Surgery Schedule" Icon={FaCalendarCheck} text="View Scheduled Surgery per Room and per Day" />
          <DashboardItem navigateTo={navigateTo} path='/booksurgery' imgSrc={bookSurgery} altText="Book Surgery" Icon={FaBookMedical} text="Book a Surgery" />
          <DashboardItem navigateTo={navigateTo} path='/viewsurgerybypatient' imgSrc={surgerySchedule} altText="View Patient Surgery Schedule" Icon={FaCalendarCheck} text="View Scheduled Surgery per Patient" />
        </div>
      </div>

      <InfoContainer />
    </div>
  );
}

export default InPatientDashboard;
