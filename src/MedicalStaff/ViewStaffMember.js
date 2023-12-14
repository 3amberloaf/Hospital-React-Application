import React, { useState, useEffect } from "react";
import { FaStethoscope, FaUserNurse } from "react-icons/fa"; // Icons for different job types
import "../staff.css";
import { fetchSurgeons, fetchNurses, fetchEmployees } from "../Api/EmployeeService";

function ViewStaffByJobType() {
  // Define state variables for surgeons and nurses
  const [surgeons, setSurgeons] = useState([]);
  const [nurses, setNurses] = useState([]);
  const [employees, setEmployees] = useState([]);  

  const getSurgeons = async () => {
    try {
      const surgeonsData = await fetchSurgeons();
      console.log("Surgeons:", surgeonsData);
      setSurgeons(surgeonsData);
    } catch (error) {
      console.error("Error fetching surgeons:", error);
    }
  };

  const getNurses = async () => {
    try {
      const nursesData = await fetchNurses();
      console.log("Nurses:", nursesData);
      setNurses(nursesData);
    } catch (error) {
      console.error("Error fetching nurses:", error);
    }
  };

  const fetchAllEmployees = async () => {
    try {
      const employeesData = await fetchEmployees();
      setEmployees(employeesData);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    getSurgeons();
    getNurses();
    fetchAllEmployees(); // Fetch employee data when the component mounts
  }, []);

  const getNurseNameByEmployeeNumber = (employeeNumber) => {
    console.log("Looking for nurse with employee number:", employeeNumber);
    const employee = employees.find((emp) => emp.emp_id === employeeNumber);
    console.log("Found employee:", employee);
    return employee ? employee.name : "Name Not Found";
  };
  
  const getSurgeonNameByEmployeeNumber = (employeeNumber) => {
    console.log("Looking for surgeon with employee number:", employeeNumber);
    const employee = employees.find((emp) => emp.emp_id === employeeNumber);
    console.log("Found employee:", employee);
    return employee ? employee.name : "Name Not Found";

  };
  


  

  return (
    <div className="view-staff-container">
      <h2>View Staff Members by Job Type</h2>



      {/* Render surgeons */}
      {surgeons && (
        <div className="staff-type">
          <h3>
            <FaStethoscope /> Surgeons
          </h3>
          <ul>
            {surgeons.map((surgeon, id) => (
              <li key={id}>
                {getSurgeonNameByEmployeeNumber(surgeon.id)} ---- {surgeon.id}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Render nurses */}
      {nurses && (
        <div className="staff-type">
          <h3>
            <FaUserNurse /> Nurses
          </h3>
          <ul>
            {nurses.map((nurse, id) => (
              <li key={id}>
                {getNurseNameByEmployeeNumber(nurse.id)} ---- {nurse.id}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ... Other rendering code as needed */}
    </div>
  );
}

export default ViewStaffByJobType;

