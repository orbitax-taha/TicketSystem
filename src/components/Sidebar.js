import React, { useState } from 'react';
import Logo from './LOGO.png'; // Import the logo image

const Sidebar = ({ setCurrentPage, currentPage }) => {
  const [openSections, setOpenSections] = useState({
    projects: true, // Ensures "PROJECTS" is open by default
    operations: false,
    knowledgeBase: false,
    reports: false,
    channelsPeople: false
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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

  const logoStyle = {
    width: '180px',
    height: '40px',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '10px',
    padding: '8px 10px',
    backgroundColor: '#f4f5f7',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
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
    marginBottom: '5px',
    transition: 'background-color 0.2s, transform 0.2s'
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

  const userSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'transform 0.2s'
  };

  const userLogoStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#172b4d',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'box-shadow 0.2s'
  };

  const userInfoStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const userNameStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d'
  };

  const userRoleStyle = {
    fontSize: '12px',
    color: '#5e6c84'
  };

  return (
    <div style={sidebarStyle}>
      <div>
        <img src={Logo} style={logoStyle} alt="Orbitax System Private Limited" />
      </div>
      <div
        style={userSectionStyle}
      >
        <div style={userLogoStyle} className="user-logo">A</div>
        <div style={userInfoStyle}>
          <div style={userNameStyle}>Sumit Kumar</div>
          <div style={userRoleStyle}>Admin</div>
        </div>
      </div>
      <div>
        <div style={titleStyle} onClick={() => toggleSection('projects')}>
          PROJECTS
          <svg style={{ width: '16px', height: '16px', transform: openSections.projects ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        {openSections.projects && (
          <div>
            <div
              style={currentPage === 'dashboard' ? activeMenuItemStyle : menuItemStyle}
              onClick={() => setCurrentPage('dashboard')}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = currentPage === 'dashboard' ? '#091e420f' : 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"/>
              </svg>
              All open tickets
            </div>
            <div
              style={currentPage === 'myTickets' ? activeMenuItemStyle : menuItemStyle}
              onClick={() => setCurrentPage('myTickets')}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = currentPage === 'myTickets' ? '#091e420f' : 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z"/>
              </svg>
              My Tickets
            </div>
            <div
              style={menuItemStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M12 3v18"/>
              </svg>
              Queues
            </div>
            <div
              style={menuItemStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6h6"/>
              </svg>
              Incidents
            </div>
            <div
              style={menuItemStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M2 12h20"/>
              </svg>
              Problems
            </div>
            <div
              style={menuItemStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Changes
            </div>
          </div>
        )}
      </div>
      <div>
        <div style={titleStyle} onClick={() => toggleSection('operations')}>
          OPERATIONS
          <svg style={{ width: '16px', height: '16px', transform: openSections.operations ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        {openSections.operations && (
          <div>
            <div
              style={menuItemStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z"/>
              </svg>
              Alerts
            </div>
            <div
              style={menuItemStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5v14"/>
              </svg>
              On-call
            </div>
          </div>
        )}
      </div>
      <div>
        <div style={titleStyle} onClick={() => toggleSection('knowledgeBase')}>
          KNOWLEDGE BASE
          <svg style={{ width: '16px', height: '16px', transform: openSections.knowledgeBase ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        {openSections.knowledgeBase && (
          <div>
            {/* Add menu items here if needed */}
          </div>
        )}
      </div>
      <div>
        <div style={titleStyle} onClick={() => toggleSection('reports')}>
          REPORTS
          <svg style={{ width: '16px', height: '16px', transform: openSections.reports ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        {openSections.reports && (
          <div>
            {/* Add menu items here if needed */}
          </div>
        )}
      </div>
      <div>
        <div style={titleStyle} onClick={() => toggleSection('channelsPeople')}>
          CHANNELS & PEOPLE
          <svg style={{ width: '16px', height: '16px', transform: openSections.channelsPeople ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        {openSections.channelsPeople && (
          <div>
            {/* <div
              style={menuItemStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z"/>
              </svg>
              Your project
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;