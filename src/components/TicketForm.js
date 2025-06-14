import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '../api/axiosInstance';

const TicketForm = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    // type: 'Request',
    // summary: '',
    title:'',
    description: '',
    // reporter: 'Product-Manager',
    // assignee: 'Sammy-ServiceDesk',
    // status: 'WAITING FOR SUPPORT',
    // created: new Date().toLocaleDateString('en-GB'), // Default value, can be overridden by backend
    // timeToResolve: '0m' // Default value, can be overridden by backend
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.description) {
      Swal.fire({
        title: 'Validation Error',
        icon: 'error',
        text: 'Summary and Description are required!'
      });
      return;
    }

    try {
      const response = await axiosInstance.post('/tickets', {
        // type: formData.type,
        // summary: formData.summary,
        title: formData.title,
        description: formData.description,
        // reporter: formData.reporter,
        // assignee: formData.assignee,
        // status: formData.status,
        // created: formData.created,
        // timeToResolve: formData.timeToResolve
      });

      const newTicket = response.data; // Assuming the API returns the created ticket

      onCreate(newTicket);
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Ticket created successfully!'
      });
      onClose();
    } catch (error) {
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: error.message || 'Failed to create ticket.'
      });
    }
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000
  };

  const formContainerStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    width: '500px',
    maxHeight: '80vh',
    overflowY: 'auto'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '8px'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #dfe1e6',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '15px'
  };

  const buttonStyle = {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#0052cc',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px'
  };

  return (
    <div style={modalStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>Create New Ticket</h2>
        {/* <label style={labelStyle}>Type</label>
        <select name="type" value={formData.type} onChange={handleChange} style={inputStyle}> */}
          {/* <option value="Request">Request</option>
          <option value="Report a system problem">Report a system problem</option>
          <option value="Broken hardware">Broken hardware</option>
          <option value="Get a guest wifi account">Get a guest wifi account</option>
          <option value="Request new software">Request new software</option>
          <option value="Request new hardware">Request new hardware</option>
          <option value="Request mobile device">Request mobile device</option>
          <option value="Get IT help">Get IT help</option> */}
        {/* </select>
        <label style={labelStyle}>Summary *</label>
        <input type="text" name="summary" value={formData.summary} onChange={handleChange} style={inputStyle} />
         </select> */}
        <label style={labelStyle}>Title *</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} style={inputStyle} />
        <label style={labelStyle}>Description *</label>
        <textarea name="description" value={formData.description} onChange={handleChange} rows="4" style={{ ...inputStyle, resize: 'none' }} />
      

  
        <label style={labelStyle}>Assignee</label>
        <select name="assignee" value={formData.assignee} onChange={handleChange} style={inputStyle}>
          <option value="sumit">Sumit Kumar</option>
       
        </select>

        {/* <label style={labelStyle}>Reporter</label>
        <select name="reporter" value={formData.reporter} onChange={handleChange} style={inputStyle}>
          <option value="Product-Manager">Product-Manager</option>
          <option value="ServiceDesk-Manager">ServiceDesk-Manager</option>
          <option value="Developer">Developer</option>
          <option value="ServiceDesk-Agent">ServiceDesk-Agent</option>
          <option value="Data-Developer">Data-Developer</option>
          <option value="Change-Manager">Change-Manager</option>
          <option value="Carly-Chief-Exec">Carly-Chief-Exec</option>
        </select>
        <label style={labelStyle}>Assignee</label>
        <select name="assignee" value={formData.assignee} onChange={handleChange} style={inputStyle}>
          <option value="Sammy-ServiceDesk">Sammy-ServiceDesk</option>
          <option value="Serena-ServiceDesk">Serena-ServiceDesk</option>
          <option value="Christy-ServiceDesk">Christy-ServiceDesk</option>
        </select>
        <label style={labelStyle}>Status</label>
        <select name="status" value={formData.status} onChange={handleChange} style={inputStyle}>
          <option value="WAITING FOR SUPPORT">WAITING FOR SUPPORT</option>
          <option value="WORK IN PROGRESS">WORK IN PROGRESS</option>
          <option value="WAITING FOR APPROVAL">WAITING FOR APPROVAL</option>
          <option value="UNDER REVIEW">UNDER REVIEW</option>
        </select> */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={buttonStyle} onClick={handleSubmit}>Create</button>
          <button style={{ ...buttonStyle, backgroundColor: '#d3d3d3', color: '#172b4d' }} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;