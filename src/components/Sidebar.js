import React from 'react';

const Sidebar = ({ setCurrentPage, currentPage }) => {
  const sidebarStyle = {
    width: '210px',
    backgroundColor: '#f4f5f7',
    borderRight: '1px solid #dfe1e6',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '20px'
  };

  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    cursor: 'pointer',
    borderRadius: '4px',
    marginBottom: '5px'
  };

  const activeMenuItemStyle = {
    ...menuItemStyle,
    backgroundColor: '#091e420f'
  };

  const iconStyle = {
    width: '16px',
    height: '16px',
    marginRight: '10px'
  };

  return (
    <div style={sidebarStyle}>
      <div style={titleStyle}>IT Service Desk</div>
      <div style={titleStyle}>PROJECTS</div>
      <div style={currentPage === 'dashboard' ? activeMenuItemStyle : menuItemStyle} onClick={() => setCurrentPage('dashboard')}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"/>
        </svg>
        All open tickets
      </div>
      <div style={currentPage === 'myTickets' ? activeMenuItemStyle : menuItemStyle} onClick={() => setCurrentPage('myTickets')}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z"/>
        </svg>
        My Tickets
      </div>
      <div style={menuItemStyle}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M12 3v18"/>
        </svg>
        Queues
      </div>
      <div style={menuItemStyle}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6h6"/>
        </svg>
        Incidents
      </div>
      <div style={menuItemStyle}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20"/>
        </svg>
        Problems
      </div>
      <div style={menuItemStyle}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Changes
      </div>
      <div style={titleStyle}>OPERATIONS</div>
      <div style={menuItemStyle}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z"/>
        </svg>
        Alerts
      </div>
      <div style={menuItemStyle}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5v14"/>
        </svg>
        On-call
      </div>
      <div style={titleStyle}>KNOWLEDGE BASE</div>
      <div style={titleStyle}>REPORTS</div>
      <div style={titleStyle}>CHANNELS & PEOPLE</div>
      <div style={menuItemStyle}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z"/>
        </svg>
        Your project
      </div>
    </div>
  );
};

export default Sidebar;