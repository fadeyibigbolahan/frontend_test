import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Laptop from "../assets/laptop.jpg";
import People from "../assets/people.jpg";
import Circle from "../assets/circle.jpg";

const Analytics = () => {
  return (
    <>
      <div
        id="about"
        className="w-full bg-white md:p-16 p-4 flex gap-8 flex-col"
      >
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="md:w-[500px] w-full mx-auto my-4"
            src={People}
            alt="/"
          />
          <div className="flex flex-col justify-center md:items-start items-center">
            <p className="text-[#00df9a] font-bold text-center md:text-start">
              ABOUT
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center md:text-start">
              FOODIE WORLD GLOBAL
            </h1>
            <p className="gap-1 flex flex-col  text-center md:text-start">
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
            <ScrollLink to="packages" smooth={true} duration={500}>
              <button className="bg-black text-[#00df9a] w-[230px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                Our afforable packages.
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
      <div className="bg-[#0A192F] max-w-[1240px] mx-auto grid md:grid-cols-2 md:p-16 p-4">
        <div className="flex flex-col justify-center md:items-start items-center gap-3">
          <p className="text-[#00df9a] font-bold ">VISION & MISSION</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white text-center md:text-start">
            Vision
          </h1>
          <p className="gap-1 flex flex-col text-white text-center md:text-start">
            To be the leading network marketing platform that empowers
            individuals financially while ensuring food security for communities
            worldwide
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white text-center md:text-start">
            Mission
          </h1>
          <ul className="gap-1 flex flex-col  text-white text-center md:text-start">
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
