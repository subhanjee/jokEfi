 "use client";
import React from "react";

function Animation() {
  return (
    <div className="py-3 z-50">
    <div className="overflow-hidden bg-black text-white text-center p-3 shadow-2xl whitespace-nowrap relative z-50">
      <div className="flex animate-scroll space-x-4 text-sm">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</span>
        {/* Duplicate content for seamless scroll */}
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit |</span>
      </div>
    </div>
    </div>
  );
}

export default Animation;
