import React from 'react';
import Box from '@mui/material/Box';
import './PaletteHeader.css';


const PaletteHeader = (props) => {

  const action = (props.action === "" || props.action === undefined) ? "Upload" : props.action;

  const width = (props.width === "" || props.width === undefined) ? "" : props.width + "px";

  const height = (props.height === "" || props.height === undefined) ? "" : props.height + "px";

  const size = (props.size === "" || props.size === undefined) ? "" : props.size + 'MB';

  return (
    <Box className="myPaletteHeader">
        <h6 className="myPaletteHeaderText">{action} &nbsp;&nbsp; | &nbsp;&nbsp; W: <span>{width}</span> &nbsp; H: <span>{height}</span> &nbsp;&nbsp; | &nbsp;&nbsp; Image Size: <span>{size}</span> </h6>
    </Box>
  )
}


export default PaletteHeader;