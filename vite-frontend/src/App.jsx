import React from 'react';
import {
  Box, 
  AppBar,
  Toolbar,
  Avatar,
  Button,
  Typography

} from '@mui/material';
import NavBar from './components/NavBar'
import { Route,Routes,Router } from 'react-router-dom';
import Retos from './pages/Retos.jsx'
import Logros from './pages/Logros.jsx'
import Main from './pages/Main.jsx';
import Chat from './components/Chat.jsx';

export default function App() {
  const isLoggedIn = true;

  return (
    <Box sx={{ height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>


      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Sendero & Bar</Typography>
        {isLoggedIn ? (
        <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body1">pAna</Typography>
            <Avatar src="https://via.placeholder.com/36" alt="Ana" />
        </Box>
        ) : (
        <Button color="inherit">Login</Button>
        )}
        </Toolbar>
      </AppBar>

      {/* Layout */}
      <Box sx={{ flex: 1, display: 'flex', width: '100%', height: '100%' }}>
        {/* Menú lateral */}
        
        <Box sx={{ width: '16.66%', bgcolor: '#e0e0e0', p: 2 }}>
          <NavBar/>
        </Box>

        {/* Contenido principal */}
        <Box sx={{ width: '62.66%', bgcolor: '#fafafa', p: 3, minHeight: '100vh', overflowY: 'auto' }}>
         <Routes>
              <Route path="*" element={<Main />} />
              <Route path="/retos" element={<Retos />} />
              <Route path="/logros" element={<Logros />} />
        </Routes>
        </Box>
        
        {/* Panel derecho */}
        <Box sx={{ width: '20.66%', bgcolor: '#f5f5f5', p: 2 ,maxHeight: '100vh'}}>
          <Chat/>
        </Box>
      </Box>
    </Box>
  );
}