import React, { useState } from 'react';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchParams);
  };

  return (
    <div className="add-patient-form">
      <h1>Patient Information</h1>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={searchParams.firstName}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={searchParams.lastName}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Date of Birth:
            <input
              type="date"
              name="dateOfBirth"
              value={searchParams.dateOfBirth}
              onChange={handleChange}
            />
          </label>
        </div>

        

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
