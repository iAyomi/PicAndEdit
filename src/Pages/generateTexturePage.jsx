import React from 'react';
import Actions from '../Components/Actions/Actions';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import GenTexture from '../Components/GenTexture/GenTexture';
import PictureBox from '../Components/PictureBox/PictureBox';
import PaletteHeader from '../Components/PaletteHeader/PaletteHeader';


export const GenerateTexturePage = () => {
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
                    <GenTexture />
                    <PictureBox />
                </Box>
            </Box>
        </Box>
    </React.Fragment>
  )
}