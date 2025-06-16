import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './LOGO.png'; // Import the logo image

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    projects: true,
    operations: true,
    knowledgeBase: false,
    reports: true,
    channelsPeople: false,
  });

  const location = useLocation(); // Get current route
  const loggedInUser = localStorage.getItem('username') || 'Guest'; // Get logged-in user's name

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
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
    fontFamily: 'Arial, sans-serif',
    maxHeight: '100vh',
    overflowY: 'auto',
  };

  const logoStyle = {
    width: '180px',
    height: '40px',
    marginBottom: '20px',
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
    transition: 'background-color 0.2s',
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
    transition: 'background-color 0.2s, transform 0.2s',
    textDecoration: 'none',
  };

  const activeMenuItemStyle = {
    ...menuItemStyle,
    backgroundColor: '#091e420f',
  };

  const iconStyle = {
    width: '16px',
    height: '16px',
    marginRight: '10px',
  };

  const userSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
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
    transition: 'box-shadow 0.2s',
  };

  const userInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const userNameStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
  };

  const userRoleStyle = {
    fontSize: '12px',
    color: '#5e6c84',
  };

  const menuItems = {
    projects: [
      // { path: '/dashboard', label: 'Status', icon: <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" /> },
      { path: '/dashboard', label: 'Overview', icon: <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" /> },
      { path: '/my-tickets', label: 'My Tickets', icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z" /> },
      { path: '/queues', label: 'Kanban', icon: <path d="M12 20V10M5 15l7-7 7 7M4 20h16" /> },
      // { path: '/incident', label: 'Incidents', icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6h6" /></> },
      // { path: '/problems', label: 'Problems', icon: <path d="M12 2v20M2 12h20" /> },
      { path: '/changes', label: 'History', icon: <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" /> },
    ],
    operations: [
      { path: '/alerts', label: 'Alerts', icon: <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zM12 15a3 3 0 100-6 3 3 0 000 6z" /> },
      { path: '/oncall', label: 'On-call', icon: <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 20c0-4 4-7 8-7s8 3 8 7" /> },
    ],
    reports: [
      { path: '/reports', label: 'Reports', icon: <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" /> },
    ],
  };

  return (
    <div style={sidebarStyle}>
      <div>
        <img src={Logo} style={logoStyle} alt="Orbitax System Private Limited" />
      </div>
      <div style={userSectionStyle}>
        <div style={userLogoStyle} className="user-logo">{loggedInUser.charAt(0).toUpperCase()}</div>
        <div style={userInfoStyle}>
          <div style={userNameStyle}>{loggedInUser}</div>
          <div style={userRoleStyle}>Admin</div>
        </div>
      </div>
      {['projects', 'operations', 'reports'].map((section) => (
        <div key={section}>
          <div style={titleStyle} onClick={() => toggleSection(section)}>
            {section.toUpperCase()}
            <svg
              style={{
                width: '16px',
                height: '16px',
                transform: openSections[section] ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          {openSections[section] && (
            <div>
              {menuItems[section].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={location.pathname === item.path ? activeMenuItemStyle : menuItemStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#dfe1e6';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      location.pathname === item.path ? '#091e420f' : 'transparent';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {item.icon}
                  </svg>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;