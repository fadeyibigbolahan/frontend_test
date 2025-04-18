import React from "react";
import food from "../assets/food.jpg";
import finance from "../assets/finance.png";
import money from "../assets/money.jpg";
import international from "../assets/international.png";
import trip from "../assets/trip.jpg";
import car from "../assets/car.png";
import appliances from "../assets/appliances.jpg";
import team from "../assets/team.jpg";
import Navbar from "../components/Navbar";

const sections = [
  {
    title: "Food Supplies",
    text: "Food is essential for survival, growth, and overall well-being and we are committed to improving lives by ensuring both financial growth and food security",
    img: food,
  },
  {
    title: "Financial Reward",
    text: "Our plan rewards you with cash bonuses at every stage, keeping you excited and motivated",
    img: money,
  },
  {
    title: "International Trip",
    text: "Our Plan offers an exciting all expense paid International Trip Reward to members",
    img: trip,
  },
  {
    title: "Car Award",
    text: "we celebrate members with car award for them to drive into success for their hard work and dedication",
    img: car,
  },
  {
    title: "Home Appliances",
    text: "we believe in rewarding our members not just with financial benefits, but also with essential household appliances that add value to daily living to reduce expenses on appliances, making life easier and also to motivate them",
    img: appliances,
  },
  {
    title: "Team Support",
    text: "we believe that success is best achieved together! That’s why we provide unmatched team support to help you grow, earn, and succeed in your journey.",
    img: team,
  },
];

const ProductPage = () => {
  return (
    <>
      <div className="bg-[#0A192F]">
        <Navbar />
      </div>
      <div className="flex justify-center items-center mt-4">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Our Products
        </h1>
      </div>
      <div className="space-y-12 p-6 w-full md:w-2/3 mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 border border-gray-400 p-2 rounded-md ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={section.img}
              alt={section.title}
              className="w-full md:w-1/2 rounded-2xl shadow-lg"
            />
            <div className="flex flex-col justify-center items-center md:items-start md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-700 md:text-start text-center">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
