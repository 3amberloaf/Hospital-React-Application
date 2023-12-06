import React from 'react'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom for navigation
import checkRoom from '../assets/images/room.jpg'; // Import image for checking room availability
import assignRoom from '../assets/images/bed.jpg'; // Import image for assigning a room
import assignDoctor from '../assets/images/doctor.jpg'; // Import image for assigning a doctor
import assignNurse from '../assets/images/nurse.jpg'; // Import image for assigning a nurse
import surgerySchedule from '../assets/images/surgeryschedule.jpg'; // Import image for viewing surgery schedule
import bookSurgery from '../assets/images/book.jpg'; // Import image for booking a surgery
import { FaBed, FaUserMd, FaUserNurse, FaCalendarCheck, FaBookMedical } from 'react-icons/fa'; // Import specific icons from react-icons
import InfoContainer from '../OtherPages/InfoContainer'; // Import contact info container 
import '../inpatient.css' // Import inpatient CSS to style


function InPatientDashboard() {
  const navigate = useNavigate(); // Hook to enable navigation programmatically

  // Function to navigate to a different route
  const navigateTo = (path) => {
    navigate(path);
  };

  // Render method for the component
  return (
    <div>
      <div className="dashboard">
      <h2>In-Patient Management Portal</h2> 
      </div>

      <div className="dashboard-links">
        {/* Checking room/bed availability */}
        <div className="dashboard-item" onClick={() => navigateTo('/checkroom')}>
          <img src={checkRoom} alt="Check Room Availability" />
          <FaBed className="icon" />
          <p>Check for Available Room/Bed</p>
        </div>

        {/* Assigning/removing a patient to/from a room/bed */}
        <div className="dashboard-item" onClick={() => navigateTo('/assignroom')}>
          <img src={assignRoom} alt="Assign Room" />
          <FaBed className="icon" />
          <p>Assign/Remove a Patient to a Room/Bed</p>
        </div>

        {/* Assigning/removing a doctor to/from a patient */}
        <div className="dashboard-item" onClick={() => navigateTo('/assigndoctor')}>
          <img src={assignDoctor} alt="Assign Doctor" />
          <FaUserMd className="icon" />
          <p>Assign/Remove a Doctor to a Patient</p>
        </div>

        {/* Assigning/removing a nurse to/from a patient */}
        <div className="dashboard-item" onClick={() => navigateTo('/assignnurse')}>
          <img src={assignNurse} alt="Assign Nurse" />
          <FaUserNurse className="icon" />
          <p>Assign/Remove a Nurse to a Patient</p>
        </div>

        {/*Viewing scheduled surgery per room and per day */}
        <div className="dashboard-item" onClick={() => navigateTo('/viewsurgeryscheduleroom')}>
          <img src={surgerySchedule} alt="View Surgery Schedule" />
          <FaCalendarCheck className="icon" />
          <p>View Scheduled Surgery per Room and per Day</p>
        </div>

        {/* Booking a surgery */}
        <div className="dashboard-item" onClick={() => navigateTo('/booksurgery')}>
          <img src={bookSurgery} alt="Book Surgery" />
          <FaBookMedical className="icon" />
          <p>Book a Surgery</p>
        </div>

        {/* Viewing scheduled surgery per patient */}
        <div className="dashboard-item" onClick={() => navigateTo('/viewsurgerybypatient')}>
          <img src={surgerySchedule} alt="View Patient Surgery Schedule" />
          <FaCalendarCheck className="icon" />
          <p>View Scheduled Surgery per Patient</p>
        </div>
      </div>

      <InfoContainer /> {/* Contact and visiting info */}
    </div>
  );
}

export default InPatientDashboard;
