import React, { useState, useContext } from 'react';
import './UpscaleFace.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import { UploadedPictureContext } from '../../Services/Contexts/UploadedPicture';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



const UpscaleFace = () => {

  const myHeadersList = {
    "accept": "application/json",
    "X-Picsart-API-Key": "kIBBnXRsMA5EhJZRmNGfslOv74cq00mi"
  }

  const myUrl = "https://api.picsart.io/tools/1.0/enhance/face";

  const { uploadedPicture, setUploadedPicture } = useContext(UploadedPictureContext);

  const [openUpscaleFace, setOpenUpscaleFace] = useState("block");

  const closeUpscaleFace = () => {
    setOpenUpscaleFace('none');
  };

  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };

  const handleToggleBackdrop = () => {
    setOpenBackdrop(!openBackdrop);
  };

  const handleUpscaleFaceFn = () => {
    if (uploadedPicture.id !== "") {
      handleToggleBackdrop();
      async function upscaleFace() {
        let headerslist = myHeadersList;
        let bodyContent = new FormData();
        bodyContent.append("image_id", uploadedPicture.id);
        bodyContent.append("format", "JPG");

        let response = await fetch(myUrl, {
            method: "POST",
            body: bodyContent,
            headers: headerslist
        });

        if (response.status === 200) {
          let data = await response.json();
          // console.log(data)
          setUploadedPicture({
            id: data?.data?.id,
            url: data?.data?.url
          });
          handleCloseBackdrop();
      } else {
        handleCloseBackdrop();
        let error = await response.json();
        console.log(error);
      }}
      upscaleFace();
  }};

  const myDrawerStyle = {
    width: 220,
    height: '100%',
    bgcolor: '#161a25',
    borderLeft: '2.5px solid #ffffff',
    color: '#646d86',
    display: openUpscaleFace
  }

  const myIconStyle = {
    cursor: 'pointer',
    width: '20px',
    height: "20px",
    color: '#646d86',
    "&:hover": {
        color: "#ffffff"
    }
  }

  return (
    <Box
      sx={myDrawerStyle}
    >
      <DrawerHeader>
        <IconButton onClick={closeUpscaleFace} sx={{bgcolor: '#000000'}}>
          <CancelIcon sx={myIconStyle} />
        </IconButton>
      </DrawerHeader>

      <Box>
        <p>No Parameters 😑</p>
        <button className='myBtn' onClick={handleUpscaleFaceFn}>Upscale</button>
      </Box>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

    </Box>
  )
}


export default UpscaleFace;