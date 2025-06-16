// import React, { useState } from 'react';
// import Sidebar from '../../components/Sidebar';
// import Header from '../../components/Header';
// import CreateTicket from '../../components/CreateTicket';

// const Oncall = ({ setCurrentPage }) => {
//   const [showTicketForm, setShowTicketForm] = useState(false);

//   const handleCreateTicket = (newTicket) => {
//     // Since this page is for upcoming features, we won't handle ticket creation logic here
//     // But we'll keep the function to maintain consistency with CreateTicket component
//     setShowTicketForm(false);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="oncall" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         <div style={{ 
//           padding: '20px', 
//           textAlign: 'center', 
//           color: '#172b4d',
//           marginTop: '60px' // To account for the fixed header
//         }}>
//           <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' , marginLeft:"200px" }}>
//             On-Call - Upcoming Features
//           </h2>
//           <p style={{ fontSize: '16px', color: '#5e6c84' , marginLeft:"200px"}}>
//             This section is under development. Stay tuned for on-call scheduling and management features!
//           </p>
//         </div>
//         {showTicketForm && (
//           <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Oncall;



// import React, { useState } from 'react';
// import Sidebar from '../../components/Sidebar';
// import Header from '../../components/Header';

// const Oncall = ({ setCurrentPage, logout }) => {
//   const [showChat, setShowChat] = useState(false);
//   const [userMessage, setUserMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const predefinedAnswers = {
//     "what is on-call": "On-call is a system for managing emergency support shifts.",
//     "how to raise a ticket": "Click 'Create Ticket' from the sidebar to raise a new ticket.",
//     "when will on-call be live": "This feature is currently under development. Stay tuned!",
//   };

//   const handleSendMessage = () => {
//     if (!userMessage.trim()) return;
//     const userText = userMessage.trim().toLowerCase();
//     const botReply = predefinedAnswers[userText] || "Sorry, I don't have an answer to that yet.";

//     setChatHistory((prev) => [
//       ...prev,
//       { sender: 'user', text: userMessage },
//       { sender: 'bot', text: botReply },
//     ]);
//     setUserMessage('');
//   };

//   // Set current page correctly to make sidebar highlight work
//   React.useEffect(() => {
//     setCurrentPage('oncall');
//   }, [setCurrentPage]);

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       {/* Sidebar receives currentPage */}
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="oncall" />
      
//       <div style={{ flex: 1, position: 'relative' }}>
//         <Header setCurrentPage={setCurrentPage} logout={logout} />

//         <div style={{
//           height: 'calc(100vh - 60px)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           textAlign: 'center',
//         }}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
//             alt="Chatbot"
//             style={{ width: 120, height: 120, marginBottom: 20 }}
//           />
//           <h2 style={{ color: '#172b4d' }}>On-Call Management - Upcoming Features</h2>
//           <p style={{ color: '#5e6c84', marginBottom: 30 }}>
//             This section is under development. Try our chatbot to learn more.
//           </p>
//           <button
//             onClick={() => setShowChat(true)}
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#007bff',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               cursor: 'pointer',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//               transition: 'background-color 0.3s ease',
//             }}
//           >
//             💬 Chat with Bot
//           </button>
//         </div>

//         {showChat && (
//           <div
//             style={{
//               position: 'fixed',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               width: '320px',
//               height: '450px',
//               backgroundColor: '#fff',
//               borderRadius: '12px',
//               boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
//               zIndex: 1000,
//               display: 'flex',
//               flexDirection: 'column',
//               overflow: 'hidden',
//             }}
//           >
//             <div style={{
//               backgroundColor: '#007bff',
//               padding: '12px 16px',
//               color: 'white',
//               fontWeight: 'bold',
//               fontSize: '16px',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}>
//               On-Call Chat Assistant
//               <button
//                 onClick={() => setShowChat(false)}
//                 style={{
//                   background: 'transparent',
//                   border: 'none',
//                   color: 'white',
//                   fontSize: '18px',
//                   cursor: 'pointer',
//                   fontWeight: 'bold',
//                 }}
//               >
//                 ✖
//               </button>
//             </div>

//             <div style={{
//               flex: 1,
//               padding: '10px',
//               overflowY: 'auto',
//               backgroundColor: '#f7f9fc',
//               fontSize: '14px',
//             }}>
//               {chatHistory.map((msg, idx) => (
//                 <div key={idx} style={{
//                   textAlign: msg.sender === 'user' ? 'right' : 'left',
//                   marginBottom: '10px',
//                 }}>
//                   <span style={{
//                     display: 'inline-block',
//                     padding: '8px 12px',
//                     borderRadius: '18px',
//                     backgroundColor: msg.sender === 'user' ? '#d1e7ff' : '#e2e3e5',
//                     maxWidth: '80%',
//                   }}>
//                     {msg.text}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
//               <input
//                 value={userMessage}
//                 onChange={(e) => setUserMessage(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
//                 placeholder="Ask something..."
//                 style={{
//                   flex: 1,
//                   padding: '10px',
//                   border: 'none',
//                   outline: 'none',
//                 }}
//               />
//               <button
//                 onClick={handleSendMessage}
//                 style={{
//                   backgroundColor: '#007bff',
//                   color: '#fff',
//                   padding: '0 15px',
//                   border: 'none',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Oncall;


// import React, { useState } from 'react';
// import Sidebar from '../../components/Sidebar';
// import Header from '../../components/Header';

// const Oncall = ({ logout }) => {
//   const [showChat, setShowChat] = useState(false);
//   const [userMessage, setUserMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const predefinedAnswers = {
//     'what is on-call': 'On-call is a system for managing emergency support shifts.',
//     'how to raise a ticket': "Click 'Create Ticket' from the sidebar to raise a new ticket.",
//     'when will on-call be live': 'This feature is currently under development. Stay tuned!',
//   };

//   const handleSendMessage = () => {
//     if (!userMessage.trim()) return;

//     const userText = userMessage.trim().toLowerCase();
//     const botReply = predefinedAnswers[userText] || "Sorry, I don't have an answer to that yet.";

//     setChatHistory((prev) => [
//       ...prev,
//       { sender: 'user', text: userMessage },
//       { sender: 'bot', text: botReply },
//     ]);
//     setUserMessage('');
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <Sidebar />
//       <div style={{ flex: 1, position: 'relative' }}>
//         <Header logout={logout} />
//         <div
//           style={{
//             height: 'calc(100vh - 60px)',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             textAlign: 'center',
//           }}
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
//             alt="Chatbot"
//             style={{ width: 120, height: 120, marginBottom: 20 }}
//           />
//           <h2 style={{ color: '#172b4d' }}>On-Call Management - Upcoming Features</h2>
//           <p style={{ color: '#5e6c84', marginBottom: 30 }}>
//             This section is under development. Try our chatbot to learn more.
//           </p>
//           <button
//             onClick={() => setShowChat(true)}
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#007bff',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               cursor: 'pointer',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//             }}
//           >
//             💬 Chat with Bot
//           </button>
//         </div>

//         {showChat && (
//           <div
//             style={{
//               position: 'fixed',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               width: '320px',
//               height: '450px',
//               backgroundColor: '#fff',
//               borderRadius: '12px',
//               boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
//               zIndex: 1000,
//               display: 'flex',
//               flexDirection: 'column',
//               overflow: 'hidden',
//             }}
//           >
//             <div
//               style={{
//                 backgroundColor: '#007bff',
//                 padding: '12px 16px',
//                 color: 'white',
//                 fontWeight: 'bold',
//                 fontSize: '16px',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//               }}
//             >
//               On-Call Chat Assistant
//               <button
//                 onClick={() => setShowChat(false)}
//                 style={{
//                   background: 'transparent',
//                   border: 'none',
//                   color: 'white',
//                   fontSize: '18px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 ✖
//               </button>
//             </div>

//             <div
//               style={{
//                 flex: 1,
//                 padding: '10px',
//                 overflowY: 'auto',
//                 backgroundColor: '#f7f9fc',
//                 fontSize: '14px',
//               }}
//             >
//               {chatHistory.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   style={{
//                     textAlign: msg.sender === 'user' ? 'right' : 'left',
//                     marginBottom: '10px',
//                   }}
//                 >
//                   <span
//                     style={{
//                       display: 'inline-block',
//                       padding: '8px 12px',
//                       borderRadius: '18px',
//                       backgroundColor:
//                         msg.sender === 'user' ? '#d1e7ff' : '#e2e3e5',
//                       maxWidth: '80%',
//                     }}
//                   >
//                     {msg.text}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
//               <input
//                 value={userMessage}
//                 onChange={(e) => setUserMessage(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
//                 placeholder="Ask something..."
//                 style={{
//                   flex: 1,
//                   padding: '10px',
//                   border: 'none',
//                   outline: 'none',
//                 }}
//               />
//               <button
//                 onClick={handleSendMessage}
//                 style={{
//                   backgroundColor: '#007bff',
//                   color: '#fff',
//                   padding: '0 15px',
//                   border: 'none',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Oncall;



// import React, { useState } from 'react';
// import Sidebar from '../../components/Sidebar';
// import Header from '../../components/Header';

// const Oncall = ({ logout }) => {
//   const [showChat, setShowChat] = useState(false);
//   const [userMessage, setUserMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const predefinedAnswers = {
//     'what is on-call': 'On-call is a system for managing emergency support shifts.',
//     'how to raise a ticket': "Click 'MY Ticket' from the sidebar to raise a new ticket.",
//     'when will on-call be live': 'This feature is currently under development. Stay tuned!',
//   };

//   const handleSendMessage = () => {
//     if (!userMessage.trim()) return;

//     const userText = userMessage.trim().toLowerCase();
//     const botReply = predefinedAnswers[userText] || "Sorry, I don't have an answer to that yet.";

//     setChatHistory((prev) => [
//       ...prev,
//       { sender: 'user', text: userMessage },
//       { sender: 'bot', text: botReply },
//     ]);
//     setUserMessage('');
//   };

//   return (
//     <div className="d-flex" style={{ height: '100vh', overflow: 'hidden', marginLeft:"550px" , marginTop:"100px"}}>
//       <Sidebar />
//       <div className="flex-grow-1 d-flex flex-column" style={{ overflow: 'hidden' }}>
//         <Header logout={logout} />
//         <div className="p-4 text-center" style={{ overflowY: 'auto', flexGrow: 1 }}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
//             alt="Chatbot"
//             style={{ width: 120, height: 120, marginBottom: 20 , marginLeft:"180px"}}
//           />
//           <h2 style={{ color: '#172b4d' }}>On-Call Management - Upcoming Features</h2>
//           <p style={{ color: '#5e6c84', marginBottom: 30 }}>
//             This section is under development. Our Chatbot will start in few month.
//           </p>
//           <button
//             onClick={() => setShowChat(true)}
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#007bff',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               cursor: 'pointer',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//               marginLeft:"160px"
//             }}
//           >
//             💬 Chat with Bot
//           </button>
//         </div>

//         {/* Chatbot Modal */}
//         {showChat && (
//           <div
//             style={{
//               position: 'fixed',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               width: '320px',
//               height: '450px',
//               backgroundColor: '#fff',
//               borderRadius: '12px',
//               boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
//               zIndex: 2000,
//               display: 'flex',
//               flexDirection: 'column',
//               overflow: 'hidden',
//             }}
//           >
//             <div
//               style={{
//                 backgroundColor: '#007bff',
//                 padding: '12px 16px',
//                 color: 'white',
//                 fontWeight: 'bold',
//                 fontSize: '16px',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//               }}
//             >
//               On-Call Chat Assistant
//               <button
//                 onClick={() => setShowChat(false)}
//                 style={{
//                   background: 'transparent',
//                   border: 'none',
//                   color: 'white',
//                   fontSize: '18px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 ✖
//               </button>
//             </div>

//             <div
//               style={{
//                 flex: 1,
//                 padding: '10px',
//                 overflowY: 'auto',
//                 backgroundColor: '#f7f9fc',
//                 fontSize: '14px',
//               }}
//             >
//               {chatHistory.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   style={{
//                     textAlign: msg.sender === 'user' ? 'right' : 'left',
//                     marginBottom: '10px',
//                   }}
//                 >
//                   <span
//                     style={{
//                       display: 'inline-block',
//                       padding: '8px 12px',
//                       borderRadius: '18px',
//                       backgroundColor:
//                         msg.sender === 'user' ? '#d1e7ff' : '#e2e3e5',
//                       maxWidth: '80%',
//                     }}
//                   >
//                     {msg.text}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
//               <input
//                 value={userMessage}
//                 onChange={(e) => setUserMessage(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
//                 placeholder="Ask something..."
//                 style={{
//                   flex: 1,
//                   padding: '10px',
//                   border: 'none',
//                   outline: 'none',
//                 }}
//               />
//               <button
//                 onClick={handleSendMessage}
//                 style={{
//                   backgroundColor: '#007bff',
//                   color: '#fff',
//                   padding: '0 15px',
//                   border: 'none',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Oncall;


import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const Oncall = ({ logout }) => {
  const [showChat, setShowChat] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const predefinedAnswers = {
    'what is on-call': 'On-call is a system for managing emergency support shifts.',
    'how to raise a ticket': "Click 'MY Ticket' from the sidebar to raise a new ticket.",
    'when will on-call be live': 'This feature is currently under development. Stay tuned!',
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    const userText = userMessage.trim().toLowerCase();
    const botReply = predefinedAnswers[userText] || "Sorry, I don't have an answer to that yet.";

    setChatHistory((prev) => [
      ...prev,
      { sender: 'user', text: userMessage },
      { sender: 'bot', text: botReply },
    ]);
    setUserMessage('');
  };

  return (
    <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' ,marginLeft:"550px" , marginTop:"100px"}}>
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column" style={{ overflow: 'hidden' }}>
        <Header logout={logout} />
        <div className="p-4 text-center" style={{ overflowY: 'auto', flexGrow: 1 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
            alt="Chatbot"
            style={{ width: 120, height: 120, marginBottom: 20 , marginLeft:"180px"}}
          />
          <h2 style={{ color: '#172b4d' }}>On-Call Management - Upcoming Features</h2>
          <p style={{ color: '#5e6c84', marginBottom: 30 }}>
            This section is under development. Our Chatbot will start in few months.
          </p>
          <button
            onClick={() => setShowChat(true)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#8B3A94',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              marginLeft:"160px"
            }}
          >
            💬 Chat with Bot
          </button>
        </div>

        {/* Chatbot Modal */}
        {showChat && (
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '340px',
              height: '520px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: '#8B3A94',
                padding: '12px 16px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              On-Call Chat Assistant
              <button
                onClick={() => setShowChat(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontSize: '18px',
                  cursor: 'pointer',
                  marginLeft:"160px"
                }}
              >
                ✖
              </button>
            </div>

            {/* Chat History */}
            <div
              style={{
                flex: 1,
                padding: '10px',
                overflowY: 'auto',
                backgroundColor: '#f7f9fc',
                fontSize: '14px',
              }}
            >
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    textAlign: msg.sender === 'user' ? 'right' : 'left',
                    marginBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '8px 12px',
                      borderRadius: '18px',
                      backgroundColor:
                        msg.sender === 'user' ? '#d1e7ff' : '#e2e3e5',
                      maxWidth: '80%',
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div style={{ padding: '10px', borderTop: '1px solid #ccc', backgroundColor: '#f1f1f1' }}>
              <strong style={{ fontSize: '13px' }}>Frequently Asked:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {Object.keys(predefinedAnswers).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setUserMessage(question);
                      setTimeout(handleSendMessage, 100);
                    }}
                    style={{
                      textAlign: 'left',
                      backgroundColor: '#e9ecef',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    ➤ {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
              <input
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask something..."
                style={{
                  flex: 1,
                  padding: '10px',
                  border: 'none',
                  outline: 'none',
                }}
              />
              <button
                onClick={handleSendMessage}
                style={{
                  backgroundColor: '#8B3A94',
                  color: '#fff',
                  padding: '0 15px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Oncall;


