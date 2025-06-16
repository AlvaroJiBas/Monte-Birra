import React from 'react';
import {
  Box, 
  AppBar,

  Typography

} from '@mui/material';
import NavBar from './components/NavBar'
import Arriba from './components/Arriba';
export default function App() {
  const isLoggedIn = true;

  return (
    <Box sx={{ height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>


      {/* AppBar */}
      
        <Arriba/>
  

      {/* Layout */}
      <Box sx={{ flex: 1, display: 'flex', width: '100%', height: '100%' }}>
        {/* Menú lateral */}
        <Box sx={{ width: '16.66%', bgcolor: '#e0e0e0', p: 2 }}>
          <NavBar></NavBar>
        </Box>

        {/* Contenido principal */}
        <Box sx={{ width: '66.66%', bgcolor: '#fafafa', p: 3 }}>
          <Typography variant="h5">Contenido Principal</Typography>
        </Box>

        {/* Panel derecho */}
        <Box sx={{ width: '16.66%', bgcolor: '#f5f5f5', p: 2 }}>
          <Typography variant="subtitle1">Panel derecho</Typography>
        </Box>
      </Box>
    </Box>
  );
}