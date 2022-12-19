import React, { useState, useEffect, useContext } from 'react';
import './UpscaleUltra.css';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import Slider from '@mui/material/Slider';
import InputBase from '@mui/material/InputBase';
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


const UpscaleUltra = () => {

  const myHeadersList = {
    "accept": "application/json",
    "X-Picsart-API-Key": "7wQjPap0FmHPotOgrYkpRGyF0oq1I09O"
  }

  const myUrl = "https://api.picsart.io/tools/1.0/upscale/ultra?mode=sync";

  const { uploadedPicture, setUploadedPicture } = useContext(UploadedPictureContext);

  const [openBackdrop, setOpenBackdrop] = useState(false);

  const [disableFn, setDisableFn] = useState(false);

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };

  const handleToggleBackdrop = () => {
    setOpenBackdrop(!openBackdrop);
  };

  const [openUpscaleUltra, setOpenUpscaleUltra] = useState('block');

  const [upscaleVal, setUpscaleVal] = useState(null);

  useEffect(() => {
    if (upscaleVal !== null) {
      setDisableFn(true);
    }
  }, [upscaleVal]);

  const [size, setSize] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [dpi, setDpi] = useState("");
  const [unit, setUnit] = useState("px");

  const handleBtnClick = (event) => {
    setUnit(event.target.value);
  };

  const closeUpscaleUltra = () => {
    setOpenUpscaleUltra('none');
  };

  const handleUpscaleUltraFn = () => {
    if (uploadedPicture.id !== "") {
      handleToggleBackdrop();
      async function upscaleUltraImage() {
        let headerslist = myHeadersList;
        let bodyContent = new FormData();
        bodyContent.append("image_id", uploadedPicture.id);
        bodyContent.append("format", "JPG");
        bodyContent.append("upscale_factor", upscaleVal === null ? "" : upscaleVal);
        bodyContent.append("size", size);
        bodyContent.append("width", width);
        bodyContent.append("height", height);
        bodyContent.append("dpi", dpi);
        bodyContent.append("unit", unit);

        let response = await fetch(myUrl, {
            method: "POST",
            body: bodyContent,
            headers: headerslist
        });

        if (response.status === 200) {
          let data = await response.json();
          // console.log(data);
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
      upscaleUltraImage();
  }};

  const myDrawerStyle = {
    width: 220,
    height: '100%',
    bgcolor: '#161a25',
    borderLeft: '2.5px solid #ffffff',
    color: '#646d86',
    display: openUpscaleUltra
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
        <IconButton onClick={closeUpscaleUltra} sx={{bgcolor: '#000000'}}>
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
              disabled={disableFn}
              value={size}
              onChange={(event) => {setSize(event.target.value)}}
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
              disabled={disableFn}
              value={width}
              onChange={(event) => {setWidth(event.target.value)}}
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
              disabled={disableFn}
              value={height}
              onChange={(event) => {setHeight(event.target.value)}}
          />
        </div>
      </Box>

      <Box>
          <h5>Preferred Output Image Unit</h5>
          <div className='myBgBtnDiv'>
              <button className='myBtn' disabled={disableFn} value={"px"} onClick={handleBtnClick}>px</button>
              <button className='myBtn' disabled={disableFn} value={"inch"} onClick={handleBtnClick}>inch</button>
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
              disabled={disableFn}
              value={dpi}
              onChange={(event) => {setDpi(event.target.value)}}
          />
        </div>
      </Box>

      <Box style={{ marginTop: '10px' }}>
        <button className='myBtn' onClick={handleUpscaleUltraFn}>Done</button>
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


export default UpscaleUltra;