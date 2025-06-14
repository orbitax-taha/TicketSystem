// import React from 'react';

// const Header = ({ setShowTicketForm }) => {
//   const headerStyle = {
//     height : "40px",
//     backgroundColor: '#0052cc',
//     color: '#ffffff',
//     padding: '10px 20px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     position: 'fixed',
//     top: 0,
//     left: '250px',
//     right: 0,
//     zIndex: 1000
//   };

//   const navStyle = {
//     display: 'flex',
//     gap: '20px',
//     fontSize: '14px',
//     fontWeight: 'bold'
//   };

//   const navItemStyle = {
//     color: '#ffffff',
//     textDecoration: 'none',
//     padding: '5px 10px',
//     borderRadius: '4px',
//     backgroundColor: '#ffffff22',
//     cursor: 'pointer'
//   };

//   const userSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px'
//   };

//   const userIconStyle = {
//     width: '24px',
//     height: '24px',
//     borderRadius: '50%',
//     backgroundColor: '#ffffff',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '12px',
//     fontWeight: 'bold',
//     color: '#172b4d'
//   };

//   return (
//     <header style={headerStyle}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//         <div style={{ fontSize: '16px', fontWeight: 'bold' }}>OTS</div>
//         <nav style={navStyle}>
//           <div style={navItemStyle}>Your work</div>
//           <div style={navItemStyle}>Projects</div>
//           <div style={navItemStyle}>Filters</div>
//           <div style={navItemStyle}>Dashboards</div>
//           <div style={navItemStyle}>People</div>
//           <div style={navItemStyle}>Plans</div>
//           <div style={navItemStyle}>Apps</div>
//           <div style={{ ...navItemStyle, backgroundColor: '#ffffff', color: '#0052cc' }} onClick={() => setShowTicketForm(true)}>Create</div>
//         </nav>
//       </div>
//       <div style={userSectionStyle}>
//         <div style={{ position: 'relative' }}>
//           <svg style={{ width: '20px', height: '20px', color: '#ffffff' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <circle cx="12" cy="12" r="10"/>
//             <path d="M12 16c2.5 0 4-2 4-4s-1.5-4-4-4-4 2-4 4 1.5 4 4 4zm0 2c-3 0-5-2-5-4s2-4 5-4 5 2 5 4-2 4-5 4z"/>
//           </svg>
//           <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: '#de350b', color: '#ffffff', borderRadius: '50%', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>2</span>
//         </div>
//         <div style={userIconStyle}>A</div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';

const Header = ({ setShowTicketForm }) => {
  return (
    <>
      <style>
        {`
          .header {
            position: fixed;
            top: 0;
            left: 250px;
            right: 0;
            height: 60px;
            background: linear-gradient(to right, #0052cc, #003a8c);
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
          .header-logo {
            font-size: 16px;
            font-weight: bold;
          }
          .header-nav {
            display: flex;
            gap: 12px;
            align-items: center;
          }
          .nav-item {
           
            padding: 7px 13px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.2);
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.2s;
          }
          .nav-item:hover {
            background-color: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
          }
          .create-button {
            padding: 5px 10px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.3) ;
            color: #0052cc;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.2s;
          }
          .create-button:hover {
            background-color: #f0f0f0;
            transform: scale(1.05);
          }
          .search-container {
            margin-left:270px;
            position: relative;
            display: inline-block;
          }
          .search-input {
            padding: 7px 14px 7px 38px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 14px;
            width: 120px;
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .search-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          .search-input:focus {
            outline: none;
            border-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
          }
          .search-icon {
            position: absolute;
            left: 8px;
            top: 50%;
            transform: translateY(-50%);
            width: 16px;
            height: 16px;
            color: rgba(255, 255, 255, 0.7);
          }
          .user-section {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .notification-container {
            position: relative;
          }
          .notification-icon {
            width: 20px;
            height: 20px;
          }
          .notification-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            background-color: #de350b;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 10px;
            font-weight: bold;
          }
          .user-icon {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
            color: #172b4d;
            transition: box-shadow 0.2s;
          }
          .user-icon:hover {
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
          }
        `}
      </style>
      <header className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="header-logo">OTS</div>
          <nav className="header-nav">
            {['Your Work', 'Projects', 'Filters', 'Dashboards'].map((item) => (
              <div key={item} className="nav-item">
                {item}
              </div>
            ))}
            <div className="nav-item " onClick={() => setShowTicketForm(true)}>
              Create
            </div>
            {/* <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <svg
                className="search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div> */}
          </nav>
        </div>
        <div className="user-section">
          <div className="notification-container">
            {/* <svg
              className="notification-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16c2.5 0 4-2 4-4s-1.5-4-4-4-4 2-4 4 1.5 4 4 4zm0 2c-3 0-5-2-5-4s2-4 5-4 5 2 5 4-2 4-5 4z" />
            </svg> */}
            {/* <span className="notification-badge">2</span> */}
          </div>
          {/* <div className="user-icon">A</div> */}
        </div>
      </header>
    </>
  );
};

export default Header;