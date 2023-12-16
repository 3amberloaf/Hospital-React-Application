import React, { useEffect, useState } from 'react';
import '../inpatient.css';
import { fetchPatients ,getPatientById , removePatientNurse, updatePatientNurse } from "../Api/PatientService";
import { fetchNurses} from "../Api/NurseService";



// Declaring the AssignRemoveNurse function
function AssignRemoveNurse() {
  
  // useState hook to manage the state of things 
  
  const [patients, setPatients] = useState([{ id: 1, name: 'Jane Doe' }]);
  const [nurses, setNurses] = useState([{ id: 1, name: 'Nurse Riley' }]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedNurse, setSelectedNurse] = useState('');
  const [selectedPatientInfo , setSelectedPatientInfo] = useState({});


  const fetchAllPatients = async () => {
    try {
      const fetchedPatients = await fetchPatients();
      setPatients(fetchedPatients);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const fetchAllNurses = async () => {

    try {
      const fetchedNurses = await fetchNurses();
      setNurses(fetchedNurses);
    } catch (error) {
      console.error("Error fetching patients:", error);

    }
  }

  useEffect(()=>{

    fetchAllNurses();
    fetchAllPatients()

  } , [])

  const getPatientInfo = async (id) =>{
    try {
      let patient  = await getPatientById(id);
    setSelectedPatientInfo(patient);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
    
  }

  // Handler function for when the patient selection changes
  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
    getPatientInfo(event.target.value);
  };

  // Handler function for when the nurse selection changes
  const handleNurseChange = (event) => {
    setSelectedNurse(event.target.value);
  };

  // Function to assign nurse to a patient
  const handleAssignNurse = () => {
    // Placeholder to assign the selected nurse to the selected patient

    console.log("selectedNurse: " , selectedNurse)
    updatePatientNurse(selectedPatientInfo.id , selectedNurse)
    getPatientInfo(selectedPatientInfo.id)

    console.log(`Assigned Nurse ${selectedNurse} to Patient ${selectedPatient}`);
  };

  // Function to remove nurse from a patient
  const handleRemoveNurse = () => {
    // Placeholder to remove the nurse from the selected patient
    removePatientNurse(selectedPatientInfo.id )
    console.log(`Removed Nurse from Patient ${selectedPatient}`);
    getPatientInfo(selectedPatientInfo.id)
  };

  // create the components
  return (
    <div className="common-container">
      <h2>Assign/Remove Nurse to Patient</h2>
      <div>
        {/* Patient selection dropdown */}
        <label htmlFor="patient-select">Select Patient:</label>
        <select id="patient-select" value={selectedPatient} onChange={handlePatientChange}>
          {patients.map(patient => (
            <option key={patient.id} value={patient.id}>{patient.name + "   id: " + patient.id}</option>
          ))}
        </select>
      </div>
      <div>
        {/* Nurse selection dropdown */}
        <label htmlFor="nurse-select">Assign Nurse:</label>
        <select id="nurse-select" value={selectedNurse} onChange={handleNurseChange}>
          {nurses.map(nurse => (
            <option key={nurse.id} value={nurse.id}>{nurse.name}</option>
          ))}
        </select>
      </div>
      {/* Buttons to assign or remove a nurse */}
      <button onClick={handleAssignNurse}>Assign Nurse</button>
      <button onClick={handleRemoveNurse}>Remove Nurse</button>
      <>
      <div></div>
      <span>{"  \n     Patient Name: " }</span>

      <span>{ selectedPatientInfo && selectedPatientInfo.name + " " }</span>
      <div></div>
      <span>{"  \n     Patient DOB: " }</span>

      <span>{ selectedPatientInfo && selectedPatientInfo.dob + "    " }</span>
      <div></div>
      <span>{"  \n     Primary Care Physician Id: " }</span>
      <span>{ selectedPatientInfo && selectedPatientInfo.primaryPhysicianId}</span>
      <div></div>
      <span>{"  \n     Nurse Id: " }</span>
      <span>{ selectedPatientInfo && selectedPatientInfo.nurseId}</span>

      </>
    </div>
  );
}

export default AssignRemoveNurse;
