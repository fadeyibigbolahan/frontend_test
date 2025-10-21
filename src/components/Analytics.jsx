import React from "react";
import { MessageCircle, Target, Eye, Shield, ArrowRight } from "lucide-react";

const Analytics = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* About Section */}
      <div
        id="about"
        className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - WhatsApp CTA */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <a
                  href="https://wa.me/2348032139983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block"
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105">
                    <MessageCircle
                      className="w-24 h-24 text-white mx-auto"
                      strokeWidth={1.5}
                    />
                  </div>
                </a>
              </div>

              <div className="text-center md:text-left space-y-3">
                <h3 className="text-2xl font-bold text-gray-800">
                  Have Questions?
                </h3>
                <p className="text-gray-600">
                  Connect with us on WhatsApp for instant support
                </p>
                <a
                  href="https://wa.me/2348032139983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all"
                >
                  Chat Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column - About Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                Registered & Verified
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Empowering Through
                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                  Financial Growth
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with the passion to empower individuals through
                financial growth while promoting food security and provide an
                opportunity for people to earn sustainable income, access
                essential food items, and build a thriving community.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Officially Registered:</span>{" "}
                  Corporate Affairs Commission – RC 8336410
                </p>
              </div>

              <button
                onClick={() => scrollToSection("packages")}
                className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Explore Our Affordable Packages
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="grid md:grid-cols-2">
        {/* Vision Card */}
        <div className="relative bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 p-12 md:p-20 overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>

          <div className="relative z-10 space-y-6">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-8 h-8 text-white" strokeWidth={2} />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Vision
            </h2>

            <div className="w-20 h-1 bg-white/50 rounded-full"></div>

            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              To become Africa's leading platform for food-based empowerment,
              helping millions of families to eat better, earn daily, and live a
              life of dignity and financial freedom.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-12 md:p-20 overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>

          <div className="relative z-10 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-green-400" strokeWidth={2} />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Mission
            </h2>

            <div className="w-20 h-1 bg-green-400/50 rounded-full"></div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              To break the cycle of food scarcity and financial struggle by
              creating a sustainable platform where everyday people can access
              food, earn income, and develop leadership and business-building
              skills.
            </p>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
              We exist to nourish stomachs and bank accounts, raising a new
              generation of financially independent individuals across Nigeria
              and Africa.
            </p>

            <div className="space-y-3">
              <p className="text-lg font-bold text-green-400">
                At Foodie World Global, we believe a better life is possible.
              </p>
              <div className="space-y-2 text-white/90">
                <p className="flex items-center gap-2">
                  <span className="text-red-400 text-xl">✕</span> We say NO to
                  poverty.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-red-400 text-xl">✕</span> We say NO to
                  hunger.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-400 text-xl">✓</span> We say YES
                  to food security and financial empowerment!
                </p>
              </div>
              <p className="text-base text-gray-400 italic mt-4">
                We bring food based empowerment system that is transforming
                lives every single day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
