// components/Tokenomics.js
import React from "react";
import "./style.css";
// import vector from "../../public/images/Vector 4.png";
// import vector1 from "../../public/images/Vector 7.png";
import face from "../../../public/images/image15.png";
import vector2 from "../../../public/images/Vector 5.png";
// import vector3 from "../../public/images/Ellipse 12.png";
import vector4 from "../../../public/images/Ellipse 13.png";
import Image from "next/image";
const data = [
  { label: "85% Liquidity Pool", color: "bg-orange-300", width: "85%" },
  { label: "5% Reward Wallet", color: "bg-purple-300", width: "5%" },
  { label: "2% to Xavier", color: "bg-purple-300", width: "2%" },
  { label: "2% to Mr Clean", color: "bg-purple-300", width: "2%" },
  { label: "2% to Cagey Nick", color: "bg-purple-300", width: "2%" },
  { label: "2% to Mr Clean", color: "bg-purple-300", width: "2%" },
  { label: "2% to Cagey Nick", color: "bg-purple-300", width: "2%" },
];

export default function Tokenomics() {
  return (
    <div className="flex justify-center items-center  ">
       <div className="p-[2px] rounded-3xl bg-gradient-to-b from-orange-300 to-purple-300">
        <div className="py-5 px-5 md:py-8 md:px-12 bg-white rounded-3xl ">
          <div>
            <p className=" text-center font-bold text-4xl">Tokencomics</p>
            <Image src={face} alt="" width={200} height={200} />
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="  font-bold text-xs md:text-xl ">85% Liquidity Pool</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl ">5% Reward Wallet</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink1-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl ">2% to Xavier &zwnj; &zwnj;  &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink4-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl ">2% to Mr Clean &zwnj; &zwnj; &zwnj; &zwnj;</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink4-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl ">2% to Cagey Nick</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink4-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl  ">2% to Mr Clean &zwnj; &zwnj; &zwnj; &zwnj;</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>{" "}
            <div className="pink4-div"></div>
          </div>
          <div className="flex justify-between items-center  gap-10 ">
            <p className="font-bold text-xs md:text-xl ">2% to Cagey Nick</p>
            <div className="flex justify-center items-center ">
              <Image src={vector2} alt="" className="  " />
            </div>
            <div className="pink4-div "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
