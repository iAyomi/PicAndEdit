import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Services/routes';
import { UploadedPictureContext } from './Services/Contexts/UploadedPicture';


function App() {

  const [uploadedPicture, setUploadedPicture] = useState({
    id: "",
    url: "",
    action: "",
    width: "",
    height: "",
    size: ""
  });

  return (
    <UploadedPictureContext.Provider value={{uploadedPicture, setUploadedPicture}}>
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
    </UploadedPictureContext.Provider>
  );
}


export default App;
