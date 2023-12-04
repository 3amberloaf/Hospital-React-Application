import React from 'react';
import '/Users/ambersautner/patient-management/src/components.css';

const AddPatientForm = () => {
  return (
    <div className="add-patient-form">
      <h2>Add Patient</h2>
      <form>
        {/* First Name input */}
        <label>
          First Name:
          <input type="text" placeholder="Enter First Name" />
        </label>

        {/* Last Name input */}
        <label>
          Last Name:
          <input type="text" placeholder="Enter Last Name" />
        </label>

        {/* Birthday input */}
        <label>
          Birthday:
        <input type="date" placeholder="Enter Date of Birth" />
        </label>

        {/* Sex selection */}
        <label> Sex:</label>
        <div className="sex-selection">
          <label className='button-label'>
           <input type="radio" name="sex" value="female" />
           <span className="button female">Female</span>
         </label>
         <label className='button-label'>
           <input type="radio" name="sex" value="male" />
           <span className="button male">Male</span>
         </label>
      </div>


        {/* More fields */}
        <button type="submit">Add</button>
      </form>
      {/* Disease checklist */}
      <div className="disease-checklist">
        <input type="search" placeholder="Search disease" />
        {/* Render disease list */}
      </div>
    </div>
  );
};

export default AddPatientForm;
