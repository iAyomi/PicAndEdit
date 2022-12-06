import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Services/routes';


function App() {
  return (
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
  );
}


export default App;
