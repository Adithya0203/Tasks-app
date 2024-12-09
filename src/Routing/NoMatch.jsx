import React from 'react'
import { Box, Typography } from '@mui/material'

export default function NoMatch() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography variant="h4" color="error">
        No Matching Route Found
      </Typography>
    </Box>
  )
}