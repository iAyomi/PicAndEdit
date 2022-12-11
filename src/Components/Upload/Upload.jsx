import React, { useRef, useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import "./Upload.css";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import { useNavigate } from "react-router-dom";
import { UploadedPictureContext } from '../../Services/Contexts/UploadedPicture';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



const Upload = () => {

    const navigate = useNavigate();

    const [openBackdrop, setOpenBackdrop] = useState(false);

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };

    const handleToggleBackdrop = () => {
        setOpenBackdrop(!openBackdrop);
    };

    const { setUploadedPicture } = useContext(UploadedPictureContext);

    const myHeadersList = {
        "accept": "application/json",
        "X-Picsart-API-Key": "74Y5uzphxL3bwB3icSOQAWTk3tHZaqB4"
    };

    const myUrl = "https://api.picsart.io/tools/1.0/upload";

    const [myImgProps, setMyImgProps] = useState({
        "imageFile": null,
        "width": null,
        "height": null,
        "size": null
    })

    useEffect(() => {
        if (myImgProps.imageFile !== null) {
            handleToggleBackdrop();
            async function uploadImage() {
                let headerslist = myHeadersList;
                let bodyContent = new FormData();
                bodyContent.append("image", myImgProps.imageFile);
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
                    navigate("/uploadedpicture");
                }
            }
            uploadImage();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myImgProps]);

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
               , function(evt, value) {
                const url = value;
                const myImgName = url.substring(url.lastIndexOf('/') + 1)

                fetch(url)
                    .then(response => response.blob())
                    .then(blob => new File([blob], `${myImgName}`, {
                        type: blob.type
                    }))
                    .then(file => {
                        var image = new Image();
                        image.src = url;
                        image.onload = function () {
                            var width = this.width;
                            var height = this.height;
                            setMyImgProps({
                                "imageFile": file,
                                "width": width,
                                "height": height,
                                "size": file.size / 1000000
                            })
                    }})}

               , function() { alertify.error('Cancel') });
    }

    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.substr(0, 5) === "image") {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = (e) => {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function () {
                    var width = this.width;
                    var height = this.height;
                    setMyImgProps({
                        "imageFile": file,
                        "width": width,
                        "height": height,
                        "size": file.size / 1000000
                    })
            }}}
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

        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
          onClick={handleCloseBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

    </Box>
  )
}



export default Upload;