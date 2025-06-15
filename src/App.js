

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Projects/Dashboard';
import MyTickets from './pages/Projects/MyTickets';
import Queues from './pages/Projects/Queues';
import Incident from './pages/Projects/Incident';
import Problems from './pages/Projects/Problems';
import Changes from './pages/Projects/Changes';
import Alerts from './pages/Operation/Alerts';
import Oncall from './pages/Operation/Oncall';
import Reports from './pages/Reports/Reports';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-tickets"
            element={
              <ProtectedRoute>
                <MyTickets />
              </ProtectedRoute>
            }
          />
          <Route
            path="/queues"
            element={
              <ProtectedRoute>
                <Queues />
              </ProtectedRoute>
            }
          />
          <Route
            path="/incident"
            element={
              <ProtectedRoute>
                <Incident />
              </ProtectedRoute>
            }
          />
          <Route
            path="/problems"
            element={
              <ProtectedRoute>
                <Problems />
              </ProtectedRoute>
            }
          />
          <Route
            path="/changes"
            element={
              <ProtectedRoute>
                <Changes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/alerts"
            element={
              <ProtectedRoute>
                <Alerts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/oncall"
            element={
              <ProtectedRoute>
                <Oncall />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;