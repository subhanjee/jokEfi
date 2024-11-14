import React from "react";
import joke from "../../../public/images/Joke.png";
import joke1 from "../../../public/images/Rectangle 24.png";
import joke2 from "../../../public/images/Rectangle 25.png";
import joker from "../../../public/images/image 8.png";
import joker3 from "../../../public/images/injoke.png";
import joker4 from "../../../public/images/Yuppies.png";
import joker5 from "../../../public/images/Yuppies Cat.png";
import joker6 from "../../../public/images/Yuppies Clock.png";
import joker7 from "../../../public/images/Yuppies Doodle Cloud 3.png";
import joker8 from "../../../public/images/Yuppies Doodle Cloud 4.png";
import joker9 from "../../../public/images/Yuppies Doodle Cloud 5.png";
import joker10 from "../../../public/images/Yuppies Doodle Cloud 1.png";
import joker11 from "../../../public/images/image 10.png";
import joker12 from "../../../public/images/Vector (27).png";
import joker13 from "../../../public/images/image 9.png";
import joker14 from "../../../public/images/image 11.png";
import Image from "next/image";
import "./style.css"
const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center   p-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 z-50 relative">
      <div className=" ">

          <Image src={joker8} alt="abc" className="back-joke5" />
          <Image src={joker7} alt="abc" className="back-joke4" />
          <Image src={joker6} alt="abc" className="back-joke3" />
          <Image src={joker3} alt="abc" className="back-joke" />
          <Image src={joker11} alt="abc" className="back-joke8" />
          <Image src={joker12} alt="abc" className="back-joke9" />
          <Image src={joker13} alt="abc" className="back-joke10" />
          <Image src={joker14} alt="abc" className="back-joke11" />
          <Image src={joke} alt="abc" width={350} height={350} />
          <div className="flex gap-1">
          <Image className="mt-4 w-32 h-20" src={joke2} alt="abc" />
          <Image className="mt-4 w-58 h-20" src={joke1} alt="abc"  />
          </div>
        </div>
        <div className="flex justify-center items-center">
        <Image src={joker} alt="abc" width={250} height={250} className="-mt-5 lg:-mt-10"/>
        <Image src={joker4} alt="abc" className="back-joke1" />
        <Image src={joker5} alt="abc" className="back-joke2" />
        <Image src={joker9} alt="abc" className="back-joke6" />
        <Image src={joker10} alt="abc" className="back-joke7" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
