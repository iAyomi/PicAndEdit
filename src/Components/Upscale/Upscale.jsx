import React, { useState, useContext } from 'react';
import './Upscale.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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


const Upscale = () => {

  const myHeadersList = {
    "accept": "application/json",
    "X-Picsart-API-Key": "kIBBnXRsMA5EhJZRmNGfslOv74cq00mi"
  }

  const myUrl = "https://api.picsart.io/tools/1.0/upscale";

  const [openEnhance, setOpenEnhance] = useState('block');

  const [upscale, setUpscale] = useState('');

  const { uploadedPicture, setUploadedPicture } = useContext(UploadedPictureContext);

  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };

  const handleToggleBackdrop = () => {
    setOpenBackdrop(!openBackdrop);
  };

  const closeEnhance = () => {
    setOpenEnhance('none');
  };

  const handleUpscaleChange = (event) => {
    setUpscale(event.target.value);
  };

  const handleUpscaleFn = () => {
    if (uploadedPicture.id !== "") {
      handleToggleBackdrop();
      async function upscaleImage() {
        let headerslist = myHeadersList;
        let bodyContent = new FormData();
        bodyContent.append("upscale_factor", upscale);
        bodyContent.append("image_id", uploadedPicture.id);
        bodyContent.append("format", "JPG");
        let response = await fetch(myUrl, {
            method: "POST",
            body: bodyContent,
            headers: headerslist
        });
        if (response.status === 200) {
          handleCloseBackdrop();
            let data = await response.json();
            // console.log(data)
            setUploadedPicture({
              id: data.data.id,
              url: data.data.url
          });
      } else {
        handleCloseBackdrop();
        let error = await response.json();
        console.log(error);
      }}
    upscaleImage();
  }}

  const myDrawerStyle = {
    width: 220,
    height: '100%',
    bgcolor: '#161a25',
    borderLeft: '2.5px solid #ffffff',
    color: '#646d86',
    display: openEnhance
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
          <IconButton onClick={closeEnhance} sx={{bgcolor: '#000000'}}>
            <CancelIcon sx={myIconStyle} />
          </IconButton>
        </DrawerHeader>

        <Box>
            <h5>Select Upscale Factor</h5>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small" style={{fontSize: '0.8rem', color: '#646d86', fontWeight: '600'}}>upscale</InputLabel>
                <Select
                    sx={{fontSize: '0.8rem', fontWeight: '600', color: '#ffffff'}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={upscale}
                    label="Blend"
                    onChange={handleUpscaleChange}
                >
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'x2'}>2x</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'x4'}>4x</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'x6'}>6x</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'x8'}>8x</MenuItem>
                </Select>
            </FormControl>
        </Box>

        <Box style={{ marginTop: '10px' }}>
          <button className='myBtn' onClick={handleUpscaleFn}>Done</button>
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


export default Upscale;