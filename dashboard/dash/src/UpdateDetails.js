// src/UpdateDetails.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './UpdateDetails.css';

const UpdateDetails = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    resourcePerson: '',
    companyName: '',
    companyAddress: '',
    domain: '',
    designation: '',
    programName: '',
    date: '',
    referrer: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const existingData = location.state?.existingData;
    if (existingData) {
      setFormData(existingData);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/eventlists', {
      state: { updatedData: formData } // Pass the updated data back to EventList
    });
  };

  return (
    <div className="update-details">
      <h2>Update Details</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key} className="form-group">
            <label>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</label>
            <input
              type="text"

              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateDetails;
