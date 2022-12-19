import React, { useState } from 'react';
import Actions from '../Components/Actions/Actions';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Upload from '../Components/Upload/Upload';
import PaletteHeader from '../Components/PaletteHeader/PaletteHeader';


export const Create = () => {

    const [action, setAction] = useState("");

    const updateActionName = (newAction) => {
        setAction(newAction);
    };

    const [myProps, setMyProps] = useState({
        width: "",
        height: "",
        size: ""
    });

    const updateMyImageProps = (imageProps) => {
        setMyProps(imageProps)
    }

  return (
    <React.Fragment>
        <CssBaseline />
        <Box className="myMainPalette">
            <Box className="myActionsMenu">
                <Actions
                    onActionNameChange = {updateActionName}
                />
            </Box>
            <Box className="myPaletteBox">
                <PaletteHeader 
                    action = {action}
                    width = {myProps.width}
                    height = {myProps.height}
                    size = {myProps.size}
                />
                <Box className="myPaletteMain">
                    <Upload 
                        onImageUpload = {updateMyImageProps}
                    />
                </Box>
            </Box>
        </Box>
    </React.Fragment>
  )
}