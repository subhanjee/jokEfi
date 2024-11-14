 "use client";
import React from "react";
import cloud from "../../../public/images/Yuppies Doodle Cloud 2.png";
import Image from "next/image";

function Animation() {
  return (
    <div className=" py-5 z-50">
            <Image src={cloud} alt="abc" className="bac-immm" />

    <div className="overflow-hidden bg-black text-white text-center p-4 shadow-2xl whitespace-nowrap relative z-50">
      <div className="flex animate-scroll space-x-4 text-sm">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</h3>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</h3>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</h3>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</h3>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</h3>
        {/* Duplicate content for seamless scroll */}
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</h3>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</h3>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</h3>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</h3>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</h3>
      </div>
    </div>
    </div>
  );
}

export default Animation;
