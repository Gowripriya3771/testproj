import React from "react";
import "./Moviedetails.css";
import { useLocation, useNavigate } from "react-router-dom";



function Moviedetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const movieId = location.pathname.split('/')[2];
  const parsed = JSON.parse(localStorage.getItem("mov"))
  const filtermovie = parsed.filter(obj => obj['id'] == movieId);
  const category = filtermovie.map(ob => ob['genres'])
  const category1 = category[0][0]
  const rails = parsed.filter(obj => obj['genres'].includes(category1));

  return (
    <div className="container">
      <button style={{color:"Black"}} onClick={() => navigate("/app")}>Back</button>
      
      {
        
        filtermovie.map(obj =>
          <div className="main">
            <div className="first-section">
              <img onError={(e) => {
                e.target.src =
                  "https://avatars.mds.yandex.net/i?id=71493716d56d08ae0bdd88c50f30e326-5855935-images-thumbs&n=13";
              }}
                src={obj["posterUrl"]}
                alt="poster"
              />
            </div>
            <div className="second-section">
              <h1 className="bg-transparent"><em className="bg-transparent">{obj["title"]}</em></h1>
              <div className="bg-transparent">
                <p className="bg-transparent">Year: <em className="bg-transparent"><b className="bg-transparent">{obj["year"]}</b></em></p>
                <p className="bg-transparent">Runtime: <em className="bg-transparent"><b className="bg-transparent">{obj["runtime"]}</b></em></p>
              </div>
              <p className="bg-transparent">Genre: <em className="bg-transparent"><b className="bg-transparent">{obj["genres"]}</b></em></p>
              <p className="bg-transparent">Director: <em className="bg-transparent"><b className="bg-transparent">{obj["director"]}</b></em></p>
              <p className="bg-transparent">Actors: <em className="bg-transparent"><b className="bg-transparent">{obj["actors"]}</b></em></p>
              <p className="bg-transparent">Plot: <em className="bg-transparent"><b className="bg-transparent">{obj["plot"]}</b></em></p>
              <button onClick={()=>navigate("/player")} style={{color:"darkblue", backgroundColor:"white",border:"darkblue"}}>Watch Trailer</button>
             
            </div>
          </div>)
      }
      <div className="row-poster">
        <h1> Watch Similar Movies</h1>
        <div className="poster-list">
          {
            rails.map(obj => <img
              key={obj['id']}
              src={obj['posterUrl']}
              alt="movie poster"
              onClick={() => navigate(`/details/${obj['id']}`)}
              onError={(e) => {
                e.target.src = "https://avatars.mds.yandex.net/i?id=71493716d56d08ae0bdd88c50f30e326-5855935-images-thumbs&n=13"
              }}
            ></img>)
          }

        </div>
        
      </div>

    </div>

  );
}

export default Moviedetails;