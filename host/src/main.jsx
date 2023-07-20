import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppThemeProvider from './themes/AppThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>
)
