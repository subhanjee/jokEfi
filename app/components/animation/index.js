"use client"
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  320: { items: 1 },
  375: { items: 1 },
  425: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
  1440: { items: 4 },
  2560: { items: 5 },
};
const items = [
  // eslint-disable-next-line react/jsx-key
  <div onDragStart={handleDragStart} >
    <p className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  // eslint-disable-next-line react/jsx-key
  <div onDragStart={handleDragStart}>
    <p className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  // eslint-disable-next-line react/jsx-key
  <div onDragStart={handleDragStart}>
    <p className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  // eslint-disable-next-line react/jsx-key
  <div onDragStart={handleDragStart}>
    <p className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  // eslint-disable-next-line react/jsx-key
  <div onDragStart={handleDragStart}>
    <p className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  // eslint-disable-next-line react/jsx-key
  <div onDragStart={handleDragStart}>
    <p className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  // eslint-disable-next-line react/jsx-key
  <div onDragStart={handleDragStart}>
    <p className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
];
function Animation() {
  return (
    <div className="py-2">
    <div className="flex justify-center items-center bg-black text-white text-sm  text-center  p-3 shadow-2xl">
    <AliceCarousel
      mouseTracking
      items={items}
      disableDotsControls
      disableSlideInfo
      disableButtonsControls
      autoPlay
      animationDuration={2000}
      infinite
      responsive={responsive}
    />
  </div>
  </div>
  );
}

export default Animation;
