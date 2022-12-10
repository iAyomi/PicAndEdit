import React, { useState } from 'react';
import './Upscale.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));




const Upscale = () => {

  const [openEnhance, setOpenEnhance] = useState('block');

  const [upscale, setUpscale] = useState('');

  const closeEnhance = () => {
    setOpenEnhance('none');
  };

  const handleUpscaleChange = (event) => {
    setUpscale(event.target.value);
  };

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
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'2x'}>2x</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'4x'}>4x</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'6x'}>6x</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'8x'}>8x</MenuItem>
                </Select>
            </FormControl>
        </Box>

    </Box>
  )
}



export default Upscale;