import React from "react";
import {
    Box, 
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    Button,
  } from '@mui/material';
const Arriba = () => {
return(
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
)
}

export default Arriba;