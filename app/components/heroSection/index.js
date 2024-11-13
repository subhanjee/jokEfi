import React from "react";
import joke from "../../../public/images/joke.png";
import joke1 from "../../../public/images/Rectangle 24.png";
import joke2 from "../../../public/images/Rectangle 25.png";
import joker from "../../../public/images/image 8.png";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center   p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Image src={joke} alt="abc" width={350} height={350} />
          <div className="flex gap-1">
          <Image className="mt-4 w-32 h-20" src={joke2} alt="abc" />
          <Image className="mt-4 w-58 h-20" src={joke1} alt="abc"  />
          </div>
        </div>
        <Image src={joker} alt="abc" width={300} height={300} />
      </div>
    </div>
  );
};

export default HeroSection;
