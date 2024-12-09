import React from 'react'
import { Box } from '@mui/material'
import Routing from './Routing/Routing'
import MenuBar from './Components/MenuBar'
import "./app.css"

export default function App() {
  return (
    <>
      <MenuBar />
      <Routing />
    </>
  )
}