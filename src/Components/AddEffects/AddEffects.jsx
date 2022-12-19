import React, { useState, useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import './AddEffects.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from '@mui/material/Grid';
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

    const myHeadersList = {
        "accept": "application/json",
        "X-Picsart-API-Key": "C53uQt0Nvy0FcZUTG92OVBI5kLhzEyJM"
    };
    
    const myUrl = "https://api.picsart.io/tools/1.0/effects/previews";

    const myUrl2 = "https://api.picsart.io/tools/1.0/effects";

    const { uploadedPicture, setUploadedPicture } = useContext(UploadedPictureContext);

    const [uploadedPictureID, setUploadedPictureID] = useState("");

    useEffect(() =>{
        setUploadedPictureID(Object.freeze(uploadedPicture.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [myEffectSrc, setMyEffectSrc] = useState({
        "icy1": { id: "", url: "" },
        "icy2": { id: "", url: "" },                                                                                        
        "icy3": { id: "", url: "" }, 
        "brnz1": { id: "", url: "" }, 
        "brnz2": { id: "", url: "" }, 
        "brnz3": { id: "", url: "" }, 
        "mnch1": { id: "", url: "" }, 
        "mnch2": { id: "", url: "" }, 
        "mnch3": { id: "", url: "" }, 
        "noise": { id: "", url: "" }, 
        "saturation": { id: "", url: "" }, 
        "cyber1": { id: "", url: "" }, 
        "cyber2": { id: "", url: "" }, 
        "food1": { id: "", url: "" }, 
        "food2": { id: "", url: "" }, 
        "nature1": { id: "", url: "" }, 
        "nature2": { id: "", url: "" }, 
        "urban1": { id: "", url: "" }, 
        "urban2": { id: "", url: "" }, 
        "water1": { id: "", url: "" }, 
        "water2": { id: "", url: "" }, 
        "shadow1": { id: "", url: "" }, 
        "shadow2": { id: "", url: "" }, 
        "sketcher2": { id: "", url: "" }
    })

    const [openAddEffects, setOpenAddEffects] = useState('block');

    const [openBackdrop, setOpenBackdrop] = useState(false);

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };

    const handleToggleBackdrop = () => {
        setOpenBackdrop(!openBackdrop);
    };

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
        width: '95%', 
        margin: 'auto', 
        position: 'relative',
        overflow: 'auto',
        maxHeight: 695
    }

    const myEffectsStyle = {
        margin: 'auto', 
        width: '90px', 
        height: '90px', 
        backgroundColor: '#ffffff', 
        borderRadius: '1rem', 
        cursor: 'pointer',
        overflow: 'hidden',
        objectFit: 'contain'
    }

    const myParagraphStyle = {
        margin: '0 auto 10px', 
        width: '100px', 
    }

    useEffect(() => {
        if (uploadedPicture.id !== "") {
            handleToggleBackdrop();
            async function previewMyEffects() {
              let headerslist = myHeadersList;
              let randomVal = 0;
              while (randomVal < myEffects.length) {
                let myEffectsPrototype = myEffects.slice(randomVal, (randomVal + 10));
                let bodyContent = new FormData();
                bodyContent.append("image_id", uploadedPicture.id);
                bodyContent.append("format", "JPG");
                bodyContent.append("preview_size", 90);
                bodyContent.append("effect_names", myEffectsPrototype.toString());

                let response = await fetch(myUrl, {
                    method: "POST",
                    body: bodyContent,
                    headers: headerslist
                });

                if (response.status === 200) {
                    let data = await response.json();
                    for (let i = 0; i < myEffectsPrototype.length; i++) {
                        setMyEffectSrc(prevState => {
                            return {
                                ...prevState,
                                [myEffectsPrototype[i]]: {
                                    id: data?.data[i]?.id,
                                    url: data?.data[i]?.url
                                }
                            }
                        })
                    }
                } else {
                    let error = await response.json();
                    console.log(error);
                }
                randomVal += 10;
              }
               handleCloseBackdrop();
            }
        previewMyEffects();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleAddEffectFn = (effect) => {
        if (uploadedPictureID !== "") {
            handleToggleBackdrop();
            async function AddEffect() {
              let headerslist = myHeadersList;
              let bodyContent = new FormData();
              bodyContent.append("image_id", uploadedPictureID);
              bodyContent.append("format", "JPG");
              bodyContent.append("effect_name", effect);

              let response = await fetch(myUrl2, {
                  method: "POST",
                  body: bodyContent,
                  headers: headerslist
              });
              if (response.status === 200) {
                  let data = await response.json();
                  setUploadedPicture({
                    id: data.data.id,
                    url: data.data.url
                });
                handleCloseBackdrop();
            } else {
                handleCloseBackdrop();
                let error = await response.json();
                console.log(error);
        }};
        AddEffect();
    }};

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
                        myEffects.map((effect, index) => {
                            const myEffectObj = myEffectSrc[effect];
                            return (
                            <Grid key={index}>
                                <Box
                                    style={myEffectsStyle}
                                    component="img"
                                    src={myEffectObj.url}
                                    // alt={effect}
                                    onClick={(event) => handleAddEffectFn(effect)}
                                />
                                <p style={myParagraphStyle}>{effect}</p>
                            </Grid>
                        )})
                    }
                </Grid>
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


export default AddEffects;