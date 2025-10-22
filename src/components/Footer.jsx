import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import foodie from "../assets/FOODIE.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="bg-white backdrop-blur-sm w-24 h-24 rounded-2xl flex items-center justify-center mb-4">
                <img src={foodie} alt="Foodie World Global" className="w-16" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Foodie World Global</h3>
              <p className="text-green-100 text-lg font-medium mb-4">
                Earn, Grow & Feed the Nation!
              </p>
            </div>

            <p className="text-green-50 leading-relaxed mb-6 max-w-md">
              Empowering individuals through financial growth while promoting
              food security. Join thousands building sustainable income and
              contributing to a hunger-free Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/signup"
                  className="text-green-50 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Register Now</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="text-green-50 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Member Login</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-vendor"
                  className="text-green-50 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Find Vendors</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-200 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:+2348032139983"
                    className="text-green-50 hover:text-white transition-colors"
                  >
                    +234 803 213 9983
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-200 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:info@foodieworldglobal.com"
                    className="text-green-50 hover:text-white transition-colors break-all"
                  >
                    info@foodieworldglobal.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-200 flex-shrink-0 mt-1" />
                <div className="text-green-50">Nigeria</div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-white">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-green-600 transition-all hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-green-600 transition-all hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-green-600 transition-all hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-100 text-sm">
              © {new Date().getFullYear()} Foodie World Global. All rights
              reserved.
            </p>
            <div className="flex items-center gap-1 text-green-100 text-sm">
              <span>RC 8336410</span>
              <span className="mx-2">•</span>
              <span>Corporate Affairs Commission</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-green-100 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-green-100 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
