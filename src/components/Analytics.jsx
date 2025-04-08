import React from "react";
import Laptop from "../assets/laptop.jpg";
import People from "../assets/people.jpg";
import Circle from "../assets/circle.jpg";

const Analytics = () => {
  return (
    <>
      <div id="about" className="w-full bg-white p-16 flex gap-8 flex-col">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={People} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">ABOUT</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              FOODIE WORLD GLOBAL
            </h1>
            <p className="gap-1 flex flex-col">
              <span className="font-bold">Established: 2025</span>
              <br /> <strong>Our Story:</strong> Core Values: Founded with the
              passion to empower individuals through financial growth while
              promoting food security and provide an opportunity for people to
              earn sustainable income, access essential food items, and build a
              thriving community. We fully registered in Nigeria under the
              corporate affairs commission – RC 8336410 With an affordable entry
              fee and a rewarding compensation plan, we help members achieve
              financial success.
            </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Our afforable packages.
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#0A192F] max-w-[1240px] mx-auto grid md:grid-cols-2 p-16">
        <div className="flex flex-col justify-center gap-3">
          <p className="text-[#00df9a] font-bold ">VISION & MISSION</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white">
            Vision
          </h1>
          <p className="gap-1 flex flex-col text-white">
            To be the leading network marketing platform that empowers
            individuals financially while ensuring food security for communities
            worldwide
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white">
            Mission
          </h1>
          <ul className="gap-1 flex flex-col  text-white">
            <li>
              ✅ To provide a sustainable earning opportunity through an
              innovative compensation plan.
            </li>
            <li>
              ✅ To promote financial independence and wealth creation for our
              members.
            </li>
            <li>
              ✅ To enhance food accessibility by rewarding members with
              essential food items.
            </li>
            <li>
              ✅ To build a strong, supportive community through training,
              mentorship, and leadership development.
            </li>
          </ul>
        </div>
        <img className="w-[500px] mx-auto my-4" src={Circle} alt="/" />
      </div>
    </>
  );
};

export default Analytics;
