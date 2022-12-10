import React from 'react';
import Box from '@mui/material/Box';
import './PaletteHeader.css';


const PaletteHeader = () => {
  return (
    <Box className="myPaletteHeader">
        <h6 className="myPaletteHeaderText">{"Upload"} &nbsp;&nbsp; | &nbsp;&nbsp; W: <span>{"-"}</span> &nbsp; H: <span>{"-"}</span> &nbsp;&nbsp; | &nbsp;&nbsp; Image Size: <span>{"-"}</span> </h6>
    </Box>
  )
}



export default PaletteHeader;