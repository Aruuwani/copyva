import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage/homepage';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Login from './Pages/Login/login';
// import CreatorDashboard from './Components/Dashboard/CreatorDashboard/AppHeader/AppHeader';


import './App.css';
// import AdminPanel from './Components/Dashboard/CreatorDashboard/AppHeader/AppHeader';
// import AdminPanel from './dashboard';
import AdminPanel from "../src/Components/Dashboard/CreatorDashboard/dashboard/index.jsx"

// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <div className="App">
      {
        window.location.pathname === "/dashboard" ? (
          <BrowserRouter>
            {/* <ToastContainer /> */}
            <Routes>
            <Route path="/dashboard" element={<AdminPanel />} />
              {/* <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
          </BrowserRouter>
        ) : (

          <BrowserRouter>
          <Header />
            {/* <ToastContainer /> */}
            <Routes>
            <Route path="/" element={<Homepage />} />
           <Route path="/login" element={<Login />} />
              
              {/* <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
            <Footer />
          </BrowserRouter>
        )
      }

    </div>
  );
}

export default App;

