import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import './DetailsPageOutside.css';

const DetailsPageOutside = () => {
  const navigate = useNavigate();

  // Define the form fields
  const [formData, setFormData] = useState({
    department: '',
    lecturer: '',
    location: '',
    companyAddress: '',
    companyName: '',
    designation: '',
    domain: '',
    program: '',
    students: '',
    venue: '',
    date: '',
    mode: '',
    referrer: '',
    type:''
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to backend via POST request
    axios.post('http://localhost:8080/api/events?type=OutsideBIT', {
      department:formData.department,
      nameOfLecturer:formData.lecturer,
      location: formData.location,
      companyAddress: formData.companyAddress,
      companyName: formData.companyName,
      designation: formData.designation,
      domain: formData.domain,
      nameOfProgram: formData.program, // 'programName' used in form
      totalStudentsAttended: formData.students,
      venue: formData.venue,
      date: formData.date,
      mode: formData.mode,
      referrer: formData.referrer,
      type: formData.type
    })
    .then(response => {
      console.log('Data submitted successfully:', response.data);
      alert('Submitted successfully!');
      navigate('/outsideBIT'); // Redirect to the OutsideBIT page after submission
    })
    .catch(error => {
      console.error('There was an error submitting the data:', error);
    });
  };

  return (
    <div className="details-page-outside">
      <h2>Update Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department || ''}
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
          <label>Company's Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Company Address:</label>
          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Designation:</label>
          <input
            type="text"
            name="designation" 
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Domain:</label>
          <input
            type="text"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Program Name:</label>
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
            type="text"
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
          <label>Referrer:</label>
          <input
            type="text"
            name="referrer"
            value={formData.referrer}
            onChange={handleChange}
            required
          />
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
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DetailsPageOutside;
