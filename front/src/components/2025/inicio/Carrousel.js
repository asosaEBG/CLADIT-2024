import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
const admin_service = require("../../../helpers/admin_service");

const Carrousel = () => {
  const [contador] = useState(0);
  const [conferencistas, setConferencistas] = useState([]);
  useEffect(() => {
    admin_service
      .getData(`/conferencista/read/${process.env.REACT_APP_EVT}`)
      .then((response) => {
        setConferencistas([...new Map(response.data.response.result.sort((a, b) => a.hora.localeCompare(b.hora)).map(item => [item.conferencista.nombre, item])).values()])
      })
      .catch((error) => {
        console.log(error);
      });
  }, [contador]);


  return <Box>
    {conferencistas.length > 0 && <Box sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}><ImageList cols={4} >
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div">Conferencistas</ListSubheader>
      </ImageListItem>
      {conferencistas.map((item) => (
        <ImageListItem key={item.conferencista.id} style={{ alignItems: 'center' }}>
          <img
            src={`${item.conferencista.foto}`}
            alt={item.conferencista.title}
            loading="lazy"
            style={{ objectFit: 'contain', width: '75%' }}
          />
          <ImageListItemBar
            title={item.conferencista.nombre}
            subtitle={item.conferencista.pais}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.conferencista.nombre}`}
              >
                <PersonIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList></Box>}
    {conferencistas.length > 0 && <Box sx={{ display: { xs: 'none', md: 'block', lg: 'none' } }}><ImageList cols={2} >
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Conferencistas</ListSubheader>
      </ImageListItem>
      {conferencistas.map((item) => (
        <ImageListItem key={item.id} style={{ alignItems: 'center' }}>
          <img
            src={`${item.foto}`}
            alt={item.title}
            loading="lazy"
            style={{ objectFit: 'contain', width: '75%' }}
          />
          <ImageListItemBar
            title={item.nombre}
            subtitle={item.pais}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.nombre}`}
              >
                <PersonIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList></Box>}
    {conferencistas.length > 0 && <Box sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }}><ImageList cols={1} >
      <ImageListItem key="Subheader" cols={1}>
        <ListSubheader component="div">Conferencistas</ListSubheader>
      </ImageListItem>
      {conferencistas.map((item) => (
        <ImageListItem key={item.id} style={{ alignItems: 'center' }}>
          <img
            src={`${item.foto}`}
            alt={item.title}
            loading="lazy"
            style={{ objectFit: 'contain', width: '75%' }}
          />
          <ImageListItemBar
            title={item.nombre}
            subtitle={item.pais}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.nombre}`}
              >
                <PersonIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList></Box>}
  </Box>


};

export default Carrousel;
