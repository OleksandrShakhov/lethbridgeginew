"use client";
import { FaMapMarkerAlt } from "react-icons/fa";

export function Top() {
  return (
    <div className="relative">
      {/* Content */}
      <div className="max-w-7xl mx-auto p-3 flex justify-between items-center">
        {/* Left Section (Empty) */}
        <div className="flex"></div>

        {/* Right Section */}
        <div className="flex items-center">
          <a
            href="https://maps.app.goo.gl/rwEUWpE48tHXmQ3V7"
            className="flex items-center text-teal-600 text-sm hover:text-teal-700 transition"
            aria-label="map-marker-alt"
            target="_blank"
          >
            <span className="flex items-center justify-center w-4 h-4 mr-2">
              <FaMapMarkerAlt size={15} className="text-current" />
            </span>
            <span className="text-[#4f4f4f] text-base">608 5th Ave S., Lethbridge AB T1J 4G9</span>
          </a>
        </div>
      </div>

      {/* Thin Line Under */}
      <div className="w-full border-b border-[#3f3f3f3]"></div>
    </div>
  );
}
