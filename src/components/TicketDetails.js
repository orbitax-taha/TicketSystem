import React from 'react';

const TicketDetails = ({ ticket, onClose }) => {
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

  const detailsContainerStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    width: '600px',
    maxHeight: '80vh',
    overflowY: 'auto'
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '5px'
  };

  const valueStyle = {
    fontSize: '14px',
    color: '#172b4d',
    marginBottom: '15px'
  };

  const buttonStyle = {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#d3d3d3',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={modalStyle}>
      <div style={detailsContainerStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>{ticket.summary}</h2>
        <div style={labelStyle}>Key</div>
        <div style={valueStyle}>{ticket.id}</div>
        <div style={labelStyle}>Type</div>
        <div style={valueStyle}>{ticket.type}</div>
        <div style={labelStyle}>Description</div>
        <div style={valueStyle}>{ticket.description || 'No description provided'}</div>
        <div style={labelStyle}>Reporter</div>
        <div style={valueStyle}>{ticket.reporter}</div>
        <div style={labelStyle}>Assignee</div>
        <div style={valueStyle}>{ticket.assignee}</div>
        <div style={labelStyle}>Status</div>
        <div style={valueStyle}>{ticket.status}</div>
        <div style={labelStyle}>Created</div>
        <div style={valueStyle}>{ticket.created}</div>
        <div style={labelStyle}>Time to Resolve</div>
        <div style={valueStyle}>{ticket.timeToResolve}</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={buttonStyle} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;