import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './InsideBIT.css';

const InsideBIT = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:8080/api/events/InsideBIT') // Adjust URL as needed
      .then((response) => {
        setData(response.data); // Set the data from the backend response
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
    setCurrentPage(1);
  };

  // Function to format date for comparison
  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    const year = dateObj.getFullYear().toString();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Zero-padded
    const day = dateObj.getDate().toString().padStart(2, '0'); // Zero-padded
    return { year, month, day, fullDate: `${day}/${month}/${year}` };
  };

  // Search filter logic
  const filteredData = data.filter(item => {
    const { year, month, day, fullDate } = formatDate(item.date);

    return (
      item.department.toLowerCase().includes(search) ||
      item.nameOfLecturer.toLowerCase().includes(search) ||
      item.nameOfProgram.toLowerCase().includes(search) ||
      item.totalStudentsAttended.toString().toLowerCase().includes(search) ||
      item.venue.toLowerCase().includes(search) ||
      item.mode.toLowerCase().includes(search) ||
      year.includes(search) || 
      month.includes(search) ||
      day.includes(search) ||
      `${month}/${year}` === search || 
      fullDate === search
    );
  });

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUpdateClick = () => {
    navigate('/details-page');
  };

  return (
    <div className="insidebit-content">
      <h2><center>InsideBIT</center></h2>
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={handleSearch}
          className="search-input"
        />
        <button className="update-button" onClick={handleUpdateClick}>
          Update Details
        </button>
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Department</th>
            <th>Name of the Lecturer</th>
            <th>Name of the Program</th>
            <th>Total Students Attended</th>
            <th>Venue</th>
            <th>Mode</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td>{startIndex + index + 1}</td>
              <td>{item.department}</td>
              <td>{item.nameOfLecturer}</td>
              <td>{item.nameOfProgram}</td>
              <td>{item.totalStudentsAttended}</td>
              <td>{item.venue}</td>
              <td>{item.mode}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InsideBIT;
