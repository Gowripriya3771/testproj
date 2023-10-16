import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Player.css";

function Player() {
    const navigate=useNavigate()
  return (
    <div>
      
       <div><button style={{color:"black"}} onClick={() => navigate(-1)}>Back</button></div> 
       <h1 style={{color:"white",textAlign:"center"}}>Watch Trailer</h1>
       <div className='player' >
      <video style={{marginLeft:"65px",marginTop:"55px"}} width="750" height="500" autoPlay controls >
      <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4"/>
     </video>
     </div>
    </div>
  )
}

export default Player

