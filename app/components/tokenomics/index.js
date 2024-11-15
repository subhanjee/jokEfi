// components/Tokenomics.js
import React from "react";
import "./style.css";
import vector from "../../../public/images/Ellipse.png";
import face from "../../../public/images/image15.png";
import vector2 from "../../../public/images/Vector 5.png";
import Image from "next/image";


export default function Tokenomics() {
  return (
    <div className="min-h-screen flex justify-center items-center relative z-50 py-36 md:py-60 px-2"  >
       <div className="p-[2px] rounded-3xl bg-gradient-to-b from-orange-300 to-purple-300">
        <div className="py-5 px-5 md:py-8 md:px-12 bg-white rounded-3xl ">
          <div>
            <h1 className=" text-center font-bold text-4xl text-black">Tokencomics</h1>
            <Image src={face} alt="" className="w-40 h-40 md:w-48 md:h-48" />
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="  font-bold text-xs md:text-xl text-black ">85% Liquidity Pool</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl text-black">5% Reward Wallet</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink1-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl text-black">2% to Xavier &zwnj; &zwnj;  &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink4-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl text-black">2% to Mr Clean &zwnj; &zwnj; &zwnj; &zwnj;</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink4-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl text-black ">2% to Cagey Nick</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink4-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl text-black ">2% to Mr Clean &zwnj; &zwnj; &zwnj; &zwnj;</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink4-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl text-black">2% to Cagey Nick</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>
            <div className="pink4-div "></div>
          </div>
        </div>
      </div>
      <Image src={vector} alt="abc" className="absolute -z-50 right-20 top-40" width={1000} height={1000}/>
    </div>
  );
}
