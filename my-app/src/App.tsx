 import { useState } from 'react'
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { AboutUs } from './components/AboutUs';
import React from 'react';
import './App.css'
function App(){
  return(
    <>
      <Banner />
      <AboutUs />
    </>
    
  );
}

export default App
