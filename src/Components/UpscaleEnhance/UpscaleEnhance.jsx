import React, { useState } from 'react';
import './UpscaleEnhance.css';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import Slider from '@mui/material/Slider';
import InputBase from '@mui/material/InputBase';



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const MyInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 10,
    fontWeight: '550',
    width: 'auto',
    padding: '10px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));



const UpscaleEnhance = () => {

  const [openUpscaleEnhance, setOpenUpscaleEnhance] = useState("block");

  const [upscaleVal, setUpscaleVal] = useState(2);

  const closeUpscaleEnhance = () => {
    setOpenUpscaleEnhance('none');
  };

  const myDrawerStyle = {
    width: 220,
    height: '100%',
    bgcolor: '#161a25',
    borderLeft: '2.5px solid #ffffff',
    color: '#646d86',
    display: openUpscaleEnhance
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

  return (
    <Box
      sx={myDrawerStyle}    
    >
      <DrawerHeader>
        <IconButton onClick={closeUpscaleEnhance} sx={{bgcolor: '#000000'}}>
          <CancelIcon sx={myIconStyle} />
        </IconButton>
      </DrawerHeader>

      <Box style={myBoxStyle}>
          <div className='adjustOption'>
              <h5>Upscale Factor</h5>
              <h5>{upscaleVal}</h5>
          </div>
          <Slider
              sx={mySliderStyle}
              min={2}
              max={16}
              size="small"
              value={upscaleVal}
              aria-label="Small"
              valueLabelDisplay="auto"
              onChange={(event, newValue) => {setUpscaleVal(newValue)}}
          />
      </Box>

      <Box style={{marginTop: '10px'}}>
        <span>Prefered outcome size</span>
        <div className='bgMenuItem'>
          <h5>Size</h5>
          <MyInput
              placeholder="size"
              id="my-input-box"
          />
        </div>
      </Box>

      <Box style={{marginTop: '10px'}}>
        <span>Prefered outcome width</span>
        <div className='bgMenuItem'>
          <h5>Width</h5>
          <MyInput
              placeholder="width >= Img width"
              id="my-input-box"
          />
        </div>
      </Box>

      <Box style={{marginTop: '10px'}}>
        <span>Prefered outcome height</span>
        <div className='bgMenuItem'>
          <h5>Height</h5>
          <MyInput
              placeholder="height >= Img height"
              id="my-input-box"
          />
        </div>
      </Box>

      <Box>
          <h5>Preferred Output Image Unit</h5>
          <div className='myBgBtnDiv'>
              <button className='myBtn'>px</button>
              <button className='myBtn'>inch</button>
          </div>
      </Box>

      <Box>
          <p>If preferred unit is "inch"</p>
          <p>Select preferred outcome in dots per inch (dpi)</p>
          <div className='bgMenuItem'>
          <h5>dpi</h5>
          <MyInput
              placeholder="dpi"
              id="my-input-box"
          />
        </div>
      </Box>

    </Box>
  )
}



export default UpscaleEnhance;