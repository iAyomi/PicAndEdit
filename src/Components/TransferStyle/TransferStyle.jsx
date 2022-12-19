import React, { useState, useRef, useContext } from 'react';
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


const TransferStyle = () => {

    const fileInputRef = useRef();

    const myHeadersList = {
        "accept": "application/json",
        "X-Picsart-API-Key": "7wQjPap0FmHPotOgrYkpRGyF0oq1I09O"
    }
    
    const myUrl = "https://api.picsart.io/tools/1.0/styletransfer";

    const { uploadedPicture, setUploadedPicture } = useContext(UploadedPictureContext);

    const [openStyleTransfer, setOpenStyleTransfer] = useState('block');

    const [levelOfTransfer, setLevelOfTransfer] = useState('');

    const [referenceImage, setReferenceImage] = useState(null);

    const [openBackdrop, setOpenBackdrop] = useState(false);

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };

    const handleToggleBackdrop = () => {
        setOpenBackdrop(!openBackdrop);
    };

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
        fileInputRef.current.click();
    }

    const handleAddImageInputChnage = (event) => {
        const file = event.target.files[0];
        if (file && file.type.substr(0, 5) === "image") {
            setReferenceImage(file);
    }}

    const handleTransferStyleFn = () => {
        if (uploadedPicture.id !== "") {
            handleToggleBackdrop();
            async function transferStyle() {
              let headerslist = myHeadersList;
              let bodyContent = new FormData();
              bodyContent.append("image_id", uploadedPicture.id);
              bodyContent.append("format", "JPG");
              bodyContent.append("level", levelOfTransfer);
              bodyContent.append("reference_image", referenceImage);

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
        }};
        transferStyle();
    }};

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
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={"l1"}>level 1</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={"l2"}>level 2</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={"l3"}>level 3</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={"l4"}>level 4</MenuItem>
                    <MenuItem sx={{fontSize: '0.8rem', fontWeight: '600'}} value={"l5"}>level 5</MenuItem>
                </Select>
            </FormControl>
        </Box>

        <div className='bgMenuItem'>
            <h5>Reference Image</h5>
            <input 
                style={{display: 'none'}}
                type='file'
                ref={fileInputRef}
                accept='image/*'
                onChange={handleAddImageInputChnage}
            />
            <Tooltip title="Add reference image" arrow><AddToPhotosIcon sx={myIconStyle} onClick={handleAddReferenceImage} /></Tooltip>
        </div>

        <Box style={{ marginTop: '40px' }}>
          <button className='myBtn' onClick={handleTransferStyleFn}>Done</button>
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



export default TransferStyle;