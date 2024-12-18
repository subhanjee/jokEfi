// components/TeamSection.js
import Image from "next/image";
import React from "react";
import team from "../../../public/images/Group 10.png";
import team1 from "../../../public/images/Group 11.png";
import team2 from "../../../public/images/Group 12.png";
import team3 from "../../../public/images/Group 15.png";
import team4 from "../../../public/images/Group 13.png";
import team5 from "../../../public/images/Group 14.png";
import team6 from "../../../public/images/Group 16.png";
import team7 from "../../../public/images/Group 17.png";
const teamMembers = [
  { name: "JoeBama", imag: <Image src={team1} alt="abc" /> },
  { name: "Mr. Clean", imag: <Image src={team} alt="abc" /> },
  { name: "Mike DeGrass Tyson", imag: <Image src={team2} alt="abc" /> },
  { name: "Cagey Nick", imag: <Image src={team3} alt="abc" /> },
  { name: "Lol Ming", imag: <Image src={team4} alt="abc" /> },
  { name: "Lol Ming", imag: <Image src={team5} alt="abc" /> },
  { name: "Lol Ming", imag: <Image src={team6} alt="abc" /> },
  { name: "Lol Ming", imag: <Image src={team7} alt="abc" /> },
];

export default function TeamSection() {
  return (
    <div className="min-h-screen flex  flex-col items-center  -mt-16 bg-img-tes">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-8 text-black">Team</h2>
      <div className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-between md:items-center gap-5 md:gap-72">
        <div>
          <Image src={team1} alt="abc" />
          <h4 className="text-black text-xl text-center -mt-12 font-bold">
            JoeBama
          </h4>
        </div>
        <div>
          <Image src={team2} alt="abc" />
          <h4 className="text-black text-xl text-center -mt-12 font-bold">
            Mike DeGrass Tyson
          </h4>
        </div>
      </div>
      <div className="-mt-0 md:-mt-20">
        <Image src={team} alt="abc" />
        <h4 className="text-black text-xl text-center -mt-12 font-bold">
          Mr. Clean
        </h4>
      </div>
      <div className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-between md:items-center gap-5 md:gap-72 -mt-0 md:-mt-28">
        <div>
          <Image src={team3} alt="abc" />
          <h4 className="text-black text-xl text-center -mt-12 font-bold">
            Cagey Nick
          </h4>
        </div>
        <div>
          <Image src={team6} alt="abc" />
          <h4 className="text-black text-xl text-center -mt-12 font-bold">
            Lol Ming
          </h4>
        </div>
      </div>
    </div>
  );
}
