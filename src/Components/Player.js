import React from "react";
import { useNavigate } from "react-router-dom";
import "./Player.css";
import { IoArrowBackSharp } from "react-icons/io5";

// function Player() {
//     const navigate=useNavigate()
//   return (
//     <div>

//        <div><button style={{color:"black"}} onClick={() => navigate(-1)}>Back</button></div>
//        <h1 style={{color:"white",textAlign:"center"}}>Watch Trailer</h1>
//        <div className='player' >
//       <video style={{marginLeft:"65px",marginTop:"55px"}} width="750" height="500" autoPlay controls >
//       <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4"/>
//      </video>
//      </div>
//     </div>
//   )
// }

// export default Player

function Player() {
  const navigate = useNavigate();
  return (
    <div className="trailer">
      <div className="backimg" style={{display:"flex",alignItems:"center"}}>
        <button
          style={{
            color: "white",
            display: "flex",
            background: "none",
            border: "none",
            padding: "5px",
          }}
          onClick={() => navigate(-1)}
        >
          <IoArrowBackSharp size={24} />
        </button>
        <div style={{display:"flex",justifyContent:"flex-start"}}>
        <h1 style={{ color: "white", textAlign: "center",fontSize:"20px" }}>Watch Trailer</h1>
        </div>
        
      </div>

      {/* <div><button style={{color:"black"}} onClick={() => navigate(-1)}>Back</button></div>  */}

      <div
        className="player"
        id="player1"
        style={{ marginTop: "5px", height: "fit-content", width: "100%" }}
      >
        <video width="100%" height="70%" autoPlay controls>
          <source
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default Player;
