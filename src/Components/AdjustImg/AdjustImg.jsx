import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import './AdjustImg.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import Slider from '@mui/material/Slider';
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



const AdjustImg = () => {

    const myHeadersList = {
        "accept": "application/json",
        "X-Picsart-API-Key": "kIBBnXRsMA5EhJZRmNGfslOv74cq00mi"
    }
    
    const myUrl = "https://api.picsart.io/tools/1.0/adjust";

    const { uploadedPicture, setUploadedPicture } = useContext(UploadedPictureContext);

    const [openAdjustImg, setOpenAdjustImg] = useState('block');

    const [adjustImgValues, setAdjustImgValues] = useState({
        brightness: 0,
        contrast: 0,
        clarity: 0,
        saturation: 0,
        hue: 0,
        shadows: 0,
        highlights: 0,
        temperature: 0,
        sharpen: 0,
        noise: 0,
        vignette: 0
    })

    const myDrawerStyle = {
        width: 220,
        height: '100%',
        bgcolor: '#161a25',
        borderLeft: '2.5px solid #ffffff',
        color: '#646d86',
        display: openAdjustImg
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

    const myBoxStyle = {
        position: 'relative'
    }

    const mySliderStyle = {
        position: 'absolute', 
        top: '40px', 
        right: '20px', 
        width: '80%', 
        margin: 'auto'
    }

    const [openBackdrop, setOpenBackdrop] = useState(false);

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };

    const handleToggleBackdrop = () => {
        setOpenBackdrop(!openBackdrop);
    };

    const closeAdjustImg = () => {
        setOpenAdjustImg('none');
    };

    const handleResetClick = () => {
        setAdjustImgValues((prevState) => ({
            ...prevState,
            brightness: 0,
            contrast: 0,
            clarity: 0,
            saturation: 0,
            hue: 0,
            shadows: 0,
            highlights: 0,
            temperature: 0,
            sharpen: 0,
            noise: 0,
            vignette: 0
        }))
    }

    const handleAdjustImgFn = () => {
        if (uploadedPicture.id !== "") {
            handleToggleBackdrop();
            async function adjustImage() {
              let headerslist = myHeadersList;
              let bodyContent = new FormData();
              bodyContent.append("image_id", uploadedPicture.id);
              bodyContent.append("format", "JPG");
              bodyContent.append("brightness", adjustImgValues.brightness);
              bodyContent.append("contrast", adjustImgValues.contrast);
              bodyContent.append("clarity", adjustImgValues.clarity);
              bodyContent.append("saturation", adjustImgValues.saturation);
              bodyContent.append("hue", adjustImgValues.hue);
              bodyContent.append("shadows", adjustImgValues.shadows);
              bodyContent.append("highlights", adjustImgValues.highlights);
              bodyContent.append("temperature", adjustImgValues.temperature);
              bodyContent.append("sharpen", adjustImgValues.sharpen);
              bodyContent.append("noise", adjustImgValues.noise);
              bodyContent.append("vignette", adjustImgValues.vignette);
             
              let response = await fetch(myUrl, {
                  method: "POST",
                  body: bodyContent,
                  headers: headerslist
              });
              if (response.status === 200) {
                handleCloseBackdrop();
                  let data = await response.json();
                  setUploadedPicture({
                    id: data.data.id,
                    url: data.data.url
                });
            } else {
                handleCloseBackdrop();
                let error = await response.json();
                console.log(error);
        }}
        adjustImage();
    }}

  return (
    <Box
        sx={myDrawerStyle}  
    >
        <DrawerHeader>
          <IconButton onClick={closeAdjustImg} sx={{bgcolor: '#000000'}}>
            <CancelIcon sx={myIconStyle} />
          </IconButton>
        </DrawerHeader>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Brightness</h5>
                <h5>{adjustImgValues.brightness}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                min={-100}
                max={100}
                size="small"
                value={adjustImgValues.brightness}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setAdjustImgValues((prevState) => ({
                    ...prevState,
                    brightness: newValue
                }))}}
            />
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Contrast</h5>
                <h5>{adjustImgValues.contrast}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                min={-100}
                max={100}
                size="small"
                value={adjustImgValues.contrast}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setAdjustImgValues((prevState) => ({
                    ...prevState,
                    contrast: newValue
                }))}}
            />
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Clarity</h5>
                <h5>{adjustImgValues.clarity}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                min={-100}
                max={100}
                size="small"
                value={adjustImgValues.clarity}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setAdjustImgValues((prevState) => ({
                    ...prevState,
                    clarity: newValue
                }))}}
            />
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Saturation</h5>
                <h5>{adjustImgValues.saturation}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                min={-100}
                max={100}
                size="small"
                value={adjustImgValues.saturation}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setAdjustImgValues((prevState) => ({
                    ...prevState,
                    saturation: newValue
                }))}}
            />
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Hue</h5>
                <h5>{adjustImgValues.hue}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                min={-100}
                max={100}
                size="small"
                value={adjustImgValues.hue}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setAdjustImgValues((prevState) => ({
                    ...prevState,
                    hue: newValue
                }))}}
            />
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Shadows</h5>
                <h5>{adjustImgValues.shadows}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                min={-100}
                max={100}
                size="small"
                value={adjustImgValues.shadows}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setAdjustImgValues((prevState) => ({
                    ...prevState,
                    shadows: newValue
                }))}}
            />
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Highlights</h5>
                <h5>{adjustImgValues.highlights}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                min={-100}
                max={100}
                size="small"
                value={adjustImgValues.highlights}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setAdjustImgValues((prevState) => ({
                    ...prevState,
                    highlights: newValue
                }))}}
            />
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Temperature</h5>
                <h5>{adjustImgValues.temperature}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                min={-100}
                max={100}
                size="small"
                value={adjustImgValues.temperature}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setAdjustImgValues((prevState) => ({
                    ...prevState,
                    temperature: newValue
                }))}}
            />
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Sharpen</h5>
                <h5>{adjustImgValues.sharpen}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                size="small"
                value={adjustImgValues.sharpen}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setAdjustImgValues((prevState) => ({
                    ...prevState,
                    sharpen: newValue
                }))}}
            />
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Noise</h5>
                <h5>{adjustImgValues.noise}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                size="small"
                value={adjustImgValues.noise}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setAdjustImgValues((prevState) => ({
                    ...prevState,
                    noise: newValue
                }))}}
            />
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Vignette</h5>
                <h5>{adjustImgValues.vignette}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                size="small"
                value={adjustImgValues.vignette}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setAdjustImgValues((prevState) => ({
                    ...prevState,
                    vignette: newValue
                }))}}
            />
        </Box>

        <div className='myAdjustBtnDiv'>
            <button className='myBtn' onClick={handleResetClick}>Reset</button>
            <button className='myBtn' onClick={handleAdjustImgFn}>Done</button>
        </div>

        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

    </Box>
  )
}



export default AdjustImg;