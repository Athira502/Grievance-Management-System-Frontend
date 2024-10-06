
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './GrievDetails.css'; 

export default function GrievDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const grievance = location.state.grievance;
  const [successMessage, setSuccessMessage] = useState(null);

  const [statusUpdate, setStatusUpdate] = useState(grievance.status);

  const handleSubmit = () => {
    const updatedGrievance = { ...grievance, status: statusUpdate };

    setSuccessMessage(`Grievance ${grievance.id} updated successfully!!`);
    setTimeout(() => {
      navigate('/assigneeDashboard', { state: { updatedGrievance } }); 
    }, 1000);
  };

  return (
    <div className="detailsContainer">
      <h1>Grievance Details</h1>
      {successMessage ? (<p className="successMessage">{successMessage}</p>) :
        (grievance && (
          <div className="outerForm">
            <p className='details'><strong>Grievance No:</strong> {grievance.id}</p>
            <p className='details'><strong>Email:</strong> {grievance.user.email}</p>
           <p className='details'><strong>Issue:</strong> {grievance.description}</p>
            <p className='details'><strong>Status:</strong> {grievance.status}</p>

            <div className="updateStatus">
              <label htmlFor={`status-${grievance.id}`}>Update Status:</label>
              <select id={`status-${grievance.id}`} value={statusUpdate} onChange={(e) => setStatusUpdate(e.target.value)} className='update-select'>
                <option value="PENDING">Work is yet to start</option>
                <option value="IN_PROGRESS">We're working on it</option>
                <option value="RESOLVED">Work is done</option>
              </select>
            </div>
          
            <button className="submitBtn" onClick={handleSubmit}>Submit</button>
          </div>
        ))
      }
    </div>
  );
}