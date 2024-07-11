import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/homepage";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
// import Login from "./Pages/Login/login";

import "./App.css";
import AdminPanel from "./Components/Dashboard/CreatorDashboard/dashboard";
// import MultiStepForm from "./Components/Dashboard/CreatorDashboard/dashboard/Statement";
import Auth from "./Components/Auth/Auth";
import UserComponent from "./Components/usercomponent";
import ViewAll from "./Components/Homepage/Music_dashboard/All";
import SearchBycode from "./Components/Homepage/Search_bycode";
import Payment from "./Components/Homepage/Search_bycode/payment";
import Checkout from "./Components/Homepage/Search_bycode/checkout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {window.location.pathname.startsWith("/dashboard") ? (
          <Routes>
            <Route path="/dashboard/*" element={<AdminPanel />} />
            {/* <Route path="/dashboard/MultiStepForm" element={<MultiStepForm />} /> */}
          </Routes>
        ) : window.location.pathname === "/auth" ? (
          <Routes>
            <Route path="/auth" element={<Auth />} />

          </Routes>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/usercomponent" element={<UserComponent />} />
              <Route path="/usercomponent/:tab" element={<UserComponent />} />
              <Route path="/viewall" element={<ViewAll />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="/serch_bycode" element={<SearchBycode />} />


            </Routes>
            {window.location.pathname !== '/usercomponent' &&
              <Footer />
            }
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
