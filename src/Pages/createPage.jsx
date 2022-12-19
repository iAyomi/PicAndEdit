import React, { useState, useContext } from 'react';
import Actions from '../Components/Actions/Actions';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Upload from '../Components/Upload/Upload';
import PaletteHeader from '../Components/PaletteHeader/PaletteHeader';
import { MainPaletteContext } from '../Services/Contexts/MainPaletteContext';


export const Create = () => {

    const { myMainPaletteStyle, setMyMainPaletteStyle } = useContext(MainPaletteContext);

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

    const fixMyMainPaletteOnScreen = () => {
        setMyMainPaletteStyle({
            position: "fixed",
            bottom: "0px",
            right: "0px",
            width: "100%"
        })
    }

  return (
    <React.Fragment>
        <CssBaseline />
        <Box className="myMainPalette" style={myMainPaletteStyle}>
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
                        onUpload = {fixMyMainPaletteOnScreen}
                    />
                </Box>
            </Box>
        </Box>
    </React.Fragment>
  )
}