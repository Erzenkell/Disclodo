import React from 'react';
import './App.css';
import Login from './page/login/Login';
import Signup from './page/signup/Signup';
import Dashboard from './page/dashboard/Dashboard';
import {
  Route,
  Routes,
} from "react-router-dom";
import { useLocation } from 'react-router-dom';

function setToken(userToken) {
  sessionStorage.setItem('token', userToken);
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  return tokenString
}

function App() {
  const token = getToken();
  const location = useLocation();

  if(!token && location.pathname !== '/signup' && location.pathname !== '/login') {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard getToken={getToken}/>}/>
          <Route path="/login" element={<Login setToken={setToken}/>}/>
          <Route path="/dashboard" element={<Dashboard getToken={getToken}/>}/>
          <Route path="/signup" element={<Signup setToken={setToken}/>}/>
        </Routes>
    </div>
  );
}

export default App;
