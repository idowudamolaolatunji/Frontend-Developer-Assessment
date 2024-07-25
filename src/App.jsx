import React, { useState } from 'react'
import Header from './components/Header'
import ContentContainer from './components/ContentContainer'
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";



const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

function App() {

  return (
    <Provider template={AlertTemplate} {...options}>
      <Header />
      <ContentContainer />
    </Provider>

  )
}

export default App