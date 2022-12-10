import React from 'react';
import Actions from '../Components/Actions/Actions';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import UpscaleUltra from '../Components/UpscaleUltra/UpscaleUltra';
import PictureBox from '../Components/PictureBox/PictureBox';
import PaletteHeader from '../Components/PaletteHeader/PaletteHeader';



export const UpscaleUltraPage = () => {
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
                    <UpscaleUltra />
                    <PictureBox />
                </Box>
            </Box>
        </Box>
    </React.Fragment>
  )
}