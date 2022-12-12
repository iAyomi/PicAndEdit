import React, { useState, useEffect, useContext } from 'react';
import { alpha, styled } from '@mui/material/styles';
import "./RemoveBg.css";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Tooltip from '@mui/material/Tooltip';
import Slider from '@mui/material/Slider';
import InputBase from '@mui/material/InputBase';
import PaletteIcon from '@mui/icons-material/Palette';
import { HexColorPicker } from "react-colorful";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
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


const ColorMenu = styled((props) => (
    <Menu
      TransitionComponent={Fade}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      height: 'auto',  
      width: 'auto',
      borderRadius: 4,
      backgroundColor: '#646d86',
      marginLeft: '250px',
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '0'
      }
    }
  }));


const RemoveBg = () => {

    const [openRemoveBg, setOpenRemoveBg] = useState('block');

    const myDrawerStyle = {
        width: 220,
        height: '100%',
        bgcolor: '#161a25',
        borderLeft: '2.5px solid #ffffff',
        color: '#646d86',
        display: openRemoveBg
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

    const myHeadersList = {
        "accept": "application/json",
        "X-Picsart-API-Key": "nZ1AmcPL4DNbTNqU6hIezYkXxLSDlxpR"
    }
    
    const myUrl = "https://api.picsart.io/tools/1.0/removebg";

    const { uploadedPicture, setUploadedPicture } = useContext(UploadedPictureContext);

    const [openBgMenu, setOpenBgMenu] = useState(false);

    const [myBgMenuState, setMyBgMenuState] = useState({
        display: 'none', 
        height: 0
    });

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    useEffect(() => {
        if (openBgMenu === false) {
            setMyBgMenuState({
                display: 'none', 
                height: 0
            })
        }
        else {
            setMyBgMenuState({
                display: 'block', 
                height: 'auto'
            })
        }
    }, [openBgMenu]);

    const [color, setColor] = useState("");

    const [blur, setBlur] = useState(0);

    const [outputType, setOutputType] = useState('');

    const [bgWidth, setBgWidth] = useState("");

    const [bgHeight, setBgHeight] = useState("");

    const [scale, setScale] = useState("fit");

    const [openBackdrop, setOpenBackdrop] = useState(false);

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };

    const handleToggleBackdrop = () => {
        setOpenBackdrop(!openBackdrop);
    };

    const handleClick = () => {
        setOpenBgMenu(!openBgMenu)
    };

    const closeRemoveBg = () => {
        setOpenRemoveBg('none');
    };

    const handleOutputOptionClick = (event) => {
        setOutputType(event.target.value);
    };

    const handleScaleOptionClick = (event) => {
        setScale(event.target.value);
    };

    const handleBgImageClick = () => {

    };

    const handleBgColorClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRemoveBgFn = () => {
        if (uploadedPicture.id !== null) {
            handleToggleBackdrop();
            async function removeImageBg() {
              let headerslist = myHeadersList;
              let bodyContent = new FormData();
              bodyContent.append("image_id", uploadedPicture.id);
              bodyContent.append("format", "JPG");
              bodyContent.append("output_type", outputType);
              bodyContent.append("bg_color", color);
              bodyContent.append("bg_blur", blur);
              bodyContent.append("bg_width", bgWidth);
              bodyContent.append("bg_height", bgHeight);
              bodyContent.append("scale", scale);
             
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
        removeImageBg();
    }}

  return (
    <Box
        sx={myDrawerStyle}
    >
        <DrawerHeader>
          <IconButton onClick={closeRemoveBg} sx={{bgcolor: '#000000'}}>
            <CancelIcon sx={myIconStyle} />
          </IconButton>
        </DrawerHeader>

        <Box>
            <h5>Output Option</h5>
            <div className='myBgBtnDiv'>
                <button className='myBtn' value={"cutout"} onClick={handleOutputOptionClick}>Cutout</button>
                <button className='myBtn' value={"mask"} onClick={handleOutputOptionClick}>Mask</button>
            </div>
        </Box>

        <Box>
            <div onClick={handleClick} className='bgMenuHeader'>
                <span>Edit Background</span>
            </div>
            <Box sx={myBgMenuState}>
                <div>
                    <div className='bgMenuItem'>
                        <h5>Image</h5>
                        <Tooltip title="Add background image" arrow><AddToPhotosIcon sx={myIconStyle} onClick={handleBgImageClick} /></Tooltip>
                    </div>
                    <div>
                        <div className='bgMenuItem'>
                            <h5>Color</h5>
                            <Tooltip title="Add background color" arrow><PaletteIcon sx={myIconStyle} onClick={handleBgColorClick} /></Tooltip>
                            <ColorMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                autoFocus={false}
                                onClose={handleClose}
                            >
                                <MenuItem>
                                    <HexColorPicker color={color} onChange={setColor} />
                                </MenuItem>
                            </ColorMenu>
                        </div>
                        <div className='bgMenuItem'>
                            <div style={{ height: '25px', width: '12%', backgroundColor: color, borderRadius: '0.3rem' }}></div>
                            <MyInput 
                                id="my-color-input-box"
                                placeholder="add background color"
                                value={color}
                                disabled
                            />
                        </div>
                       
                    </div>
                    <div>
                        <div className='bgMenuItem'>
                            <h5>Blur</h5>
                            <h5>{blur}</h5>
                        </div>
                        <Slider
                            sx={{width: '80%', margin: 'auto'}}
                            size="small"
                            defaultValue={0}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(event, newValue) => {setBlur(newValue)}}
                        />
                    </div>
                    <div className='bgMenuItem'>
                        <h5>Width</h5>
                        <MyInput
                            placeholder="width in pixels"
                            id="my-input-box"
                            value={bgWidth}
                            onChange={(event) => {setBgWidth(event.target.value)}}
                        />
                    </div>
                    <div className='bgMenuItem'>
                        <h5>Height</h5>
                        <MyInput
                            placeholder="height in pixels"
                            id="my-input-box"
                            value={bgHeight}
                            onChange={(event) => {setBgHeight(event.target.value)}}
                        />
                    </div>
                </div>
            </Box>
        </Box>

        <Box>
            <h5>Scale</h5>
            <div className='myBgBtnDiv'>
                <button value={"fit"} className='myBtn' onClick={handleScaleOptionClick}>Fit</button>
                <button value={"fill"} className='myBtn' onClick={handleScaleOptionClick}>Fill</button>
            </div>
        </Box>

        <Box style={{ marginTop: '40px' }}>
          <button className='myBtn' onClick={handleRemoveBgFn}>Done</button>
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



export default RemoveBg;