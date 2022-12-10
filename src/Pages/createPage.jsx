import React from 'react';
import Actions from '../Components/Actions/Actions';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Upload from '../Components/Upload/Upload';
import RemoveBg from '../Components/RemoveBg/RemoveBg';
import Vectorize from '../Components/Vectorize/Vectorize';
import AdjustImg from '../Components/AdjustImg/AdjustImg';
import TransferStyle from '../Components/TransferStyle/TransferStyle';
import GenTexture from '../Components/GenTexture/GenTexture';
import AddEffects from '../Components/AddEffects/AddEffects';
import AddMasks from '../Components/AddMasks/AddMasks';
import Upscale from '../Components/Upscale/Upscale';
import UpscaleEnhance from '../Components/UpscaleEnhance/UpscaleEnhance';
import UpscaleUltra from '../Components/UpscaleUltra/UpscaleUltra';
import UpscaleFace from '../Components/UpscaleFace/UpscaleFace';
import PictureBox from '../Components/PictureBox/PictureBox';


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
                <Box className="myPaletteMain">
                    {/* <Upload /> */}
                    <RemoveBg />
                    {/* <Vectorize /> */}
                    {/* <AdjustImg /> */}
                    {/* <TransferStyle /> */}
                    {/* <GenTexture /> */}
                    {/* <AddEffects /> */}
                    {/* <AddMasks /> */}
                    {/* <Upscale /> */}
                    {/* <UpscaleUltra /> */}
                    {/* <UpscaleEnhance /> */}
                    {/* <UpscaleFace /> */}
                    <PictureBox />
                </Box>
            </Box>
        </Box>
    </React.Fragment>
  )
}