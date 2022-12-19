import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Services/routes';
import { UploadedPictureContext } from './Services/Contexts/UploadedPicture';
import { MainPaletteContext } from './Services/Contexts/MainPaletteContext';


function App() {

  const [uploadedPicture, setUploadedPicture] = useState({
    id: "",
    url: ""
  });

  const [myMainPaletteStyle, setMyMainPaletteStyle] = useState({
    position: "static",
    bottom: "none",
    right: "none",
    width: "98%"
});

  return (
    <UploadedPictureContext.Provider value={{uploadedPicture, setUploadedPicture}}>
      <MainPaletteContext.Provider value={{myMainPaletteStyle, setMyMainPaletteStyle}}>
        <Router>
          <div>

            <Navbar />

            <Routes>
            {
              Object.entries(routes).map(([route, Component]) => (
                <Route key={route} path={route} element={<Component />} />
              ))
            }
          </Routes>

          <Footer />

          </div>
        </Router>
      </MainPaletteContext.Provider>
    </UploadedPictureContext.Provider>
  );
}


export default App;
