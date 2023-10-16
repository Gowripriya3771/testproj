import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Moviedetails from './Components/Moviedetails'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import App from './App';
import Login from './Components/Pages/Login';
import Carousal from './Components/Carousal';
import Player from './Components/Player';
import Genre from './Components/Genre';
import Protected from './Components/Protected';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        
        <Route path='/' element={<Login/>}/>
        <Route path='/app' element={<App/>}/>
        <Route path='/carousal' element={<Carousal/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/details/:id' element={<Moviedetails/>}/> */}
        <Route
          path="/details/:id"
          element={
            <Protected>
              <Moviedetails />
            </Protected>
          }
        />
        <Route path='/player' element={<Player/>}/>
        <Route path='/genre' element={<Genre/>}/>
      </Routes>
    </Router>
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
