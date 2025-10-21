import React from "react";
import {
  CircleUserRound,
  ArrowLeft,
  MessageCircle,
  Phone,
  CheckCircle,
} from "lucide-react";

const ContactVendorPage = () => {
  // Mock vendors data - replace with your actual vendors array
  const vendors = [
    { _id: 1, name: "Vendor Name 1", url: "https://wa.me/2348032139983" },
    { _id: 2, name: "Vendor Name 2", url: "https://wa.me/2348032139983" },
    { _id: 3, name: "Vendor Name 3", url: "https://wa.me/2348032139983" },
    { _id: 4, name: "Vendor Name 4", url: "https://wa.me/2348032139983" },
  ];

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-white hover:text-green-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Coupon Vendors
            </h1>
            <div className="w-16"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            Verified Vendors
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your E-Pin from
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
              Authorized Vendors
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact any of our verified vendors below to purchase your
            registration coupon and start your journey with Foodie World Global
          </p>
        </div>

        {/* Vendors Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {vendors.map((vendor) => (
            <a
              key={vendor._id}
              href={vendor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-green-300 hover:scale-105"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>

              <div className="relative p-6">
                <div className="flex items-center justify-between">
                  {/* Vendor Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CircleUserRound
                          className="w-7 h-7 text-green-600"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle
                          className="w-3 h-3 text-white"
                          strokeWidth={3}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {vendor.name}
                      </h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        Verified Vendor
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 group-hover:scale-110 transition-all">
                      <MessageCircle
                        className="w-6 h-6 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-600 group-hover:text-green-600 transition-colors">
                      Chat Now
                    </span>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm text-green-600 font-medium flex items-center gap-2">
                    Click to contact via WhatsApp
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Need Help Choosing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Our vendors are here to guide you through the process and answer any
            questions about registration packages
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Instant E-Pin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactVendorPage;
