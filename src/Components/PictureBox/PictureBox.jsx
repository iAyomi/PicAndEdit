import React, { useContext } from 'react';
import './PictureBox.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { UploadedPictureContext } from '../../Services/Contexts/UploadedPicture';


const PictureBox = () => {

    const { uploadedPicture } = useContext(UploadedPictureContext)

    const url = uploadedPicture.url

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
                    src={url}
                    alt="UploadedBgImage"
                />
            </TransformComponent>
        </TransformWrapper>
    </span>
  )
}


export default PictureBox;