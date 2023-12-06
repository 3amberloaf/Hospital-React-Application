import React, { useState } from 'react';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa'; // Icons for add and remove actions
import '../staff.css'; 

function AddRemoveStaffMember() {
  const [staffMembers, setStaffMembers] = useState(['Dr. Smith', 'Nurse Kate']); // Example initial data
  const [newMember, setNewMember] = useState('');

  const handleAddMember = () => {
    if (newMember) {
      setStaffMembers([...staffMembers, newMember]);
      setNewMember(''); // Reset input after adding
    }
  };

  const handleRemoveMember = (index) => {
    setStaffMembers(staffMembers.filter((_, idx) => idx !== index));
  };

  return (
    <div className="add-remove-staff-container">
      <h2>Add/Remove Staff Member</h2>
      <div className="add-staff-form">
        <input 
          type="text"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
          placeholder="Enter Staff Member's Name"
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
