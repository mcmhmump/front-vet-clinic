 import { useState } from 'react'
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { AboutUs } from './components/AboutUs';
import { Comand } from './components/Comand';
import { Patients } from './components/Patients';
import React from 'react';
import './App.css'
function App(){
  return(
    <>
      <Banner />
      <AboutUs />
      <Comand />
      <Patients />
    </>
    
  );
}

export default App
