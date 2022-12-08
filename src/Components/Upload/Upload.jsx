import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import "./Upload.css";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';


const Upload = () => {

    const fileInputRef = useRef();

    const handleUploadClick = () => {
        fileInputRef.current.click();
    }
    
    const handleLoadURLClick = (event) => {
        event.preventDefault();
        /*
        * @title {String or DOMElement} The dialog title.
        * @message {String or DOMElement} The dialog contents.
        * @value {String} The default input value. 
        * @onok {Function} Invoked when the user clicks OK button.
        * @oncancel {Function} Invoked when the user clicks Cancel button or closes the dialog.
        *
        * alertify.prompt(title, message, value, onok, oncancel);
        * 
        */
        alertify.prompt( 'Open Image URL', 'Image URL', 'https://example.com/this-image.jpg'
               , function(evt, value) { alertify.success('You entered: ' + value) }
               , function() { alertify.error('Cancel') });
    }

    const handleChange = () => {

    }

  return (
    <Box className='uploadCompBox'>
        <div>
            <h3 className='uploadCompBoxHeader'>Your Favorite Photo Editor</h3>
        </div>
        <div>
            <p className='uploadCompNote'>Welcome to the free modern photo editor by PicAndEdit. Start by clicking on the 
                upload photo button below or load from a URL.
            </p>
        </div>
        <div className='buttonDiv'>
            <button className='btn' onClick={handleUploadClick}>Upload Photo</button>
            <button className='btn' onClick={handleLoadURLClick}>Load Photo URL</button>
        </div>

        <form>
            <input 
                style={{display: 'none'}}
                ref={fileInputRef}
                type='file'
                accept='image/*'
                onChange={handleChange}
            />
        </form>
    </Box>
  )
}



export default Upload;