import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import TextCreator from './pages/TextCreator';
import VideoGuide from './pages/VideoGuide';
import TextToVideo from './pages/TextToVideo';
import OneClickGeneration from './pages/OneClickGeneration';
import UserProfile from './pages/UserProfile';
import Points from './pages/Points';
import Settings from './pages/Settings';
import './styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Router>
      {isLoggedIn ? (
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar user={user} onLogout={handleLogout} />
          <Layout.Content style={{ marginLeft: 200 }}>
            <Routes>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/text-creator" element={<TextCreator />} />
              <Route path="/video-guide" element={<VideoGuide />} />
              <Route path="/text-to-video" element={<TextToVideo />} />
              <Route path="/one-click" element={<OneClickGeneration />} />
              <Route path="/profile" element={<UserProfile user={user} />} />
              <Route path="/points" element={<Points />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Layout.Content>
        </Layout>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;