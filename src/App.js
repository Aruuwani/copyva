import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage/homepage';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Login from './Pages/Login/login';

import './App.css';
import AdminPanel from "./Components/Dashboard/CreatorDashboard/dashboard"
import MultiStepForm from './Components/Dashboard/CreatorDashboard/dashboard/Statement';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {window.location.pathname.startsWith("/dashboard") ? (
          <>
            <Routes>
              <Route path="/dashboard/*" element={<AdminPanel />} />
              {/* <Route path="/dashboard/MultiStepForm" element={<MultiStepForm />} /> */}
            </Routes>
          </>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
