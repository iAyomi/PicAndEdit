import React, { useState } from 'react';
import './UpscaleFace.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



const UpscaleFace = () => {

  const [openUpscaleFace, setOpenUpscaleFace] = useState("block");

  const closeUpscaleFace = () => {
    setOpenUpscaleFace('none');
  };

  const myDrawerStyle = {
    width: 220,
    height: '100%',
    bgcolor: '#161a25',
    borderLeft: '2.5px solid #ffffff',
    color: '#646d86',
    display: openUpscaleFace
  }

  const myIconStyle = {
    cursor: 'pointer',
    width: '20px',
    height: "20px",
    color: '#646d86',
    "&:hover": {
        color: "#ffffff"
    }
  }

  return (
    <Box
      sx={myDrawerStyle}
    >
      <DrawerHeader>
        <IconButton onClick={closeUpscaleFace} sx={{bgcolor: '#000000'}}>
          <CancelIcon sx={myIconStyle} />
        </IconButton>
      </DrawerHeader>

      <Box>
        <p>No Parameters 😑</p>
        <button className='myBtn'>Upscale</button>
      </Box>

    </Box>
  )
}



export default UpscaleFace;