import React from "react";
import { Sprout, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-600 via-green-700 to-green-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              Empowering Agricultural Growth
            </span>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Earn, Grow &<br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 text-transparent bg-clip-text">
              Feed the Nation!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-green-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            With an affordable entry fee and a rewarding compensation plan, we
            help members achieve financial success while contributing to
            national food security.
          </p>

          {/* CTA Button */}
          <button className="group relative bg-white text-green-800 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-400/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Earn More</h3>
              <p className="text-green-100 text-sm">
                Competitive compensation plan designed for your success
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-400/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sprout className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Grow Together</h3>
              <p className="text-green-100 text-sm">
                Build sustainable income while supporting agriculture
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-400/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Join Community</h3>
              <p className="text-green-100 text-sm">
                Be part of a movement feeding the nation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
