import React from 'react';
import './CommitteeMembers.css';

const CommitteeMembers = () => {
  const members = [
    { name: 'Dr Palanisamy C', designation: 'Principal', industry: 'Bannari Amman Institute of Technology' },
    { name: 'Dr Sivakumar K', designation: 'Dean – PDS', industry: 'Bannari Amman Institute of Technology' },
    { name: 'Dr Shankar N', designation: 'Assistant Professor/IIPC Incharge', industry: 'Bannari Amman Institute of Technology' },
    { name: 'Mr Raghavendra Prabhu S', designation: 'Assistant Professor/Outside World Interaction Incharge', industry: 'Bannari Amman Institute of Technology' },
    { name: 'Mr Barathan K', designation: 'Director', industry: 'Ozotec Automobile Pvt. Ltd., Coimbatore' },
    { name: 'Mr Prasanna R', designation: 'Co-Founder & Director', industry: 'NextGEN 3D Tech, Hosur' },
  ];

  return (
    <div className="committee-container">
      <h2><center>Committee</center></h2>
      <table className="committee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Academic / Industry</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.designation}</td>
              <td>{member.industry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommitteeMembers;
