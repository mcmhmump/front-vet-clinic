 import { useState } from 'react'
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { AboutUs } from './components/AboutUs';
import { Comand } from './components/Comand';
import { Patients } from './components/Patients';
import { Services } from './components/Services';
import {Comments} from './components/Comments';
import { Footer } from './components/Footer';
import React from 'react';
import './App.css'
function App(){
  return(
    <>
      <Banner />
      <AboutUs />
      <Comand />
      <Patients />
      <Services />
      <Comments />
      <Footer />
    </>
    
  );
}

export default App
