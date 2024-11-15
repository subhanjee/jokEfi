import Image from "next/image";
import React from "react";
import Twitter from "../../../public/images/Vector.png";
import linkedin from "../../../public/images/Vector (1).png";
import Fb from "../../../public/images/Subtract.png";
function Footer() {
  return (
    <div className="bg-black p-2 flex flex-col justify-center items-center md:flex md:flex-row md:justify-between md:items-center">
      <div className="flex justify-center items-center gap-5 ">
        <a href="https://twitter.com/?lang=en" target="_blank">
          <Image src={Twitter} alt="abc" width={25} height={25} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          {" "}
          <Image src={linkedin} alt="abc" width={25} height={25} />
        </a>
        <a href="https://telegram.org/" target="_blank">
          <Image src={Fb} alt="abc" width={25} height={25} />
        </a>
      </div>
      <div className="text-white">
        {" "}
        <h2>From The Makers Of Universe</h2>
        <p className="text-[#8F8F8F] text-sm text-right">
          All Rights Reserved Joke 2024
        </p>
      </div>
    </div>
  );
}

export default Footer;
