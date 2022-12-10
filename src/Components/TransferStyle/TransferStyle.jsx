import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import './TransferStyle.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Tooltip from '@mui/material/Tooltip';
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




const TransferStyle = () => {

    const [openStyleTransfer, setOpenStyleTransfer] = useState('block');

    const [levelOfTransfer, setLevelOfTransfer] = useState('');

    const handleChange = (event) => {
        setLevelOfTransfer(event.target.value);
      };

    const closeTransferStyle = () => {
        setOpenStyleTransfer('none');
    };

    const myDrawerStyle = {
        width: 220,
        height: '100%',
        bgcolor: '#161a25',
        borderLeft: '2.5px solid #ffffff',
        color: '#646d86',
        display: openStyleTransfer
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

    const handleAddReferenceImage = () => {

    }

  return (
    <Box
        sx={myDrawerStyle}
    >
        <DrawerHeader>
          <IconButton onClick={closeTransferStyle} sx={{bgcolor: '#000000'}}>
            <CancelIcon sx={myIconStyle} />
          </IconButton>
        </DrawerHeader>

        <Box>
            <h5>Level of style transfer</h5>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small" style={{fontSize: '0.8rem', color: '#646d86', fontWeight: '600'}}>Level</InputLabel>
                <Select
                    sx={{fontSize: '0.8rem', fontWeight: '600', color: '#ffffff'}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={levelOfTransfer}
                    label="Level"
                    onChange={handleChange}
                >
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={11}>11</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={12}>12</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={13}>13</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={14}>14</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={15}>15</MenuItem>
                </Select>
            </FormControl>
        </Box>

        <div className='bgMenuItem'>
            <h5>Reference Image</h5>
            <Tooltip title="Add reference image" arrow><AddToPhotosIcon sx={myIconStyle} onClick={handleAddReferenceImage} /></Tooltip>
        </div>

    </Box>
  )
}



export default TransferStyle;