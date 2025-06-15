// import React, { useState } from 'react';
// import Sidebar from '../../components/Sidebar';
// import Header from '../../components/Header';
// import CreateTicket from '../../components/CreateTicket';

// const Queues = ({ setCurrentPage }) => {
//   const [showTicketForm, setShowTicketForm] = useState(false);

//   const handleCreateTicket = (newTicket) => {
//     // Since this page is for upcoming features, we won't handle ticket creation logic here
//     // But we'll keep the function to maintain consistency with CreateTicket component
//     setShowTicketForm(false);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="queues" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         <div style={{ 
//           padding: '20px', 
//           textAlign: 'center', 
//           color: '#172b4d',
//           marginTop: '60px' // To account for the fixed header
//         }}>
//           <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' ,marginLeft:"250px"}}>
//             Upcoming Features
//           </h2>
//           <p style={{ fontSize: '16px', color: '#5e6c84' , marginLeft:"250px"}}>
//             This section is under development. Stay tuned for exciting updates!
//           </p>
//         </div>
//         {showTicketForm && (
//           <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Queues;


import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CreateTicket from '../../components/CreateTicket';

const initialTasks = [
  {
    id: 1,
    title: '(Sample) Fix Database Connection Errors',
    tag: 'BACKEND BUGS',
    status: 'todo',
    datetime: new Date().toLocaleString(),
  },
  {
    id: 2,
    title: '(Sample) Resolve API Timeout Issues',
    tag: 'BACKEND BUGS',
    status: 'inProgress',
    datetime: new Date().toLocaleString(),
  },
  {
    id: 3,
    title: '(Sample) Improve Dropdown Menu Responsiveness',
    tag: 'USER INTERFACE BUGS',
    status: 'inProgress',
    datetime: new Date().toLocaleString(),
  },
  {
    id: 4,
    title: '(Sample) Fix Button Alignment Issue',
    tag: 'USER INTERFACE BUGS',
    status: 'done',
    datetime: new Date().toLocaleString(),
  },
];

const Queues = ({ setCurrentPage, logout }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskTag, setNewTaskTag] = useState('BACKEND BUGS');
  const [showTicketForm, setShowTicketForm] = useState(false);

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      tag: newTaskTag,
      status: 'todo',
      datetime: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const renderColumn = (title, statusKey) => (
    <div style={styles.column}>
      <h4 style={styles.columnTitle}>
        {title.toUpperCase()} <span style={styles.count}>{tasks.filter((t) => t.status === statusKey).length}</span>
      </h4>
      {tasks
        .filter((task) => task.status === statusKey)
        .map((task) => (
          <div style={styles.card} key={task.id}>
            <div style={styles.cardTitle}>{task.title}</div>
            <div style={styles.tag}>(SAMPLE) {task.tag}</div>
            <div style={styles.datetime}>{task.datetime}</div>
            <select
              style={styles.dropdown}
              value={task.status}
              onChange={(e) => handleStatusChange(task.id, e.target.value)}
            >
              <option value="todo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
        ))}
    </div>
  );

  const handleCreateTicket = (newTicket) => {
    setShowTicketForm(false);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', marginTop:"70px" , marginLeft:"240px"}}>
      <Header
        setCurrentPage={setCurrentPage}
        setShowTicketForm={() => {}}
        logout={logout}
      />
      <Sidebar setCurrentPage={setCurrentPage} currentPage="queues" />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Header setShowTicketForm={setShowTicketForm} />
        <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
          <div style={styles.addTask}>
            <input
              type="text"
              placeholder="Enter task title"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              style={styles.input}
            />
            <select
              value={newTaskTag}
              onChange={(e) => setNewTaskTag(e.target.value)}
              style={styles.input}
            >
              <option value="BACKEND BUGS">BACKEND BUGS</option>
              <option value="USER INTERFACE BUGS">USER INTERFACE BUGS</option>
              <option value="TECHNICAL">TECHNICAL BUGS</option>
              <option value="OTHERS">OTHERS BUGS</option>
            </select>
            <button onClick={handleAddTask} style={styles.button}>+ Create</button>
          </div>
          <div style={styles.boardWrapper}>
            <div style={styles.board}>
              {renderColumn('To Do', 'todo')}
              {renderColumn('In Progress', 'inProgress')}
              {renderColumn('Done', 'done')}
            </div>
          </div>
        </div>
        {showTicketForm && (
          <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
        )}
      </div>
    </div>
  );
};

const styles = {
  addTask: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  input: {
    padding: '0.4rem',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '0.4rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  boardWrapper: {
    overflowX: 'auto',
    height: 'calc(100vh - 200px)',
  },
  board: {
    display: 'flex',
    gap: '1rem',
    paddingTop: '1rem',
    paddingBottom: '2rem',
    minWidth: '1000px',
    alignItems: 'flex-start',
  },
  column: {
    background: '#f8f9fa',
    borderRadius: '6px',
    padding: '1rem',
    minWidth: '300px',
    maxWidth: '350px',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
    height: '100%',
  },
  columnTitle: {
    fontSize: '13px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#6c757d',
    marginBottom: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  count: {
    background: '#dee2e6',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '11px'
  },
  card: {
    background: 'white',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    padding: '0.75rem',
    marginBottom: '0.75rem',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.2s',
    wordWrap: 'break-word',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '14px',
    marginBottom: '0.5rem'
  },
  tag: {
    display: 'inline-block',
    background: '#e6c5f3',
    color: '#7e3aab',
    fontSize: '12px',
    fontWeight: 600,
    padding: '2px 8px',
    borderRadius: '4px',
    marginBottom: '6px'
  },
  datetime: {
    fontSize: '11px',
    color: '#888',
    marginBottom: '8px'
  },
  dropdown: {
    width: '100%',
    padding: '0.3rem',
    fontSize: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#f1f1f1'
  }
};

export default Queues;