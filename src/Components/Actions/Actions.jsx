import React, { useState } from 'react';
import "./Actions.css";
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FileUploadIcon from "@mui/icons-material/FileUpload";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CompareIcon from "@mui/icons-material/Compare";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import BlurLinearIcon from "@mui/icons-material/BlurLinear";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import MailIcon from "@mui/icons-material/Mail";
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';


const myStyle={
    width: "30px",
    height: "30px",
    color: '#646d86',
    "&:hover": {
        color: "#ffffff"
    }
}

const styleForMyActionsBox = {
  height: '100vh', 
  width: 'auto', 
  padding: '70px 0 0 0', 
  bgcolor: '#161a25'
}

const myActions = {
    "Upload": {
        id: "1", 
        name: "upload img", 
        logo: <FileUploadIcon sx={myStyle} />, 
        tooltip: "upload any image",
        menu: {
          "upload": {
            menuname: "upload",
            menulink: "/upload",
            action_name: "Upload"
          }
        } 
    },
    "Remove Background": {
        id: "2",  
        name: "remove bg", 
        logo: <WallpaperIcon sx={myStyle} />, 
        tooltip: "remove image background",
        menu: {
          "removeBg": {
            menuname: "remove bg",
            menulink: "/removebackground",
            action_name: "Remove Background"
          }
        } 
    },
    "Enhance": {
        id: "3",  
        name: "enhance img", 
        logo: <CameraEnhanceIcon sx={myStyle} />, 
        tooltip: "enhance image",
        menu: {
          "upscale": {
            menuname: "upscale",
            menulink: "/upscale",
            action_name: "Upscale"
          },
          "upscaleUltra": {
            menuname: "upscale ultra",
            menulink: "/upscaleultra",
            action_name: "Upscale Ultra"
          },
          "upscaleEnhance": {
            menuname: "upscale enhance",
            menulink: "/upscaleenhance",
            action_name: "Upscale Enhance"
          },
          "upscaleFace": {
            menuname: "upscale face",
            menulink: "/upscaleface",
            action_name: "Upscale Face"
          }
        }
    },
    "Add Effects": {
        id: "4",  
        name: "add effects", 
        logo: <AutoFixHighIcon sx={myStyle} />, 
        tooltip: "add effects to image",
        menu: {
          "addEffects": {
            menuname: "add effects",
            menulink: "/addeffects",
            action_name: "Add Effects"
          },
          "addMasks": {
            menuname: "add masks",
            menulink: "/addmasks",
            action_name: "Add Masks"
          }
        }
    },
    "Adjust": {
        id: "5",  
        name: "adjust img", 
        logo: <MailIcon sx={myStyle} />, 
        tooltip: "adjust image properties",
        menu: {
          "adjustImg": {
            menuname: "adjust img",
            menulink: "/adjustimage",
            action_name: "Adjust Image"
          }
        }
    },
    "Transfer Style": {
        id: "6",  
        name: "tf style", 
        logo: <CompareIcon sx={myStyle} />, 
        tooltip: "transfer style from image",
        menu: {
          "transferStyle": {
            menuname: "tf style",
            menulink: "/transferstyle",
            action_name: "Transfer Style"
          }
        }
    },
    "Generate Content": {
        id: "7",  
        name: "gen texture", 
        logo: <BlurLinearIcon sx={myStyle} />, 
        tooltip: "generate textures",
        menu: {
          "generateTexture": {
            menuname: "gen texture",
            menulink: "/generatetexture",
            action_name: "Generate Texture"
          }
        }
    },
    "Convert": {
        id: "8",  
        name: "vectorize", 
        logo: <MergeTypeIcon sx={myStyle} />, 
        tooltip: "vectorize image",
        menu: {
          "vectorize": {
            menuname: "vectorize",
            menulink: "/vectorize",
            action_name: "Vectorize"
          }
        }
    }
}


const StyledMenu = styled((props) => (
    <Menu
      TransitionComponent={Fade}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      backgroundColor: '#646d86',
      marginLeft: '60px',
      minWidth: 80,
      color: '#ffffff',
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '0.3rem 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: '0.7rem',
          color: '#161a25',
        //   marginRight: theme.spacing(1.5),
        },
        '&:hover': {
          backgroundColor: '#232734',
        },
        '&:active': {
          backgroundColor: '#000000',
        },
      },
    },
}));


const Actions = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [myStyledMenuId, setMyStyledMenuId] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (id, event) => {
        setMyStyledMenuId(id);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (action_name) => {
        setMyStyledMenuId(null);
        setAnchorEl(null);
    };

  return (
    <Box>
        <List sx={styleForMyActionsBox}>
            {
                Object.entries(myActions).map(([action, { id, name, logo, tooltip, menu }]) => (
                   <span key={action}>
                    <Tooltip title={tooltip} followCursor >
                         <ListItem className="actionBox" disablePadding onClick={(event) => handleClick(id, event)} >
                            <Box className="actionImgBox">
                                {logo}
                            </Box>
                            <h6 className="actionText">{name}</h6>
                        </ListItem>
                   </Tooltip>

                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                      }}
                      anchorEl={anchorEl}
                      open={ myStyledMenuId === id ? open : false }
                      autoFocus={false}
                      onClose={handleClose}
                    >
                      {
                          Object.entries(menu).map(([menuItem, { menuname, menulink, action_name }]) => (
                              <Link key={menuItem} style={{ color: "#ffffff", textDecoration: "none" }}
                                to={menulink}
                              >
                                <MenuItem style={{fontSize: '0.65rem', fontWeight: '600'}} onClick={(event) => handleClose(action_name)} disableRipple>
                                  {menuname}
                                </MenuItem>
                              </Link>
                          ))
                      }
                    </StyledMenu>
                   </span>
                ))
            }
        </List>
    </Box>
  )
}


export default Actions;