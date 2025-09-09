import { useState } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleRegister = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const switchToLogin = () => {
    setAuthMode('login');
  };

  const switchToRegister = () => {
    setAuthMode('register');
  };

  if (!isAuthenticated) {
    return (
      <>
        {authMode === 'login' ? (
          <Login
            onLogin={handleLogin}
            onSwitchToRegister={switchToRegister}
          />
        ) : (
          <Register
            onRegister={handleRegister}
            onSwitchToLogin={switchToLogin}
          />
        )}
      </>
    );
  }

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <Home />
    </>
  )
}

export default App
