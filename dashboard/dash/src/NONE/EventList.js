// src/EventList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventList.css';

// Sample data
const initialEventData = [
  {
    id: 1,
    resourcePerson: "John Doe",
    companyName: "Tech Solutions",
    companyAddress: "123 Tech Lane, Silicon Valley, CA",
    domain: "Software Development",
    designation: "Senior Developer",
    programName: "Industry Collaboration Seminar",
    date: "2024-09-30",
    referrer: "Jane Smith",
  },
  {
    id: 2,
    resourcePerson: "Alice Johnson",
    companyName: "Innovate Inc.",
    companyAddress: "456 Innovation Drive, New York, NY",
    domain: "Marketing",
    designation: "Marketing Manager",
    programName: "Digital Marketing Workshop",
    date: "2024-10-15",
    referrer: "Bob Brown",
  },
];

const EventList = ({ eventListData, handleUpdateClick }) => {
  const [data, setData] = useState(initialEventData);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setData(initialEventData);
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(item => {
    return (
      item.resourcePerson.toLowerCase().includes(search.toLowerCase()) ||
      item.companyName.toLowerCase().includes(search.toLowerCase()) ||
      item.companyAddress.toLowerCase().includes(search.toLowerCase()) ||
      item.domain.toLowerCase().includes(search.toLowerCase()) ||
      item.designation.toLowerCase().includes(search.toLowerCase()) ||
      item.programName.toLowerCase().includes(search.toLowerCase()) ||
      item.referrer.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleEditClick = (id) => {
    const selectedEvent = data.find(item => item.id === id);
    navigate('/update-details', {
      state: {
        existingData: selectedEvent,
         // Pass the handleUpdateEvent function
      }
    });
  };
  
  

  // const handleUpdateEvent = (updatedEvent) => {
  //   setData(prevData => {
  //     // Check if the event with the given ID exists
  //     const eventExists = prevData.some(event => event.id === updatedEvent.id);
      
  //     if (eventExists) {
  //       // Update the existing event
  //       return prevData.map(event => (event.id === updatedEvent.id ? updatedEvent : event));
  //     } else {
  //       // Add new event (for demo purposes, auto-assign an ID if none exists)
  //       return [...prevData, { ...updatedEvent, id: prevData.length + 1 }];
  //     }
  //   });
  // };
  
  

  return (
    <div className="eventlist-content">
      <h2><center>Upcoming Resource Persons</center></h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button onClick={() => navigate('/update-details')} className="update-button">
        Update Details
      </button>
      <table className="custom-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Resource Person</th>
            <th>Company Name</th>
            <th>Company Address</th>
            <th>Domain</th>
            <th>Designation</th>
            <th>Program Name</th>
            <th>Date</th>
            <th>Referrer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.resourcePerson}</td>
              <td>{item.companyName}</td>
              <td>{item.companyAddress}</td>
              <td>{item.domain}</td>
              <td>{item.designation}</td>
              <td>{item.programName}</td>
              <td>{item.date}</td>
              <td>{item.referrer}</td>
              <td>
                <button onClick={() => handleEditClick(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
