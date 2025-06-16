// import React, { useState } from 'react';
// import Sidebar from '../../components/Sidebar';
// import Header from '../../components/Header';
// import CreateTicket from '../../components/CreateTicket';

// const Reports = ({ setCurrentPage }) => {
//   const [showTicketForm, setShowTicketForm] = useState(false);

//   const handleCreateTicket = (newTicket) => {
//     // Since this page is for upcoming features, we won't handle ticket creation logic here
//     // But we'll keep the function to maintain consistency with CreateTicket component
//     setShowTicketForm(false);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="reports" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         <div style={{ 
//           padding: '20px', 
//           textAlign: 'center', 
//           color: '#172b4d',
//           marginTop: '60px' // To account for the fixed header
//         }}>
//           <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' , marginLeft:"250px" }}>
//             Reports - Upcoming Features
//           </h2>
//           <p style={{ fontSize: '16px', color: '#5e6c84', marginLeft:"250px" }}>
//             This section is under development. Stay tuned for reporting and analytics features!
//           </p>
//         </div>
//         {showTicketForm && (
//           <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Reports;

// import React, { useState, useEffect } from 'react';
// import Sidebar from '../../components/Sidebar';
// import Header from '../../components/Header';
// import CreateTicket from '../../components/CreateTicket';
// import { Line, Pie, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js';
// import axiosInstance from '../../api/axiosInstance';

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler);

// const Reports = ({ setCurrentPage , logout}) => {
//   const [showTicketForm, setShowTicketForm] = useState(false);
//   const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch tickets on component mount
//   useEffect(() => {
//     const fetchTickets = async () => {
//       try {
//         const response = await axiosInstance.get('/tickets');
//         console.log('API Response:', response.data);
//         const ticketData = Array.isArray(response.data.data) ? response.data.data : response.data;
//         setTickets(Array.isArray(ticketData) ? ticketData : []);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch tickets. Please try again later.');
//         setLoading(false);
//       }
//     };
//     fetchTickets();
//   }, []);

//   // Handle ticket creation (placeholder for consistency)
//   const handleCreateTicket = (newTicket) => {
//     setShowTicketForm(false);
//   };

//   // Process data for Line Graph (Monthly Tickets in 2025)
//   const monthlyTicketData = () => {
//     const months = Array(12).fill(0);
//     if (Array.isArray(tickets)) {
//       tickets.forEach((ticket) => {
//         const ticketDate = new Date(ticket.createdAt);
//         if (ticketDate.getFullYear() === 2025) {
//           const month = ticketDate.getMonth();
//           months[month] += 1;
//         }
//       });
//     }

//     return {
//       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//       datasets: [
//         {
//           label: 'Tickets per Month (2025)',
//           data: months,
//           fill: true,
//           backgroundColor: (context) => {
//             const chart = context.chart;
//             const { ctx, chartArea } = chart;
//             if (!chartArea) return;
//             const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
//             gradient.addColorStop(0, 'rgba(23, 43, 77, 0.1)');
//             gradient.addColorStop(1, 'rgba(23, 43, 77, 0.5)');
//             return gradient;
//           },
//           borderColor: '#172b4d',
//           borderWidth: 2,
//           pointBackgroundColor: '#172b4d',
//           pointBorderColor: '#fff',
//           pointHoverBackgroundColor: '#fff',
//           pointHoverBorderColor: '#172b4d',
//           tension: 0.3,
//         },
//       ],
//     };
//   };

//   // Process data for Pie Chart (This Week's Ticket Status: June 9 - June 15, 2025)
//   // const weeklyTicketStatusData = () => {
//   //   const startOfWeek = new Date('2025-06-09T00:00:00Z');
//   //   const endOfWeek = new Date('2025-06-15T23:59:59Z');
//   //   const statusCounts = {
//   //     Open: 0,
//   //     'Work in Progress': 0,
//   //     'Under Review': 0,
//   //   };

//   //   if (Array.isArray(tickets)) {
//   //     tickets.forEach((ticket) => {
//   //       const ticketDate = new Date(ticket.createdAt);
//   //       if (ticketDate >= startOfWeek && ticketDate <= endOfWeek) {
//   //         const status = ticket.status || 'Unknown';
//   //         if (status in statusCounts) {
//   //           statusCounts[status] += 1;
//   //         } else {
//   //           statusCounts['Unknown'] = (statusCounts['Unknown'] || 0) + 1;
//   //         }
//   //       }
//   //     });
//   //   }

//   //   const labels = Object.keys(statusCounts).filter((key) => statusCounts[key] > 0);
//   //   const data = Object.values(statusCounts).filter((value) => value > 0);
//   //   const backgroundColors = labels.length === 0
//   //     ? ['#dfe1e6']
//   //     : ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

//   //   return {
//   //     labels: labels.length ? labels : ['No Data'],
//   //     datasets: [
//   //       {
//   //         label: 'Ticket Status',
//   //         data: data.length ? data : [1],
//   //         backgroundColor: backgroundColors,
//   //         borderColor: '#fff',
//   //         borderWidth: 2,
//   //         hoverOffset: 2,
//   //       },
//   //     ],
//   //   };
//   // };
//     // Process data for Pie Chart (This Week's Ticket Status: June 9 - June 15, 2025)
//   const weeklyTicketStatusData = () => {
//     const startOfWeek = new Date('2025-06-09T00:00:00Z');
//     const endOfWeek = new Date('2025-06-15T23:59:59Z');
    
//     const statusCounts = {
//       OPEN: 0,
//       CLOSED: 0,
//       RESOLVED: 0,
//       IN_PROGRESS: 0,
//       WAITING_FOR_SUPPORT: 0,
//     };

//     if (Array.isArray(tickets)) {
//       tickets.forEach((ticket) => {
//         const ticketDate = new Date(ticket.createdAt);
//         const status = (ticket.status || '').toUpperCase(); // Normalize status to uppercase
//         if (ticketDate >= startOfWeek && ticketDate <= endOfWeek) {
//           if (status in statusCounts) {
//             statusCounts[status] += 1;
//           } else {
//             statusCounts[status] = 1;
//           }
//         }
//       });
//     }

//     const labels = Object.keys(statusCounts).filter((key) => statusCounts[key] > 0);
//     const data = labels.map((key) => statusCounts[key]);
//     const backgroundColors = [
//       '#FF6384',  // OPEN
//       '#36A2EB',  // CLOSED
//       '#FFCE56',  // RESOLVED
//       '#4BC0C0',  // IN_PROGRESS
//       '#9966FF',  // WAITING_FOR_SUPPORT
//     ];

//     return {
//       labels: labels.length ? labels : ['No Data'],
//       datasets: [
//         {
//           label: 'Ticket Status',
//           data: data.length ? data : [1],
//           backgroundColor: backgroundColors.slice(0, labels.length),
//           borderColor: '#fff',
//           borderWidth: 2,
//           hoverOffset: 2,
//         },
//       ],
//     };
//   };


//   // Process data for Bar Graph (Daily Tickets, Last 7 Days: June 9 - June 15, 2025)
//   const dailyTicketData = () => {
//     const days = Array(7).fill(0);
//     const labels = [];
//     const startDate = new Date('2025-06-09T00:00:00Z');

//     for (let i = 0; i < 7; i++) {
//       const date = new Date(startDate);
//       date.setDate(startDate.getDate() + i);
//       labels.push(`${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`);
//     }

//     if (Array.isArray(tickets)) {
//       tickets.forEach((ticket) => {
//         const ticketDate = new Date(ticket.createdAt);
//         const startOfPeriod = new Date('2025-06-09T00:00:00Z');
//         const endOfPeriod = new Date('2025-06-15T23:59:59Z');
//         if (ticketDate >= startOfPeriod && ticketDate <= endOfPeriod) {
//           const dayIndex = Math.floor((ticketDate - startOfPeriod) / (1000 * 60 * 60 * 24));
//           days[dayIndex] += 1;
//         }
//       });
//     }

//     return {
//       labels,
//       datasets: [
//         {
//           label: 'Tickets per Day',
//           data: days,
//           backgroundColor: (context) => {
//             const chart = context.chart;
//             const { ctx, chartArea } = chart;
//             if (!chartArea) return;
//             const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
//             gradient.addColorStop(0, 'rgba(54, 162, 235, 0.6)');
//             gradient.addColorStop(1, 'rgba(54, 162, 235, 1)');
//             return gradient;
//           },
//           borderColor: '#36A2EB',
//           borderWidth: 1,
//           borderRadius: 5,
//           hoverBackgroundColor: '#36A2EB',
//         },
//       ],
//     };
//   };

//   // Chart options with enhanced styling
//   const lineOptions = {
//     responsive: true,
//     maintainAspectRatio: false, // Allow height to be controlled
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: { font: { size: 14, family: 'Arial', weight: 'bold' }, color: '#172b4d' },
//       },
//       title: {
//         display: true,
//         text: 'Monthly Ticket Count (2025)',
//         font: { size: 18, family: 'Arial', weight: 'bold' },
//         color: '#172b4d',
//         padding: { top: 10, bottom: 20 },
//       },
//       tooltip: {
//         backgroundColor: '#172b4d',
//         titleFont: { size: 14 },
//         bodyFont: { size: 12 },
//         padding: 10,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: { display: true, text: 'Number of Tickets', font: { size: 14 }, color: '#172b4d' },
//         grid: { color: 'rgba(0, 0, 0, 0.05)' },
//         ticks: { color: '#5e6c84', font: { size: 12 } },
//       },
//       x: {
//         title: { display: true, text: 'Month', font: { size: 14 }, color: '#172b4d' },
//         grid: { display: false },
//         ticks: { color: '#5e6c84', font: { size: 12 } },
//       },
//     },
//   };

//   const pieOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: { font: { size: 14, family: 'Arial', weight: 'bold' }, color: '#172b4d' },
//       },
//       title: {
//         display: true,
//         text: "This Week's Ticket Status (June 9 - June 15, 2025)",
//         font: { size: 16, family: 'Arial', weight: 'bold' },
//         color: '#172b4d',
//         padding: { top: 10, bottom: 20 },
//       },
//       tooltip: {
//         backgroundColor: '#172b4d',
//         titleFont: { size: 14 },
//         bodyFont: { size: 12 },
//         padding: 10,
//       },
//     },
//   };

//   const barOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: { font: { size: 14, family: 'Arial', weight: 'bold' }, color: '#172b4d' },
//       },
//       title: {
//         display: true,
//         text: 'Daily Ticket Count (Last 7 Days)',
//         font: { size: 16, family: 'Arial', weight: 'bold' },
//         color: '#172b4d',
//         padding: { top: 10, bottom: 20 },
//       },
//       tooltip: {
//         backgroundColor: '#172b4d',
//         titleFont: { size: 14 },
//         bodyFont: { size: 12 },
//         padding: 10,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: { display: true, text: 'Number of Tickets', font: { size: 14 }, color: '#172b4d' },
//         grid: { color: 'rgba(0, 0, 0, 0.05)' },
//         ticks: { color: '#5e6c84', font: { size: 12 } },
//       },
//       x: {
//         title: { display: true, text: 'Day', font: { size: 14 }, color: '#172b4d' },
//         grid: { display: false },
//         ticks: { color: '#5e6c84', font: { size: 12 } },
//       },
//     },
//   };

//   // Styles for chart containers
//   const chartContainerStyle = {
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     boxShadow: ' 3px 3px 3px 3px rgba(0, 0, 0, 0.29)',
//     padding: '20px',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//     marginBottom: '20px',
//   };

//   const chartContainerHoverStyle = {
//     transform: 'scale(0.95)',
//     boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
//   };

//   return (
//     <div style={{ display: 'flex' , marginLeft:"25px"}}>
//         <Header
//         setCurrentPage={setCurrentPage}
//         setShowTicketForm={() => {}}
//         logout={logout}
//       />
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="reports" />
//       <div style={{ flex: 1, marginLeft: '210px', width: 'calc(100vw - 210px)' }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         <div style={{ padding: '20px', marginTop: '60px', width: '100%', boxSizing: 'border-box' }}>
//           {loading ? (
//             <p>Loading charts...</p>
//           ) : error ? (
//             <p style={{ color: 'red' }}>{error}</p>
//           ) : (
//             <div style={{ width: '100%' }}>
//               {/* Row for Bar Chart and Pie Chart */}
//               <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', width: '100%' }}>
//                 {/* Bar Graph: Daily Tickets */}
//                 <div
//                   style={{ ...chartContainerStyle, flex: '2', width: '60%' }}
//                 //   onMouseEnter={(e) => Object.assign(e.currentTarget.style, chartContainerHoverStyle)}
//                 //   onMouseLeave={(e) => Object.assign(e.currentTarget.style, chartContainerStyle)}
//                 >
//                   <Bar data={dailyTicketData()} options={barOptions} />
//                 </div>

//                 {/* Pie Chart: This Week's Ticket Status */}
//                 <div
//                   style={{ ...chartContainerStyle, flex: '1', width: '40%' }}
//                 //   onMouseEnter={(e) => Object.assign(e.currentTarget.style, chartContainerHoverStyle)}
//                 //   onMouseLeave={(e) => Object.assign(e.currentTarget.style, chartContainerStyle)}
//                 >
//                   <Pie data={weeklyTicketStatusData()} options={pieOptions} />
//                 </div>
//               </div>

//               {/* Line Graph: Monthly Tickets (Full Width, Reduced Height) */}
//               <div
//                 style={{ ...chartContainerStyle, width: '100%', height: '300px' }}
//                 // onMouseEnter={(e) => Object.assign(e.currentTarget.style, chartContainerHoverStyle)}
//                 // onMouseLeave={(e) => Object.assign(e.currentTarget.style, chartContainerStyle)}
//               >
//                 <Line data={monthlyTicketData()} options={lineOptions} height={300} />
//               </div>
//             </div>
//           )}
//         </div>
//         {showTicketForm && (
//           <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Reports;



import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CreateTicket from '../../components/CreateTicket';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import axiosInstance from '../../api/axiosInstance';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler);

const Reports = ({ setCurrentPage, logout }) => {
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tickets on component mount
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axiosInstance.get('/tickets');
        console.log('API Response:', response.data);
        const ticketData = Array.isArray(response.data.data) ? response.data.data : [];
        setTickets(ticketData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tickets. Please try again later.');
        setLoading(false);
        console.error('Error fetching tickets:', err);
      }
    };
    fetchTickets();
  }, []);

  // Handle ticket creation (placeholder for consistency)
  const handleCreateTicket = (newTicket) => {
    setShowTicketForm(false);
  };

  // Process data for Line Graph (Monthly Tickets in 2025)
  const monthlyTicketData = () => {
    const months = Array(12).fill(0);
    if (Array.isArray(tickets)) {
      tickets.forEach((ticket) => {
        const ticketDate = new Date(ticket.createdAt);
        if (ticketDate.getFullYear() === 2025) {
          const month = ticketDate.getMonth();
          months[month] += 1;
        }
      });
    }

    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Tickets per Month (2025)',
          data: months,
          fill: true,
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return;
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(23, 43, 77, 0.1)');
            gradient.addColorStop(1, 'rgba(23, 43, 77, 0.5)');
            return gradient;
          },
          borderColor: '#172b4d',
          borderWidth: 2,
          pointBackgroundColor: '#172b4d',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#172b4d',
          tension: 0.3,
        },
      ],
    };
  };

  // Process data for Pie Chart (This Week's Ticket Status: June 16 - June 22, 2025)
  const weeklyTicketStatusData = () => {
    const startOfWeek = new Date('2025-06-16T00:00:00Z'); // Start of June 16
    const endOfWeek = new Date('2025-06-22T23:59:59Z');   // End of June 22

    const statusCounts = {
      OPEN: 0,
      CLOSED: 0,
      RESOLVED: 0,
      IN_PROGRESS: 0,
      WAITING_FOR_SUPPORT: 0,
    };

    if (Array.isArray(tickets)) {
      tickets.forEach((ticket) => {
        const ticketDate = new Date(ticket.createdAt);
        const status = (ticket.status || '').toUpperCase().replace('WAITING_FOR_SUPPORT', 'WAITING_FOR_SUPPORT'); // Normalize status
        if (ticketDate >= startOfWeek && ticketDate <= endOfWeek) {
          if (status in statusCounts) {
            statusCounts[status] += 1;
          } else {
            statusCounts[status] = 1; // Dynamically add new statuses
          }
        }
      });
    }

    const labels = Object.keys(statusCounts).filter((key) => statusCounts[key] > 0);
    const data = labels.map((key) => statusCounts[key]);
    const backgroundColors = [
      '#FF6384',  // OPEN
      '#36A2EB',  // CLOSED
      '#FFCE56',  // RESOLVED
      '#4BC0C0',  // IN_PROGRESS
      '#9966FF',  // WAITING_FOR_SUPPORT
    ];

    return {
      labels: labels.length ? labels : ['No Data'],
      datasets: [
        {
          label: 'Ticket Status',
          data: data.length ? data : [1],
          backgroundColor: labels.length ? backgroundColors.slice(0, labels.length) : ['#dfe1e6'],
          borderColor: '#fff',
          borderWidth: 2,
          hoverOffset: 2,
        },
      ],
    };
  };

  // Process data for Bar Graph (Daily Tickets, Last 7 Days: June 16 - June 22, 2025)
  const dailyTicketData = () => {
    const days = Array(7).fill(0);
    const labels = [];
    const startDate = new Date('2025-06-16T00:00:00Z'); // Start of June 16

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      labels.push(`${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`);
    }

    if (Array.isArray(tickets)) {
      tickets.forEach((ticket) => {
        const ticketDate = new Date(ticket.createdAt);
        const startOfPeriod = new Date('2025-06-16T00:00:00Z');
        const endOfPeriod = new Date('2025-06-22T23:59:59Z');
        if (ticketDate >= startOfPeriod && ticketDate <= endOfPeriod) {
          const dayIndex = Math.floor((ticketDate - startOfPeriod) / (1000 * 60 * 60 * 24));
          if (dayIndex >= 0 && dayIndex < 7) {
            days[dayIndex] += 1;
          }
        }
      });
    }

    return {
      labels,
      datasets: [
        {
          label: 'Tickets per Day',
          data: days,
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return;
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(54, 162, 235, 0.6)');
            gradient.addColorStop(1, 'rgba(54, 162, 235, 1)');
            return gradient;
          },
          borderColor: '#36A2EB',
          borderWidth: 1,
          borderRadius: 5,
          hoverBackgroundColor: '#36A2EB',
        },
      ],
    };
  };

  // Chart options with enhanced styling
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { font: { size: 14, family: 'Arial', weight: 'bold' }, color: '#172b4d' },
      },
      title: {
        display: true,
        text: 'Monthly Ticket Count (2025)',
        font: { size: 18, family: 'Arial', weight: 'bold' },
        color: '#172b4d',
        padding: { top: 10, bottom: 20 },
      },
      tooltip: {
        backgroundColor: '#172b4d',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Number of Tickets', font: { size: 14 }, color: '#172b4d' },
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: { color: '#5e6c84', font: { size: 12 } },
      },
      x: {
        title: { display: true, text: 'Month', font: { size: 14 }, color: '#172b4d' },
        grid: { display: false },
        ticks: { color: '#5e6c84', font: { size: 12 } },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { font: { size: 14, family: 'Arial', weight: 'bold' }, color: '#172b4d' },
      },
      title: {
        display: true,
        text: "This Week's Ticket Status (June 16 - June 22, 2025)",
        font: { size: 16, family: 'Arial', weight: 'bold' },
        color: '#172b4d',
        padding: { top: 10, bottom: 20 },
      },
      tooltip: {
        backgroundColor: '#172b4d',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
      },
    },
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { font: { size: 14, family: 'Arial', weight: 'bold' }, color: '#172b4d' },
      },
      title: {
        display: true,
        text: 'Daily Ticket Count (June 16 - June 22, 2025)',
        font: { size: 16, family: 'Arial', weight: 'bold' },
        color: '#172b4d',
        padding: { top: 10, bottom: 20 },
      },
      tooltip: {
        backgroundColor: '#172b4d',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Number of Tickets', font: { size: 14 }, color: '#172b4d' },
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: { color: '#5e6c84', font: { size: 12 } },
      },
      x: {
        title: { display: true, text: 'Day', font: { size: 14 }, color: '#172b4d' },
        grid: { display: false },
        ticks: { color: '#5e6c84', font: { size: 12 } },
      },
    },
  };

  // Styles for chart containers
  const chartContainerStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.29)',
    padding: '20px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    marginBottom: '20px',
  };

  return (
    <div style={{ display: 'flex', marginLeft: '25px' }}>
      <Header setCurrentPage={setCurrentPage} setShowTicketForm={() => {}} logout={logout} />
      <Sidebar setCurrentPage={setCurrentPage} currentPage="reports" />
      <div style={{ flex: 1, marginLeft: '210px', width: 'calc(100vw - 210px)' }}>
        <Header setShowTicketForm={setShowTicketForm} />
        <div style={{ padding: '20px', marginTop: '60px', width: '100%', boxSizing: 'border-box' }}>
          {loading ? (
            <p>Loading charts...</p>
          ) : error ? (
            <p style={{ color: 'red' }}>{error}</p>
          ) : (
            <div style={{ width: '100%' }}>
              {/* Row for Bar Chart and Pie Chart */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', width: '100%' }}>
                {/* Bar Graph: Daily Tickets */}
                <div style={{ ...chartContainerStyle, flex: '2', width: '60%' }}>
                  <Bar data={dailyTicketData()} options={barOptions} />
                </div>

                {/* Pie Chart: This Week's Ticket Status */}
                <div style={{ ...chartContainerStyle, flex: '1', width: '40%' }}>
                  <Pie data={weeklyTicketStatusData()} options={pieOptions} />
                </div>
              </div>

              {/* Line Graph: Monthly Tickets (Full Width, Reduced Height) */}
              <div style={{ ...chartContainerStyle, width: '100%', height: '300px' }}>
                <Line data={monthlyTicketData()} options={lineOptions} height={300} />
              </div>
            </div>
          )}
        </div>
        {showTicketForm && (
          <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
        )}
      </div>
    </div>
  );
};

export default Reports;