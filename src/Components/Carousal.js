import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieData } from "./MovieData";
import "./Carousal.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function Carousal() {
  const navigate = useNavigate();
  const navigate1 = useNavigate();
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3600,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {MovieData.map((obj) => (
          <SwiperSlide>
            <div className="carousal1">
              <div
                style={{
                  backgroundImage: `url("${obj.Poster}")`,
                  transform: "scale(1.2)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  filter: "blur(8px) brightness(0.62)",
                  width: "100%",
                  height: "100%",
                }}
              ></div>

              <div className="carousaldetail">
                <div className="carousalimage">
                  <img
                    onClick={() => navigate(`/details/${obj.id}`)}
                    src={obj.Poster}
                  ></img>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    marginTop: "30px",
                  }}
                  className="carousaltitle"
                >
                  <h1 style={{ color: "white" }}>{obj.Title}</h1>
                  <p style={{ maxWidth: "400px" }}>{obj.Description}</p>
                  <div>
                    <button
                      onClick={() => navigate1("/player")}
                      style={{
                        width: "130px",
                        height: "40px",
                        color: "white",
                        // background: "linear-gradient(#4a2caf7c, #43006c1b 70%)",
                        backgroundColor: "darkblue",
                        border: "none",
                        borderRadius: "10px",
                        zIndex:"1000"
                      }}
                    >
                      Watch Trailer
                    </button>
                    {/* <button className="red-btn" onClick={() => navigate("/player")}> */}
                    {/* Watch Trailer */}
                    {/* </button> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
