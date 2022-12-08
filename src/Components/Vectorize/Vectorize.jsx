import React, { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import './Vectorize.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
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
    fontSize: 14,
    fontWeight: '550',
    width: '50%',
    margin: 'auto',
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


const Vectorize = () => {

    const [openVectorize, setOpenVectorize] = useState('block');

    const myDrawerStyle = {
        width: 220,
        height: '92%',
        bgcolor: '#161a25',
        borderLeft: '2.5px solid #ffffff',
        color: '#646d86',
        display: openVectorize
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

    const closeVectorize = () => {
        setOpenVectorize('none')
    }

  return (
    <Box
        sx={myDrawerStyle}
    >
        <DrawerHeader>
          <IconButton onClick={closeVectorize} sx={{bgcolor: '#000000'}}>
            <CancelIcon sx={myIconStyle} />
          </IconButton>
        </DrawerHeader>

        <Box>
            <h5>Downscale Image</h5>
            <div>
                <MyInput
                    placeholder="downscale to"
                    defaultValue="2048"
                    id="my-input-box"
                />
            </div>
            <p>Large images can be downscaled.</p>
            <p>Enter <b style={{fontWeight: '700'}}>-1</b> to turn off downscaling</p>
            <p>Otherwise, output image is scaled by 0.5 until max(width, height) &lt; downscale value </p>
        </Box>

    </Box>
  )
}


export default Vectorize;



