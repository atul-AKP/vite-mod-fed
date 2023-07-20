import { Box } from '@mui/system'
import React, { useState } from 'react'
import './App.css'
import {
  appWrapper,
  contentWrapper,
  sideBarWrapper,
  contentAreaWrapper,
  scrollListWrapper,
  createAccountWrapper,
  joinRedditWrapper,
  remoteAppWrapper
} from './styles/styles'
import AgentPage from 'remoteApp/agentAssist'
import useStore from 'remoteApp/store'
import Navbar from './components/navigation/Navbar'
import SideList from './components/SideList'
import { blue, grey } from '@mui/material/colors'
import { Container, CssBaseline, Typography } from '@mui/material'
import CustomButton from './components/shared/CustomButton'
import AppContentArea from './components/AppContentArea'

function App() {
  const [appShow, setAppShow] = useState(false)
  const handleClick = (val) => {
    setAppShow((val) => !val)
  }
  return (
    <React.Fragment>
      {appShow ? (
        <>
          <Container>
            <Box sx={remoteAppWrapper}>
              <CssBaseline />
              <Navbar handleClick={handleClick} />
              <AgentPage />
            </Box>
          </Container>
        </>
      ) : (
        <Box sx={appWrapper}>
          <Navbar handleClick={handleClick} />
          <Box sx={contentWrapper}>
            <Box sx={sideBarWrapper}>
              <Box sx={scrollListWrapper}>
                <SideList />
              </Box>
              <Box sx={createAccountWrapper}>
                <Box sx={joinRedditWrapper}>
                  <Typography sx={{ mb: 2 }} variant='body2' gutterBottom>
                    Create an account to follow your favorite communities and
                    start taking part in conversations.
                  </Typography>
                  <CustomButton
                    bgColor={blue[300]}
                    color={grey[900]}
                    text='Join Smart Converter'
                    fullWidth
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={contentAreaWrapper}>
              <AppContentArea />
            </Box>
          </Box>
        </Box>
      )}
    </React.Fragment>
  )
}

export default App

// import { useState } from "react";
// import "./App.css";

// import Button from "remoteApp/Button";
// import useStore from "remoteApp/store";

// function App() {
//   const [count, setCount] = useStore();

//   return (
//     <div className="App">
//       <h1>Host Application</h1>
//       <Button />
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
