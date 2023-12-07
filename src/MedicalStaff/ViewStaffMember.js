import React, { useState, useEffect } from "react";
import { FaStethoscope, FaUserNurse, FaClipboardList } from "react-icons/fa"; // Icons for different job types
import "../staff.css";
import { fetchEmployees } from "../Api/EmployeeService";

function ViewStaffByJobType() {
  const [staff, setStaff] = useState([
    { jobType: "Doctors", members: ["Dr. Smith", "Dr. Johnson"] },
    { jobType: "Nurses", members: ["Nurse Kate", "Nurse Bob"] },
    { jobType: "Administrative", members: ["Admin Steve", "Admin Linda"] },
  ]);

  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const employees = await fetchEmployees();
      console.log("Employees:", employees);
      setEmployees(employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  // Icon selector based on job type
  const getIcon = (jobType) => {
    switch (jobType) {
      case "Doctors":
        return <FaStethoscope />;
      case "Nurses":
        return <FaUserNurse />;
      case "Administrative":
        return <FaClipboardList />;
      default:
        return <FaClipboardList />;
    }
  };

  return (
    <div className="view-staff-container">
      <h2>View Staff Members by Job Type</h2>
      {staff.map((item, index) => (
        <div key={index} className="staff-type">
          <h3>
            {getIcon(item.jobType)} {item.jobType}
          </h3>
          <ul>
            {item.members.map((member, idx) => (
              <li key={idx}>{member}</li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <span> IM mapping my employees from the db right here!!!</span>
        <ul>
          {employees.map( emp => <li key={emp.emp_id} > {emp.name} ---- {emp.ssn} </li> )}
        </ul>
      </div>
    </div>
  );
}

export default ViewStaffByJobType;
