import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import './AddEffects.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
// import { experimentalStyled as myStyling } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


// const Item = myStyling(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));


const myEffects = [
    'icy1', 
    'icy2', 
    'icy3', 
    'brnz1', 
    'brnz2', 
    'brnz3', 
    'mnch1', 
    'mnch2', 
    'mnch3', 
    'noise',
    'saturation',
    'cyber1',
    'cyber2',
    'food1',
    'food2',
    'nature1',
    'nature2',
    'urban1',
    'urban2',
    'water1',
    'water2',
    'shadow1',
    'shadow2',
    'sketcher2'
]


const AddEffects = () => {

    const [openAddEffects, setOpenAddEffects] = useState('block');

    const closeAddEffects = () => {
        setOpenAddEffects('none');
    };

    const myDrawerStyle = {
        width: 220,
        height: '100%',
        bgcolor: '#161a25',
        borderLeft: '2.5px solid #ffffff',
        color: '#646d86',
        display: openAddEffects
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

    const myEffectBoxStyle = {
        width: '90%', 
        margin: 'auto', 
        position: 'relative',
        overflow: 'auto',
        maxHeight: 700
    }

    const myEffectsStyle = {
        margin: 'auto', 
        width: '90px', 
        height: '90px', 
        backgroundColor: '#ffffff', 
        borderRadius: '1rem', 
        cursor: 'pointer'
    }

  return (
    <Box
        sx={myDrawerStyle}
    >
        <DrawerHeader>
          <IconButton onClick={closeAddEffects} sx={{bgcolor: '#000000'}}>
            <CancelIcon sx={myIconStyle} />
          </IconButton>
        </DrawerHeader>

        <Box sx={myEffectBoxStyle}>
                <Grid container rowSpacing={0} columnSpacing={0}>
                    {
                        myEffects.map((effect, index) => (
                            <Grid xs={6} key={index}>
                                <div style={myEffectsStyle}></div>
                                <p>{effect}</p>
                            </Grid>
                        ))
                    }
                </Grid>
            {/* </List> */}
            
        </Box>

    </Box>
  )
}


export default AddEffects;