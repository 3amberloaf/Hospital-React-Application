import React, { useState } from 'react';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa'; 
import '../staff.css'; 
import { addMember, removeMember } from '../Api/EmployeeService';

function AddRemoveStaffMember() {
  const [staffMembers, setStaffMembers] = useState(['Dr. Smith', 'Nurse Kate']); 
  const [newMember, setNewMember] = useState('');

  const handleAddMember = () => {
    addMember(staffMembers, newMember, setStaffMembers, setNewMember);
  };

  const handleRemoveMember = (index) => {
    removeMember(staffMembers, index, setStaffMembers);
  };

  return (
    <div className="add-remove-staff-container">
      <h2>Add/Remove Staff Member</h2>
      <div className="add-staff-form">
        <input 
          type="text"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
          placeholder="Enter Name"
        />
        <button onClick={handleAddMember}><FaPlusCircle /> Add</button>
      </div>
      <div className="staff-list">
        {staffMembers.map((member, index) => (
          <div key={index} className="staff-member">
            <span>{member}</span>
            <button onClick={() => handleRemoveMember(index)}><FaTrashAlt /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddRemoveStaffMember;
