import React from 'react';
import { Box, TextField, IconButton, Typography, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="90%"
      width="100%"
      component={Paper}
      elevation={3}
    >
      {/* Encabezado */}
      <Box p={2} bgcolor="primary.main" color="white">
        <Typography variant="h6">Chat</Typography>
      </Box>

      {/* Zona de mensajes */}
      <Box
        flex={1}
        p={2}
        overflow="auto"
        bgcolor="#f5f5f5"
      >
        <Typography variant="body2" gutterBottom><strong>Usuario:</strong> Hola</Typography>
        <Typography variant="body2" gutterBottom><strong>Bot:</strong> ¡Hola! ¿Cómo estás?</Typography>
      </Box>

      {/* Input de mensaje */}
      <Box p={2} display="flex" borderTop="1px solid #ccc">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Escribe un mensaje..."
          size="small"
        />
        <IconButton color="primary" sx={{ ml: 1 }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chat;