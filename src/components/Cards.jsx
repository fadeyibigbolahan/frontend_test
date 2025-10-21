import React from "react";
import {
  Package,
  Crown,
  Star,
  Zap,
  TrendingUp,
  Award,
  Check,
} from "lucide-react";

const Cards = () => {
  const packages = [
    {
      name: "Starter",
      price: "₦5,000",
      icon: Package,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      volume: "20 Business Volume",
      levels: "Earn up to Level 3",
      featured: false,
    },
    {
      name: "Gold",
      price: "₦10,000",
      icon: Star,
      color: "from-yellow-400 to-amber-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      volume: "40 Business Volume",
      levels: "Earn up to Level 4",
      featured: false,
    },
    {
      name: "Diamond",
      price: "₦20,000",
      icon: Zap,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      volume: "80 Business Volume",
      levels: "Earn up to Level 4",
      featured: false,
    },
    {
      name: "Elite",
      price: "₦30,000",
      icon: TrendingUp,
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      volume: "120 Business Volume",
      levels: "Earn up to Level 5",
      featured: false,
    },
    {
      name: "Supreme",
      price: "₦40,000",
      icon: Award,
      color: "from-rose-400 to-pink-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      volume: "160 Business Volume",
      levels: "Earn up to Level 5",
      featured: true,
    },
    {
      name: "Mega",
      price: "₦50,000",
      icon: Crown,
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      volume: "200 Business Volume",
      levels: "Earn up to Level 6",
      featured: false,
    },
    {
      name: "Royal",
      price: "₦100,000",
      icon: Crown,
      color: "from-violet-400 to-purple-600",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
      volume: "400 Business Volume",
      levels: "Earn up to Level 6",
      featured: false,
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Package className="w-4 h-4" />
            Flexible Packages
          </div>
          <h2
            id="packages"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Choose Your Path to
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
              Financial Freedom
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start with any package and upgrade anytime. Every package unlocks
            unlimited referrals and growth potential.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div
                key={index}
                className={`relative group ${
                  pkg.featured ? "lg:scale-105" : ""
                }`}
              >
                {/* Featured Badge */}
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                    pkg.featured ? "border-rose-300" : pkg.borderColor
                  }`}
                >
                  {/* Gradient Background Effect */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${pkg.color}`}
                  ></div>

                  <div className="p-8">
                    {/* Icon */}
                    <div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    {/* Package Name */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">
                        {pkg.price}
                      </span>
                      <span className="text-gray-500 ml-2">one-time</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check
                            className="w-3 h-3 text-white"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {pkg.volume}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check
                            className="w-3 h-3 text-white"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {pkg.levels}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check
                            className="w-3 h-3 text-white"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-gray-700 font-medium">
                          Unlimited Referrals
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                        pkg.featured
                          ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg hover:shadow-rose-500/50 hover:scale-105"
                          : `bg-gradient-to-r ${pkg.color} text-white shadow-md hover:shadow-lg hover:scale-105`
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Not sure which package is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Start with any package and upgrade anytime as your business grows.
              All packages include our full support system.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-green-500/50">
              Contact Us for Guidance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
