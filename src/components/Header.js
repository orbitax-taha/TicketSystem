import React from 'react';

const Header = ({ setShowTicketForm }) => {
  const headerStyle = {
    backgroundColor: '#0052cc',
    color: '#ffffff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: '250px',
    right: 0,
    zIndex: 1000
  };

  const navStyle = {
    display: 'flex',
    gap: '20px',
    fontSize: '14px',
    fontWeight: 'bold'
  };

  const navItemStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    backgroundColor: '#ffffff22',
    cursor: 'pointer'
  };

  const userSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const userIconStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#172b4d'
  };

  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>+ Jira Service Management</div>
        <nav style={navStyle}>
          <div style={navItemStyle}>Your work</div>
          <div style={navItemStyle}>Projects</div>
          <div style={navItemStyle}>Filters</div>
          <div style={navItemStyle}>Dashboards</div>
          <div style={navItemStyle}>People</div>
          <div style={navItemStyle}>Plans</div>
          <div style={navItemStyle}>Apps</div>
          <div style={{ ...navItemStyle, backgroundColor: '#ffffff', color: '#0052cc' }} onClick={() => setShowTicketForm(true)}>Create</div>
        </nav>
      </div>
      <div style={userSectionStyle}>
        <div style={{ position: 'relative' }}>
          <svg style={{ width: '20px', height: '20px', color: '#ffffff' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16c2.5 0 4-2 4-4s-1.5-4-4-4-4 2-4 4 1.5 4 4 4zm0 2c-3 0-5-2-5-4s2-4 5-4 5 2 5 4-2 4-5 4z"/>
          </svg>
          <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: '#de350b', color: '#ffffff', borderRadius: '50%', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>2</span>
        </div>
        <div style={userIconStyle}>A</div>
      </div>
    </header>
  );
};

export default Header;