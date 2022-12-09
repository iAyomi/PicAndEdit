import React, { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import './GenTexture.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import Slider from '@mui/material/Slider';
import InputBase from '@mui/material/InputBase';
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


const MyInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 10,
      fontWeight: '550',
      width: 80,
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



const GenTexture = () => {

    const [openGenTexture, setOpenGenTexture] = useState('block');

    const [patternOfBgTexture, setPatternOfBgTexture] = useState('hex');

    const [rotateVal, setRotateVal] = useState(0);

    const closeGenTexture = () => {
        setOpenGenTexture('none');
    };

    const handleChange = (event) => {
        setPatternOfBgTexture(event.target.value);
    };

    const myDrawerStyle = {
        width: 220,
        height: '92%',
        bgcolor: '#161a25',
        borderLeft: '2.5px solid #ffffff',
        color: '#646d86',
        display: openGenTexture
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
          <IconButton onClick={closeGenTexture} sx={{bgcolor: '#000000'}}>
            <CancelIcon sx={myIconStyle} />
          </IconButton>
        </DrawerHeader>

        <div className='bgMenuItem'>
            <h5>Width</h5>
            <MyInput
                placeholder="width in pixels"
                id="my-input-box"
                defaultValue={1024}
            />
        </div>

        <div className='bgMenuItem'>
            <h5>Height</h5>
            <MyInput
                placeholder="height in pixels"
                id="my-input-box"
                defaultValue={1024}
            />
        </div>

        <div className='bgMenuItem'>
            <h5>Offset-X</h5>
            <MyInput
                placeholder="in pixels"
                id="my-input-box"
                defaultValue={0}
            />
        </div>

        <div className='bgMenuItem'>
            <h5>Offset-Y</h5>
            <MyInput
                placeholder="in pixels"
                id="my-input-box"
                defaultValue={0}
            />
        </div>

        <Box>
            <h5>Pattern for Background Texture</h5>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small" style={{fontSize: '0.8rem', color: '#646d86', fontWeight: '600'}}>Pattern</InputLabel>
                <Select
                    sx={{fontSize: '0.8rem', fontWeight: '600', color: '#ffffff'}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={patternOfBgTexture}
                    label="Pattern"
                    onChange={handleChange}
                >
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'hex'}>hex</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'mirror'}>mirror</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'diamond'}>diamond</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'hex2'}>hex2</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={'tile'}>tile</MenuItem>
                </Select>
            </FormControl>
        </Box>

        <Box style={myBoxStyle}>
            <div className='adjustOption'>
                <h5>Rotate</h5>
                <h5>{rotateVal}</h5>
            </div>
            <Slider
                sx={mySliderStyle}
                min={-180}
                max={180}
                size="small"
                value={rotateVal}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {setRotateVal(newValue)}}
            />
        </Box>

        <div>
            <div className='bgMenuItem'>
                <h5>Scale</h5>
                <MyInput
                    placeholder="enter a number"
                    id="my-input-box"
                    defaultValue={1.0}
                />
            </div>
            <p>Enter a floating point number between 0.0 - 10.0</p>
            <p>Default scale value is 1.0</p>
        </div>

        

    </Box>
  )
}



export default GenTexture;