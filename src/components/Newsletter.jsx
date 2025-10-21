import React from "react";
import {
  ShoppingCart,
  UserPlus,
  FileText,
  LogIn,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Newsletter = () => {
  const navigate = useNavigate();
  const steps = [
    {
      icon: ShoppingCart,
      title: "Get Your E-Pin",
      description:
        "Obtain your registration pin (E-pin) from our verified vendors",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      number: "01",
    },
    {
      icon: UserPlus,
      title: "Click Registration Link",
      description:
        "Use your upline's referral link or click the 'Register' button",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      number: "02",
    },
    {
      icon: FileText,
      title: "Complete Your Form",
      description: "Fill out the registration form with your accurate details",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      number: "03",
    },
    {
      icon: CheckCircle,
      title: "Start Earning!",
      description:
        "Log in to your dashboard and begin your journey to financial freedom",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      number: "04",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in just 4 simple steps and join thousands of members
            building their financial future
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connecting Arrow (hidden on mobile, shows between cards on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 z-0">
                    <ArrowRight className="w-8 h-8 text-gray-300 group-hover:text-green-500 transition-colors" />
                  </div>
                )}

                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-gray-100 hover:border-green-200">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mt-4`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-green-50 mb-8 max-w-2xl mx-auto">
              Join our community today and take the first step towards financial
              independence and food security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/contact-vendor")}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Find a Vendor
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600 text-sm">Active Members</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">₦50M+</div>
            <div className="text-gray-600 text-sm">Paid Out</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Support</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600 text-sm">Verified</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
