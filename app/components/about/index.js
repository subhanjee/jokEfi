import React from "react";
import "./style.css";
import qout from "../../../public/images/Group 6.png";
import qout1 from "../../../public/images/Group 4.png";
import qout2 from "../../../public/images/Group 5.png";
import random from "../../../public/images/Group 7.png";
import random1 from "../../../public/images/Vector (22).png";
import random2 from "../../../public/images/image 15 (2).png";
import random3 from "../../../public/images/image 15 (3).png";
import random4 from "../../../public/images/image 14.png";
import random5 from "../../../public/images/Vector (28).png";
import random6 from "../../../public/images/image 10.png";
import Image from "next/image";
function About() {
  return (
    <div className="main-about">
      <div>
        <h3 className="text-center font-medium text-2xl text-black">About</h3>
        <h2 className="text-center font-semibold text-4xl text-black ">We Meme Business!</h2>
        <div className="bg-about">
          <div className="grid grid-cols-1  md:grid-cols-3">
            <div className="flex justify-center items-center">
              <Image src={qout} alt="" className="" />
            </div>

            <div className="flex justify-center items-center">
              <Image src={qout2} alt="" className="" />
            </div>

            <div className="flex justify-center items-center">
              <Image src={qout1} alt="" className="" />
            </div>
          </div>
          <div className="flex justify-center items-center relative z-50">
          <div className="p-[2px] rounded-3xl bg-gradient-to-b from-orange-300 to-purple-300">
          <div className="py-5 px-5 md:py-8 md:px-12 bg-white rounded-3xl ">
              <h1 className="text-center font-medium text-4xl text-black">Roadmap</h1>
              <div className="div-pos-road text-black">
                <h2 className="text-center font-bold text-4xl mb-5">Q4 2024</h2>
                <p className="text-center  text-1xl  ">
                Launch of the funniest<br/> MEME in Crypto called<br/> “$JOKE”
                </p>
                {/* <Image src={random5} alt="" className="pos-vec-roadmbl" /> */}
              </div>
              <div className="div-pos-road1 text-black">
              <h2 className="text-center font-bold text-4xl mb-5">Q1 2025</h2>
                <p className="text-center  text-1xl">
                $JOKE will create 1 Million<br/> Jokes and Memes.
                </p>
                <Image src={random2} alt="" className=" pos-vec-road1" />
              </div>
              <div className="div-pos-road2 text-black">
              <h2 className="text-center font-bold text-4xl mb-5">Q2 2025</h2>
                <p className="text-center  text-1xl">
                Build the AI Joke Generator<br/> for social media.
                </p>
                <Image src={random1} alt="" className="pos-vec-road" />
                <Image src={random3} alt="" className="pos-vec-road2" />
                {/* <Image src={random6} alt="" className="pos-vec-roadmbl1" /> */}
              </div>
              <div className="div-pos-road3 text-black">
              <h2 className="text-center font-bold text-4xl mb-5">Q3 2025</h2>
                <p className="text-center  text-1xl">
                Bringing 1 Billion+ users to<br/> JokeVerse.
                </p>
                <Image src={random4} alt="" className="pos-vec-road3" />
              </div>
              <Image src={random} alt="" className="w-96 "  />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
