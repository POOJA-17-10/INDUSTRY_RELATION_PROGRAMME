// src/App.js
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css';
import './App.css';
import { Menu } from 'antd';
import { HomeOutlined, PoweroffOutlined, UnorderedListOutlined, RightOutlined } from '@ant-design/icons';
import BITLogo from './BITheaderlogo.png';
import InsideBIT from './InsideBIT';
import OutsideBIT from './OutsideBIT';
import DetailsPage from './DetailsPage';
import DetailsPageOutside from './DetailsPageOutside';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import EventList from './EventList';
// import UpdateDetails from './UpdateDetails';
import CommitteeMembers from './CommitteeMembers';

function App() {
  const [eventListData, setEventListData] = useState([]); // State to hold event list data
  const [selectedEventId, setSelectedEventId] = useState(null); // State for selected event ID
  const navigate = useNavigate();

  const handleUpdateClick = (updatedData) => {
    setEventListData((prevData) => {
      return prevData.map((item) =>
        item.id === updatedData.id ? updatedData : item
      );
    });
    navigate('/eventlists'); // Redirect back to EventList after updating
  };

  const handleEditClick = (id) => {
    setSelectedEventId(id); // Set the ID of the event to be updated
    navigate('/update-details'); // Navigate to the update page
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <SideMenu navigate={navigate} />
        <Content
          handleUpdateClick={handleUpdateClick}
          eventListData={eventListData}
          handleEditClick={handleEditClick}
          selectedEventId={selectedEventId}
        />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src={BITLogo} alt="BANNARI AMMAN INSTITUTE OF TECHNOLOGY" className="header-logo" />
    </div>
  );
}

function Footer() {
  return <div className="footer">@iipcdashboard</div>;
}

function SideMenu({ navigate }) {
  return (
    <div className="sidebar">
      <Menu
        onClick={({ key }) => {
          if (key === 'signout') {
            // Clear user info and navigate to login
            navigate('/login');
          } else {
            navigate(key);
          }
        }}
        mode="inline"
        items={[
          { label: 'Home', key: '/', icon: <HomeOutlined /> },
          { label: 'About IIPC', key: '/aboutiipc', icon: <RightOutlined /> },
          { label: 'Committee Members', key: '/committeemembers', icon: <UnorderedListOutlined /> },
          {
            label: 'Resource Person',
            key: '/resourceperson',
            icon: <UnorderedListOutlined />,
            children: [
              { label: 'Inside BIT', key: '/insideBIT' },
              { label: 'Outside BIT', key: '/outsideBIT' },
            ],
          },
          // { label: 'Event List', key: '/eventlists', icon: <UnorderedListOutlined /> },
          { label: 'Signout', key: 'signout', icon: <PoweroffOutlined />, danger: true },
        ]}
      />
    </div>
  );
}

function Content({ handleUpdateClick, eventListData, handleEditClick, selectedEventId }) {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<div className="home-content"><b>HOME</b><br />Welcome back to Industry-Institute Partnership Cell homepage!</div>} />
        <Route path="/aboutiipc" element={<div className="aboutiipc-content"><b>ABOUT IIPC</b><br /><br /><b>Objective</b><br />To reduce the gap between industry expectations (practice) and academic offerings (theory) by direct involvement of industry to attain a symbiosis.<br /><br /><b>Associated activities / Functions</b><br />1. Industrial exposure, collaborations & training<br />2. Involving industrial experts in academics</div>} />
        <Route path="/committeemembers" element={<CommitteeMembers />} />
        <Route path="/resourceperson" element={<div className="resourceperson-content">Resource Person</div>} />
        <Route path="/insideBIT" element={<InsideBIT />} />
        <Route path="/details-page" element={<DetailsPage />} />
        <Route path="/outsideBIT" element={<OutsideBIT />} />
        <Route path="/details-page-outside" element={<DetailsPageOutside />} />
        {/* <Route path="/eventlists" element={<EventList eventListData={eventListData} handleEditClick={handleEditClick} />} />
        <Route path="/update-details" element={<UpdateDetails onSubmit={handleUpdateClick} existingData={eventListData.find(item => item.id === selectedEventId)} />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

