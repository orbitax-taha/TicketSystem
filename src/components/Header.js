

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Header = ({ setShowTicketForm }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     navigate('/');
//   };

//   return (
//     <>
//       <style>
//         {`
//           .header {
//             position: fixed;
//             top: 0;
//             left: 210px;
//             right: 0;
//             height: 60px;
//             background: linear-gradient(to right, #0052cc, #003a8c);
//             color: white;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             padding: 0 20px;
//             z-index: 1000;
//             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//           }
//           .header-logo {
//             font-size: 16px;
//             font-weight: bold;
//           }
//           .header-nav {
//             display: flex;
//             gap: 12px;
//             align-items: center;
//           }
//           .nav-item {
//             padding: 7px 13px;
//             border-radius: 4px;
//             background-color: rgba(255, 255, 255, 0.2);
//             font-size: 14px;
//             font-weight: bold;
//             cursor: pointer;
//             transition: background-color 0.2s, transform 0.2s;
//           }
//           .nav-item:hover {
//             background-color: rgba(255, 255, 255, 0.3);
//             transform: scale(1.1);
//           }
//           .create-button {
//             padding: 7px 13px;
//             border-radius: 4px;
//             background-color: rgba(255, 255, 255, 0.2);
//             color: white;
//             font-size: 14px;
//             font-weight: bold;
//             cursor: pointer;
//             transition: background-color 0.2s, transform 0.2s;
//           }
//           .create-button:hover {
//             background-color: rgba(255, 255, 255, 0.3);
//             transform: scale(1.1);
//           }
//           .logout-button {
//             padding: 7px 13px;
//             border-radius: 4px;
//             background-color: rgba(255, 255, 255, 0.2);
//             color: white;
//             font-size: 14px;
//             font-weight: bold;
//             cursor: pointer;
//             transition: background-color 0.2s, transform 0.2s;
//           }
//           .logout-button:hover {
//             background-color: rgba(255, 255, 255, 0.3);
//             transform: scale(1.1);
//           }
//           .user-section {
//             display: flex;
//             align-items: center;
//             gap: 10px;
//           }
//           .user-icon {
//             width: 24px;
//             height: 24px;
//             border-radius: 50%;
//             background-color: white;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             font-size: 12px;
//             font-weight: bold;
//             color: #172b4d;
//             transition: box-shadow 0.2s;
//           }
//           .user-icon:hover {
//             box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
//           }
//         `}
//       </style>
//       <header className="header">
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div className="header-logo">OTS</div>
//           <nav className="header-nav">
//             {['Your Work', 'Projects', 'Filters', 'Dashboards'].map((item) => (
//               <div key={item} className="nav-item">
//                 {item}
//               </div>
//             ))}
//             <div className="create-button" onClick={() => setShowTicketForm(true)}>
//               Create
//             </div>
//           </nav>
//         </div>
//         <div className="user-section">
//           <div className="user-icon">A</div>
//           <div className="logout-button" onClick={handleLogout}>
//             Logout
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ setShowTicketForm }) => {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem('username') || 'Guest'; // Get logged-in user's name

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <>
      <style>
        {`
          .header {
            margin-left:40px;
            position: fixed;
            top: 0;
            left: 210px;
            right: 0;
            height: 60px;
            background: linear-gradient(to right, #0052cc, #003a8c);
            color: white;
            display: flex;
            align-items: center;
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
            padding: 7px 13px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.2s;
          }
          .create-button:hover {
            background-color: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
          }
          .logout-button {
            padding: 7px 13px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.2s;
          }
          .logout-button:hover {
            background-color: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
          }
          .user-section {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .user-icon {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: bold;
            color: #172b4d;
            transition: box-shadow 0.2s;
          }
          .user-icon:hover {
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
          }
          .header-left {
            display: flex;
            align-items: center;
            gap: 20px;
            flex: 1; /* Pushes user-section to the right */
          }
        `}
      </style>
      <header className="header">
        <div className="header-left">
          <div className="header-logo">OTS</div>
          <nav className="header-nav">
            {['Your Work', 'Projects', 'Filters', 'Dashboards'].map((item) => (
              <div key={item} className="nav-item">
                {item}
              </div>
            ))}
            <div className="create-button" onClick={() => setShowTicketForm(true)}>
              Create
            </div>
          </nav>
        </div>
        <div className="user-section">
          <div className="user-icon">{loggedInUser.charAt(0).toUpperCase()}</div>
          <div className="logout-button" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;