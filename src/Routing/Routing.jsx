import { React } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Components/Home'
import LoginPage from '../Components/LoginPage'
import Profile from '../Components/Profile'
import Register from '../Components/Register'
import TaskList from '../Components/TaskList'
import NoMatch from './NoMatch'
import { Box } from '@mui/material'

export default function Routing() {
  return (
    // <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

    // </Box>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<Register />} />

      <Route path='/profile' element={<Profile />}>
        <Route index element={<Navigate to="tasks" />} />
        <Route path="tasks" element={<TaskList />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}