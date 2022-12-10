import React from 'react';
import Actions from '../Components/Actions/Actions';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import UpscaleFace from '../Components/UpscaleFace/UpscaleFace';
import PictureBox from '../Components/PictureBox/PictureBox';
import PaletteHeader from '../Components/PaletteHeader/PaletteHeader';



export const UpscaleFacePage = () => {
  return (
    <React.Fragment>
        <CssBaseline />
        <Box className="myMainPalette">
            <Box className="myActionsMenu">
                <Actions />
            </Box>
            <Box className="myPaletteBox">
               <PaletteHeader />
                <Box className="myPaletteMain">
                    <UpscaleFace />
                    <PictureBox />
                </Box>
            </Box>
        </Box>
    </React.Fragment>
  )
}