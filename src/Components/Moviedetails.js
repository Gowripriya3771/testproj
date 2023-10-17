import React from "react";
import "./Moviedetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

function Moviedetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const movieId = location.pathname.split("/")[2];
  const parsed = JSON.parse(localStorage.getItem("mov"));
  const filtermovie = parsed.filter((obj) => obj["id"] == movieId);
  const category = filtermovie.map((ob) => ob["genres"]);
  const category1 = category[0][0];
  const rails = parsed.filter((obj) => obj["genres"].includes(category1));

  return (
    <div className="main" style={{ top: "0px" }}>
      <div className="content">
        <button
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            background: "none",
            border: "none",
          }}
          onClick={() => navigate(-1)}
        >
          <IoArrowBackSharp size={30} />
        </button>
      </div>

      {filtermovie.map((obj) => (
        <div
          className="container"
          // style={{
          //   backgroundImage: `url("${obj.posterUrl}")`,
          //   transform: "scale(1.2)",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",

          //   filter: "blur(8px) brightness(0.62)",
          //   // backdropFilter:"blur(20px)",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          {/* <div className="detailsImage"> */}
            <div className="posterimage">
              <img
                src={obj["posterUrl"]}
                alt="posterimg"
                onError={(e) => {
                  e.target.src =
                    "https://avatars.mds.yandex.net/i?id=71493716d56d08ae0bdd88c50f30e326-5855935-images-thumbs&n=13";
                }}
              />
            </div>

            <div className="poster-details">
              <h1>{obj["title"]}</h1>
              <p>
                {obj["year"]}&nbsp;&nbsp;&nbsp;{obj["runtime"]} min
              </p>
              <p>
                <b>{obj["genres"].join(" | ")} </b>
              </p>
              <p>{obj["plot"]}</p>
              <div className="buttons">
                <button className="red-btn" onClick={() => navigate("/player")}>
                  Watch Trailer
                </button>
              </div>
            </div>
          {/* </div> */}
        </div>
      ))}
      <div className="row-poster">
        <h1> Watch Similar Movies</h1>
        <div className="poster-list">
          {rails.map((obj) => (
            <img 
              key={obj["id"]}
              src={obj["posterUrl"]}
              alt="movie poster"
              onClick={() => navigate(`/details/${obj["id"]}`)}
              onError={(e) => {
                e.target.src =
                  "https://avatars.mds.yandex.net/i?id=71493716d56d08ae0bdd88c50f30e326-5855935-images-thumbs&n=13";
              }}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Moviedetails;
