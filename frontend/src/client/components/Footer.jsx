import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#84a7ab] to-[#cfb97c] text-white py-16 mt-30">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-[90%] mx-auto text-[1.3rem] text-center sm:text-left">
        <div>
          <h3 className="font-medium text-[1.7rem] mb-4">About</h3>
          <ul className="space-y-1 text-[1.5rem]">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/store" className="hover:underline">
                Store
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-[1.7rem] mb-4">Grouped Companies</h3>
          <ul className="space-y-1 text-[1.5rem]">
            <li>Flipkart</li>
            <li>Myntra</li>
            <li>Amazon</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-[1.7rem] mb-4">Help</h3>
          <ul className="space-y-1 text-[1.5rem]">
            <li>
              <Link to="/payment-policy" className="hover:underline">
                Payment
              </Link>
            </li>
            <li>
              <Link to="/shipping-policy" className="hover:underline">
                Shipping
              </Link>
            </li>

            <li>Cancellation</li>
            <li>Return</li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-[1.7rem] mb-4">Consumer Policy</h3>
          <ul className="space-y-1 text-[1.5rem]">
            <li>
              <Link to="/cancellation-return" className="hover:underline">
                Cancellation & Return
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="hover:underline">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/security-policy" className="hover:underline">
                Security
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="hover:underline">
                Site Map
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-[1.7rem] mb-4">Mail Us</h3>
          <ul className="space-y-1 text-[1.5rem]">
            <li className="flex justify-center sm:justify-start gap-2">
              info@gmail.com
            </li>
            <li className="flex justify-center sm:justify-start gap-2">
              @facebook.com
            </li>
            <li className="flex justify-center sm:justify-start gap-2">
              @instagram.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-[1.7rem] mb-4">
            Registered Office Address
          </h3>
          <ul>
            <li className="text-lg leading-relaxed text-[1.5rem]">
              Prototype Ashtamudi Towers TechnoPark Kollam 691501{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
