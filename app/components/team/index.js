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
  { name: "JoeBama", imag: <Image src={team1} alt="abc"  /> },
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
    <div className="min-h-screen flex flex-col items-center py-12 bg-img-tes">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-8">Team</h2>

      {/* Team Members Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {teamMembers.map((item, index) => (
          <div key={index}>
            <div className="flex justify-center items-center flex-col">
              {item.imag}
           <p className="-mt-10">{item.name}</p>   
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
