import React, { useEffect, useState } from 'react';
import '../inpatient.css'; 
import { fetchPatients ,getPatientById , removePatientDoctor, updatePatientPCP  } from "../Api/PatientService";
import { fetchAllPhysicians } from "../Api/PhysicianService";



function AssignRemoveDoctor() {
  // State for managing things

  const [patients, setPatients] = useState([{ id: 1, name: 'John Doe' }]);
  const [doctors, setDoctors] = useState([{ id: 1, name: 'Dr. Smith' }]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedPatientInfo , setSelectedPatientInfo] = useState({});


  const fetchAllPatients = async () => {
    try {
      const fetchedPatients = await fetchPatients();
      setPatients(fetchedPatients);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const getPatientInfo = async (id) =>{
    try {
      let patient  = await getPatientById(id);
    setSelectedPatientInfo(patient);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
    
  }

  const fetchAllDoctors = async () => {
    try {
      const fetchedDoctors = await fetchAllPhysicians();
      setDoctors(fetchedDoctors);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const updatePatientsDoctor = async (patientId , physiciansId) => {
    try {
      await updatePatientPCP(patientId, physiciansId);
      console.log('patient updated successfully:');
      getPatientInfo(selectedPatientInfo.id)
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };
  

  // Handler for changes in the patient selection
  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
    getPatientInfo(event.target.value);
  };

  // Handler for changes in the doctor selection
  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  // Handler for assigning doctor to a patient
  const handleAssignDoctor = () => {
    // Logic to assign the selected doctor to the selected patient
    
    updatePatientsDoctor(selectedPatientInfo.id , selectedDoctor )
    console.log(`Assigned Doctor ${parseInt(selectedDoctor)} to Patient ${selectedPatient} in handle asssign button`);
  };

  // Handler for removing a doctor from a patient
  const handleRemoveDoctor = () => {
    // Logic to remove the doctor from the selected patient

    removePatientDoctor(selectedPatientInfo.id)
    console.log(`Removed Doctor from Patient ${selectedPatient}`);
  };

  useEffect(()=>{

    fetchAllPatients();
    fetchAllDoctors();
   
  } , [])



  return (
    <div className="common-container">
      <h2>Doctor to Patients</h2>
      {/* Dropdown for selecting a patient */}
      <div>
        <label htmlFor="patient-select">Select Patient:</label>
        <select id="patient-select" value={selectedPatient} onChange={handlePatientChange}>
          {patients.map(patient => (
            <option key={patient.id} value={patient.id}>{patient.name}</option>
          ))}
        </select>
      </div>
      {/* Dropdown for selecting a doctor */}
      <div>
        <label htmlFor="doctor-select">Select Doctor:</label>
        <select id="doctor-select" value={selectedDoctor} onChange={handleDoctorChange}>
          {doctors.map(doctor => (
            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
          ))}
        </select>
      </div>
      {/* Buttons for assigning or removing a doctor */}
      <button onClick={handleAssignDoctor}>Assign Doctor</button>
      <button onClick={handleRemoveDoctor}>Remove Doctor</button>
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

      </>
    </div>
  );
}

export default AssignRemoveDoctor;
