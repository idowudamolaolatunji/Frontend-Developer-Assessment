import React, { useState } from 'react'
import Header from './components/Header'
import ContentContainer from './components/ContentContainer'
import { Alert } from '@mui/material'


function App() {

  return (
    <>
    
      <Header />
      <ContentContainer />

      <Alert severity='error'>Hello</Alert>
    </>

  )
}

export default App