import React from "react";
import { Box,Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button, Container,LinearProgress } from "@mui/material";
var km = 10;
var bares= 10
 // Import CSS module
 // Import logo

const Logros = () => {
return(
    <Container sx={{alignContent: "center"}}>
        <Typography sx={{mb : "2rem"}} variant="h5" component="div">
          Logros
    </Typography>
    <Card sx={{ maxWidth: 500,display : "flex" }}>
   
      <CardMedia
        component="img"
        sx={{ width: 160 }}
        image="img/medalla10.png"
        alt="medalla10"
      />
       <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Medalla 10 km
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Consigue hacer tus primeros 10 km, montañero!
        </Typography>
        <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" value={km} />
        </Box>
      </CardContent>
      </Box>
  
  
  </Card>

  </Container>
)
};

export default Logros;