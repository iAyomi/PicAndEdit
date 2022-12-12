import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import './PaletteHeader.css';
import { UploadedPictureContext } from '../../Services/Contexts/UploadedPicture';


const PaletteHeader = () => {

  const { uploadedPicture } = useContext(UploadedPictureContext)

  const width = uploadedPicture.width === "" ? "" : uploadedPicture.width + "px";

  const height = uploadedPicture.height === "" ? "" : uploadedPicture.height + "px";

  const size = uploadedPicture.size === "" ? "" : uploadedPicture.size + 'MB'

  return (
    <Box className="myPaletteHeader">
        <h6 className="myPaletteHeaderText">{"Upload"} &nbsp;&nbsp; | &nbsp;&nbsp; W: <span>{width}</span> &nbsp; H: <span>{height}</span> &nbsp;&nbsp; | &nbsp;&nbsp; Image Size: <span>{size}</span> </h6>
    </Box>
  )
}



export default PaletteHeader;