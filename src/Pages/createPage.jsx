import React from 'react';
import Actions from '../Components/Actions/Actions';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';



export const Create = () => {
  return (
    <React.Fragment>
        <CssBaseline />
        <Box className="myMainPalette">
            <Box className="myActionsMenu">
                <Actions />
            </Box>
            <Box className="myPaletteBox">
                <Box className="myPaletteHeader">
                    <h6 className="myPaletteHeaderText">{"Upload"} &nbsp;&nbsp; | &nbsp;&nbsp; W: <span>{"150px"}</span> &nbsp; H: <span>{"150px"}</span> &nbsp;&nbsp; | &nbsp;&nbsp; Image Size: <span>{"150MB"}</span> </h6>
                </Box>
            </Box>
        </Box>
    </React.Fragment>
  )
}