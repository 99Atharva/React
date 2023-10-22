import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import SignupPage from './Components/signupPage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
