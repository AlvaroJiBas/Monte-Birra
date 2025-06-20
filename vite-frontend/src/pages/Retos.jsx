import React, { useEffect } from "react";
import { TextField,Button,Container,Box } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AccordionActions from "@mui/material/AccordionActions";


import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 // Import logo


 useEffect(() => {
  const query =  Rutas {
    nombre
    origen
    destino
    dificultad
    duracion
    distancia
  }


 })
const Retos = () => {
return(
    <div style={{minHeight: '100vh', overflowY: 'auto'}}>
    <TextField sx={{mb:"3rem"}} id="standard-basic" label="Buscar..." variant="standard" />   
    <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span" variant = "h5">Ruta Donosti-Pasaia por Ulia</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{display : "flex"}}>
      <Typography>
        <p><b>Dificultad :</b> Facil </p>
        <p><b>Distancia :</b> 18km </p>
        <p>Una bonita ruta por ulia</p>
      </Typography>
      <Box component= "img" sx={{
        ml : 10,
        height: 183,
        width: 300,
        maxHeight: { xs: 200, md: 150 },
        maxWidth: { xs: 300, md: 250 },
        }}
        alt="ruta."
      src="img\pintxotrail.jpg"></Box>
    </AccordionDetails>
    <AccordionActions>
          <Button>Elegir</Button>
       
    </AccordionActions>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span" variant = "h5">Ruta Donosti-Orio por Igeldo</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{display : "flex"}}>
      <Typography>
        <p><b>Dificultad :</b> Facil </p>
        <p><b>Distancia :</b> 18km </p>
        <p>Una bonita ruta por ulia</p>
      </Typography>
      <Box component= "img" sx={{
        ml : "5rem",
        height: 183,
        width: 300,
        maxHeight: { xs: 200, md: 150 },
        maxWidth: { xs: 300, md: 250 },
        }}
        alt="ruta."
      src="img\pintxotrail.jpg"></Box>
          
    </AccordionDetails>
    <AccordionActions>
          <Button>Elegir</Button>
       
    </AccordionActions>
  </Accordion>
  </div>
)
};

export default Retos;