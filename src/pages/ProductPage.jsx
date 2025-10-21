import React from "react";
import { Gift, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "lucide-react";

import food from "../assets/food.png";
import money from "../assets/money.jpg";
import trip from "../assets/trip.jpg";
import car from "../assets/car.png";
import appliances from "../assets/appliances.jpg";
import team from "../assets/team.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const sections = [
  {
    title: "Food Supplies",
    text: "Food is essential for survival, growth, and overall well-being and we are committed to improving lives by ensuring both financial growth and food security",
    img: food,
    color: "from-green-500 to-emerald-600",
    badge: "Essential",
  },
  {
    title: "Financial Reward",
    text: "Our plan rewards you with cash bonuses at every stage, keeping you excited and motivated",
    img: money,
    color: "from-yellow-500 to-amber-600",
    badge: "Cash Bonus",
  },
  {
    title: "International Trip",
    text: "Our Plan offers an exciting all expense paid International Trip Reward to members",
    img: trip,
    color: "from-blue-500 to-cyan-600",
    badge: "Premium",
  },
  {
    title: "Car Award",
    text: "We celebrate members with car award for them to drive into success for their hard work and dedication",
    img: car,
    color: "from-purple-500 to-indigo-600",
    badge: "Elite Award",
  },
  {
    title: "Home Appliances",
    text: "We believe in rewarding our members not just with financial benefits, but also with essential household appliances that add value to daily living to reduce expenses on appliances, making life easier and also to motivate them",
    img: appliances,
    color: "from-orange-500 to-red-600",
    badge: "Lifestyle",
  },
  {
    title: "Team Support",
    text: "We believe that success is best achieved together! That's why we provide unmatched team support to help you grow, earn, and succeed in your journey.",
    img: team,
    color: "from-rose-500 to-pink-600",
    badge: "Community",
  },
];

const ProductPage = () => {
  return (
    <div className="w-full bg-[#0a192f]">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Rewards & Benefits</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our Products &
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 text-transparent bg-clip-text">
                Member Benefits
              </span>
            </h1>
            <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto">
              Experience a comprehensive rewards system designed to support your
              growth, celebrate your success, and enhance your lifestyle
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="space-y-20">
            {sections.map((section, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="group relative">
                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center gap-8 lg:gap-12`}
                  >
                    {/* Image Container */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                        {/* Gradient overlay on hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
                        ></div>

                        {/* Number badge */}
                        <div className="absolute top-6 left-6 z-20 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl font-bold bg-gradient-to-br from-gray-800 to-gray-600 text-transparent bg-clip-text">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {/* Category badge */}
                        <div
                          className={`absolute top-6 right-6 z-20 bg-gradient-to-r ${section.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm flex items-center gap-2`}
                        >
                          <Sparkles className="w-4 h-4" />
                          {section.badge}
                        </div>

                        {/* Image */}
                        <img
                          src={section.img}
                          alt={section.title}
                          className="w-full h-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        {section.title}
                      </h2>

                      {/* Description */}
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {section.text}
                      </p>

                      {/* Features list */}
                      <div className="space-y-3 pt-4">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-6 h-6 rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0 mt-1`}
                          >
                            <CheckCircle
                              className="w-4 h-4 text-white"
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-gray-700 font-medium">
                            Available to all active members
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-6 h-6 rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0 mt-1`}
                          >
                            <CheckCircle
                              className="w-4 h-4 text-white"
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-gray-700 font-medium">
                            No hidden requirements or fees
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-6 h-6 rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0 mt-1`}
                          >
                            <CheckCircle
                              className="w-4 h-4 text-white"
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-gray-700 font-medium">
                            Transparent reward system
                          </span>
                        </div>
                      </div>

                      {/* CTA Badge */}
                      <div
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${section.color} text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative line between sections (not on last item) */}
                  {index < sections.length - 1 && (
                    <div className="mt-20 mb-20">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
