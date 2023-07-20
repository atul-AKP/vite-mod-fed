import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { DiCodeigniter } from 'react-icons/di'
import { flexAlignCenter, logoText } from '../../styles/styles'

const Logo = () => {
  return (
    <Box sx={flexAlignCenter}>
      <DiCodeigniter size={32} />
      <Typography variant='h6' component='div' sx={logoText}>
        Smart Converter
      </Typography>
    </Box>
  )
}

export default Logo
