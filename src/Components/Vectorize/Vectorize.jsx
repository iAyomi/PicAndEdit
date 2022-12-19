import React, { useState, useContext } from 'react';
import { alpha, styled } from '@mui/material/styles';
import './Vectorize.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
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

    const myHeadersList = {
        "accept": "application/json",
        "X-Picsart-API-Key": "7wQjPap0FmHPotOgrYkpRGyF0oq1I09O"
    }
    
    const myUrl = "https://api.picsart.io/tools/1.0/vectorizer";

    const { uploadedPicture, setUploadedPicture } = useContext(UploadedPictureContext);

    const [openVectorize, setOpenVectorize] = useState('block');

    const myDrawerStyle = {
        width: 220,
        height: '100%',
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

    const [downscaleVal, setDownscaleVal] = useState("2048");

    const [openBackdrop, setOpenBackdrop] = useState(false);

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };

    const handleToggleBackdrop = () => {
        setOpenBackdrop(!openBackdrop);
    };

    const closeVectorize = () => {
        setOpenVectorize('none')
    }

    const handleVectorizeFn = () => {
        if (uploadedPicture.id !== "") {
            handleToggleBackdrop();
            async function vectorizeImage() {
              let headerslist = myHeadersList;
              let bodyContent = new FormData();
              bodyContent.append("image_id", uploadedPicture.id);
              bodyContent.append("downscale_to", downscaleVal);
             
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
        vectorizeImage();
    }}

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
                    value={downscaleVal}
                    id="my-input-box"
                    onChange={(event) => {setDownscaleVal(event.target.value)}}
                />
            </div>
            <p>Large images can be downscaled.</p>
            <p>Enter <b style={{fontWeight: '700'}}>-1</b> to turn off downscaling</p>
            <p>Otherwise, output image is scaled by 0.5 until max(width, height) &lt; downscale value </p>
        </Box>

        <Box style={{ marginTop: '40px' }}>
          <button className='myBtn' onClick={handleVectorizeFn}>Done</button>
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


export default Vectorize;



