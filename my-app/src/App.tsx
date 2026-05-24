//  import { useState } from 'react'
// import { Header } from './components/Header';
// import { Banner } from './components/Banner';
// import { AboutUs } from './components/AboutUs';
// import { Comand } from './components/Comand';
// import { Patients } from './components/Patients';
// import { Services } from './components/Services';
// import {Comments} from './components/Comments';
// import { Footer } from './components/Footer';
// import React from 'react';
// import './App.css'
// function App(){
//   return(
//     <>
//       <Banner />
//       <AboutUs />
//       <Comand />
//       <Patients />
//       <Services />
//       <Comments />
//       <Footer />
//     </>
    
//   );
// }

// export default App



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";
import { PatientPage } from "./pages/PatientPage";
import { DoctorPage } from "./pages/DoctorPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AppointmentPage } from "./pages/AppointmentPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
