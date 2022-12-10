import React from 'react';
import './PictureBox.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Box from '@mui/material/Box';


const PictureBox = () => {

    const myImageBoxStyle = {
        position: 'relative',
        height: '90vh',
        width: '70%',
        margin: 'auto',
    }

  return (
    <span style={myImageBoxStyle}>
        <TransformWrapper>
            <TransformComponent>
                <img
                    className='imageBox'
                    src={process.env.PUBLIC_URL + "./images/PicAndEditBG.jpg"}
                    alt="UploadedBgImage"
                />
            </TransformComponent>
        </TransformWrapper>
    </span>
    
  )
}


export default PictureBox;