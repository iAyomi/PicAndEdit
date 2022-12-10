import React from 'react';
import Actions from '../Components/Actions/Actions';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import UpscaleEnhance from '../Components/UpscaleEnhance/UpscaleEnhance';
import PictureBox from '../Components/PictureBox/PictureBox';
import PaletteHeader from '../Components/PaletteHeader/PaletteHeader';



export const UpscaleEnhancePage = () => {
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
                    <UpscaleEnhance />
                    <PictureBox />
                </Box>
            </Box>
        </Box>
    </React.Fragment>
  )
}