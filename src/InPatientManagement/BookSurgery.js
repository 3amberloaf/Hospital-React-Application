import React, { useEffect, useState } from "react";
import "../inpatient.css";
import { fetchPatients } from "../Api/PatientService";
import { fetchNurses } from "../Api/NurseService";
import { fetchSurgeons } from "../Api/SurgeonService";
import { fetchSurgeryTypes } from "../Api/SurgeryService";
import { createSurgery } from "../Api/SurgeryService";

// Declare function
function BookSurgery() {
  // use useState for managing the state of the patients, surgeons, dates, and surgery types
  const [patients, setPatients] = useState([{ id: 1, name: "John Doe" }]);
  const [surgeons, setSurgeons] = useState([{ id: 1, name: "Dr. Smith" }]);
  const [surgeryTypes, setSurgeryTypes] = useState(["Type 1", "Type 2"]);
  const [theatres, setTheatres] = useState([
    "Operating Room 1",
    "Operating Room 2",
    "Operating Room 3",
  ]);

  const [nurses, setNurses] = useState([]);
  const [message, setMessage] = useState("");

  const [selectedPatient, setSelectedPatient] = useState("");
  const [selectedSurgeon, setSelectedSurgeon] = useState("");
  const [selectedSurgeryType, setSelectedSurgeryType] = useState("");
  const [selectedTheatre, setSelectedTheatre] = useState(theatres[0]);

  const [selectedNurse1, setSelectedNurse1] = useState("");
  const [selectedNurse2, setSelectedNurse2] = useState("");

  const [surgeryDate, setSurgeryDate] = useState("");

  // FETCHING OF DATA:
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
  };
  const fetchAllSurgeons = async () => {
    try {
      const fetchedSurgeons = await fetchSurgeons();
      setSurgeons(fetchedSurgeons);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const fetchAllSurgeryTypes = async () => {
    try {
      const fetchedSurgeryTypes = await fetchSurgeryTypes();
      setSurgeryTypes(fetchedSurgeryTypes);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  useEffect(() => {
    fetchAllNurses();
    fetchAllPatients();
    fetchAllSurgeons();
    fetchAllSurgeryTypes();
  }, []);

  // Handler function for when data changes
  const handleTheatreChange = (e) => {
    setSelectedTheatre(e.target.value);
  };

  const handlePatientChange = (e) => {
    setSelectedPatient(e.target.value);
  };

  const handleSurgeonChange = (e) => {
    setSelectedSurgeon(e.target.value);
  };
  const handleNurse2Change = (e) => {
    setSelectedNurse2(e.target.value);
  };
  const handleNurse1Change = (e) => {
    setSelectedNurse1(e.target.value);
  };

  const handleSurgeryTypeChange = (e) => {
    setSelectedSurgeryType(e.target.value);
    console.log("selectedSurgeyr TYPEEEE " , selectedSurgeryType)
    console.log("selectedSurgeyr TYPEEEE " , selectedSurgeryType)
  };

  const handleSurgeryDateChange = (e) => {
    setSurgeryDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const surgeryData = {
      date: surgeryDate,
      theatre: selectedTheatre,
      surgeonId: parseInt(selectedSurgeon),
      patientId: parseInt(selectedPatient),
      surgeryTypeId: parseInt(selectedSurgeryType),
      nurseId1:selectedNurse1,
      nurseId2: selectedNurse2,
    };

    try {
      const response = await createSurgery(surgeryData);
      console.log("Surgery created:", response);
      setMessage("Surgery booked successfully!");
    } catch (error) {
      console.error("Error creating surgery:", error);
      setMessage("Error booking surgery. Please try again.");
    }
  };

  // create the components
  return (
    <div className="common-container">
      <h2>Book a Surgery</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientSelect">Select Patient:</label>
          <select
            id="patientSelect"
            name="patient"
            onChange={handlePatientChange}
            required
          >
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="surgeonSelect">Select Surgeon:</label>
          <select
            id="surgeonSelect"
            name="surgeon"
            onChange={handleSurgeonChange}
            required
          >
            {surgeons.map((surgeon) => (
              <option key={surgeon.id} value={surgeon.id}>
                {surgeon.id}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="surgeryTypeSelect">Select Surgery Type:</label>
          <select
            id="surgeryTypeSelect"
            name="surgeryType"
            onChange={handleSurgeryTypeChange}
            required
          >
            {surgeryTypes.map((type) => (
              <option key={type.id} value={type.id}>
                Type: {type.name} SkillId: {type.surgery_skill_id} location:{" "}
                {type.location}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="surgeryTypeSelect">Select Nurse 1:</label>
          <select
            id="surgeryTypeSelect"
            name="surgeryType"
            onChange={handleNurse1Change}
            required
          >
           {nurses.map((n) => (
              <option key={n.id} value={n.id}>
                {n.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="surgeryTypeSelect">Select Nurse 2:</label>
          <select
            id="surgeryTypeSelect"
            name="surgeryType"
            onChange={handleNurse2Change}
            required
          >
            {nurses.map((n) => (
              <option key={n.id} value={n.id}>
                {n.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="surgeryTypeSelect">Select Surgery Theatre:</label>
          <select
            id="surgeryTypeSelect"
            name="surgeryType"
            onChange={handleTheatreChange}
            required
          >
            {theatres.map((th) => (
              <option key={th} value={th}>
                {th}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="surgeryDate">Select Surgery Date:</label>
          <input
            type="date"
            id="surgeryDate"
            name="surgeryDate"
            value={surgeryDate}
            onChange={handleSurgeryDateChange}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit">Book Surgery</button>
        </div>
      </form>
      <div>{message}</div>
    </div>
  );
}

export default BookSurgery;
