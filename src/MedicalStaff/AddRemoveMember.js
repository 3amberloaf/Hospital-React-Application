import React, { useState, useEffect } from 'react';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa'; 
import '../staff.css'; 
import { addStaffMember, fetchEmployees, removeStaffMember } from '../Api/EmployeeService'; // Assuming these functions exist

function AddRemoveStaffMember() {
  const [staffMembers, setStaffMembers] = useState([]); 
  const [newMember, setNewMember] = useState('');

  // Function to fetch staff members from the database
  const fetchStaffMembers = async () => {
    try {
      // Assuming you have a function to fetch staff members
      const fetchedStaffMembers = await fetchEmployees();
      setStaffMembers(fetchedStaffMembers);
    } catch (error) {
      console.error('Error fetching staff members:', error);
    }
  };

  useEffect(() => {
    fetchStaffMembers(); // Fetch staff members when component mounts
  }, []);

  const handleAddMember = async () => {
    if (newMember) {
      try {
        // Attempt to add a new staff member
        await addStaffMember({ name: newMember });
        fetchStaffMembers(); // Fetch updated list with new members
        setNewMember(''); // Reset the input field
      } catch (error) {
        // Log error if adding a staff member fails
        console.error('Error adding staff member:', error);
      }
    }
  };
  
  const handleRemoveMember = async (index) => {
    const memberToRemove = staffMembers[index];
    try {
      // Attempt to remove the selected staff member
      await removeStaffMember(memberToRemove.emp_id);
      fetchStaffMembers(); // Refresh the staff members list
    } catch (error) {
      // Log error if removing a staff member fails
      console.error('Error removing staff member:', error.response ? error.response.data : error);
    }
  };
  

  

  return (
    <div className="add-remove-staff-container">
      <h2>Add/Remove Staff Member</h2>
      <div className="add-staff-form">
        <input 
          type="text"
          id="newMember" // Add an id attribute
          name="newMember" // Add a name attribute
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
          placeholder="Enter Name"
        />
        <button onClick={handleAddMember}><FaPlusCircle /> Add</button>
      </div>
      <div className="staff-list">
        {staffMembers.map((member, index) => (
          <div key={member.emp_id} className="staff-member"> {/* Assuming each member has an 'id' */}
            <span>{member.name}</span>
            <button onClick={() => handleRemoveMember(index)}><FaTrashAlt /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddRemoveStaffMember;
