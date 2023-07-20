import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import { appBar, toolbarWrapper } from '../../styles/styles'

import {
  loginBtnWrapper,
  mobileNavWrapper,
  logoWrapper,
  appToolBarWrapper,
  flex
} from '../../styles/styles'
import Logo from './Logo'
import SearchBar from './SearchBar'
import CustomButton from '../shared/CustomButton'
import UserProfile from './UserProfile'
import MobileNav from './MobileNav'

const Navbar = ({ handleClick }) => {
  function handlegetApp() {
    handleClick(true)
  }
  return (
    <AppBar component='nav' sx={appBar}>
      <Toolbar sx={appToolBarWrapper}>
        <Box sx={toolbarWrapper}>
          <Box sx={logoWrapper}>
            <Logo />
            <Box sx={mobileNavWrapper}>
              <MobileNav />
            </Box>
          </Box>
          <Box>
            <SearchBar />
          </Box>
          <Box sx={flex}>
            <Box sx={loginBtnWrapper}>
              <CustomButton
                text='Get App'
                onClick={handlegetApp}
                bgColor='background.customBtn'
                color='text.btnText'
                space
              />
              <CustomButton
                text='Login'
                bgColor='background.customBtn2'
                color='text.btnText'
                space
              />
            </Box>
            <UserProfile />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
