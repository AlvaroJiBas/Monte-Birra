import React from "react";
import { Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button, Container } from "@mui/material";


const Main = () => {
return(
    <Container sx={{alignContent: "center"}}>
        <Typography sx={{mb : "2rem"}} variant="h5" component="div">
          Reto activo:
    </Typography>
    <Card sx={{ maxWidth: 500 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="img/pintxotrail.jpg"
        alt="mapa"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ruta 1
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Descripcion de la ruta
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        DETALLES
      </Button>
      <Button size="small" color="primary">
        FINALIZAR
      </Button>
    </CardActions>
  </Card>
  <Typography sx={{mt : "2rem"}} variant="h5" component="div">
          Logros :
    </Typography>
  </Container>
)
};

export default Main;