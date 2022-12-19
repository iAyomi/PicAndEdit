import React, { useContext } from 'react';
import Actions from '../Components/Actions/Actions';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Vectorize from '../Components/Vectorize/Vectorize';
import PictureBox from '../Components/PictureBox/PictureBox';
import PaletteHeader from '../Components/PaletteHeader/PaletteHeader';
import { MainPaletteContext } from '../Services/Contexts/MainPaletteContext';


export const VectorizePage = () => {

    const { myMainPaletteStyle } = useContext(MainPaletteContext);

  return (
    <React.Fragment>
        <CssBaseline />
        <Box className="myMainPalette" style={myMainPaletteStyle}>
            <Box className="myActionsMenu">
                <Actions />
            </Box>
            <Box className="myPaletteBox">
                <PaletteHeader />
                <Box className="myPaletteMain">
                    <Vectorize />
                    <PictureBox />
                </Box>
            </Box>
        </Box>
    </React.Fragment>
  )
}