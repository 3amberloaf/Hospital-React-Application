import React, { useState, useEffect } from 'react';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa'; 
import '../staff.css'; 
import { addStaffMember, fetchEmployees, removeStaffMember } from '../Api/EmployeeService';

function AddRemoveStaffMember() {
  const [staffMembers, setStaffMembers] = useState([]); 
  const [newMemberName, setNewMemberName] = useState('');

  useEffect(() => {
    fetchAllStaffMembers();
  }, []);

  const fetchAllStaffMembers = async () => {
    try {
      const employees = await fetchEmployees();
      setStaffMembers(employees);
    } catch (error) {
      console.error('Error fetching staff members:', error);
    }
  };

  const handleAddMemberSubmit = async (event) => {
    event.preventDefault();
    if (!newMemberName) return;
    
    try {
      await addStaffMember({ name: newMemberName });
      setNewMemberName('');
      fetchAllStaffMembers();
    } catch (error) {
      console.error('Error adding staff member:', error);
    }
  };
  
  const handleRemoveMember = async (emp_id) => {
    try {
      await removeStaffMember(emp_id);
      fetchAllStaffMembers();
    } catch (error) {
      console.error('Error removing staff member:', error);
    }
  };

  return (
    <div className="add-remove-staff-container">
      <h2>Add/Remove Staff Member</h2>
      <form className="add-staff-form" onSubmit={handleAddMemberSubmit}>
        <input 
          type="text"
          id="newMember" 
          name="newMember" 
          value={newMemberName}
          onChange={(e) => setNewMemberName(e.target.value)}
          placeholder="Enter Name"
        />
        <button type="submit"><FaPlusCircle /> Add</button>
      </form>
      <StaffList staffMembers={staffMembers} onRemoveMember={handleRemoveMember} />
    </div>
  );
}

const StaffList = ({ staffMembers, onRemoveMember }) => (
  <div className="staff-list">
    {staffMembers.map((member) => (
      <div key={member.emp_id} className="staff-member">
        <span>{member.name}</span>
        <button onClick={() => onRemoveMember(member.emp_id)}><FaTrashAlt /></button>
      </div>
    ))}
  </div>
);

export default AddRemoveStaffMember;
