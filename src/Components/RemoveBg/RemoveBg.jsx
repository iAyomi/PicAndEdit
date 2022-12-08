import React, { useState, useEffect } from 'react';
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
  



const RemoveBg = () => {

    const [openBgMenu, setOpenBgMenu] = useState(false);

    const [myBgMenuState, setMyBgMenuState] = useState({
        display: 'none', 
        height: 0
    });

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

    const handleClick = () => {
        setOpenBgMenu(!openBgMenu)
    }

    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    

    const myDrawerStyle = {
        width: 220,
        height: '92%',
        bgcolor: '#161a25',
        borderLeft: '2.5px solid #ffffff',
        color: '#646d86',
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
          <IconButton onClick={handleDrawerClose} sx={{bgcolor: '#000000'}}>
            <CancelIcon sx={myIconStyle} />
          </IconButton>
        </DrawerHeader>

        <Box>
            <h5>Output Option</h5>
            <div className='myBgBtnDiv'>
                <button className='myBtn'>Cutout</button>
                <button className='myBtn'>Mask</button>
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
                        <Tooltip title="Add background image" arrow><AddToPhotosIcon sx={myIconStyle} /></Tooltip>
                    </div>
                    <div className='bgMenuItem'>
                        <h5>Color</h5>
                        <Tooltip title="Add background color" arrow><PaletteIcon sx={myIconStyle} /></Tooltip>
                    </div>
                    <div>
                        <div className='bgMenuItem'>
                            <h5>Blur</h5>
                            <h5>0</h5>
                        </div>
                        <Slider
                            sx={{width: '80%', margin: 'auto'}}
                            size="small"
                            defaultValue={0}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <div className='bgMenuItem'>
                        <h5>Width</h5>
                        <MyInput
                            placeholder="width in pixels"
                            id="my-input-box"
                        />
                    </div>
                    <div className='bgMenuItem'>
                        <h5>Height</h5>
                        <MyInput
                            placeholder="height in pixels"
                            id="my-input-box"
                        />
                    </div>
                </div>
            </Box>
        </Box>

        <Box>
            <h5>Scale</h5>
            <div className='myBgBtnDiv'>
                <button className='myBtn'>Fit</button>
                <button className='myBtn'>Fill</button>
            </div>
        </Box>

    </Box>
  )
}



export default RemoveBg;