import React, { useState } from 'react';


const DiseaseList = () => {
  const [diseases, setDiseases] = useState([
    { id: 1, name: 'Hepatitis A & E', score: 25, diagnosed: false },
    { id: 2, name: 'Immunodeficiency', score: 25, diagnosed: false },
    // ... other diseases
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDiagnosisChange = (diseaseId) => {
    setDiseases(diseases.map(disease =>
      disease.id === diseaseId ? { ...disease, diagnosed: !disease.diagnosed } : disease
    ));
  };

  const filteredDiseases = searchTerm === '' ? diseases : diseases.filter(disease =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search disease" onChange={handleSearchChange} />
      <table>
        <thead>
          <tr>
            <th>Disease</th>
            <th>Diagnosis</th>
          </tr>
        </thead>
        <tbody>
          {filteredDiseases.map((disease) => (
            <tr key={disease.id}>
              <td>{disease.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={disease.diagnosed}
                  onChange={() => handleDiagnosisChange(disease.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiseaseList;
