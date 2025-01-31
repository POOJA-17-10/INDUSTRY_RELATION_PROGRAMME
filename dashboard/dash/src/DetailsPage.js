import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import './DetailsPage.css';

const DetailsPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    department: '',
    lecturer: '',
    program: '',
    students: '', // Ensure this field is included
    venue: '',
    mode: '',
    date: '', // Add date field here
    type:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to backend via POST request
    axios.post('http://localhost:8080/api/events', {
      department: formData.department,
      nameOfLecturer: formData.lecturer, // Update field names to match the backend
      nameOfProgram: formData.program,
      totalStudentsAttended: formData.students,
      venue: formData.venue,
      mode: formData.mode,
      date: formData.date,
      type:formData.type
    })
    .then(response => {
      console.log('Data submitted successfully:', response.data);
      alert('Submitted successfully!');
      navigate('/insideBIT'); // Navigate to InsideBIT page after successful submission
    })
    .catch(error => {
      console.error('There was an error submitting the data:', error);
    });
  };

  return (
    <div className="details-page">
      <h2>Update Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Lecturer:</label>
          <input
            type="text"
            name="lecturer"
            value={formData.lecturer}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Program:</label>
          <input
            type="text"
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Total Students:</label>
          <input
            type="number"
            name="students"
            value={formData.students}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Venue:</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mode:</label>
          <input
            type="text"
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DetailsPage;
