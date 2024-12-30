"use client";

// Import Work Sans font
import { Work_Sans } from "next/font/google";

// Load Work Sans font with the desired subsets and weights
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // You can specify the weights you want
});

export function MissionStatement() {
  return (
    <div className="container mx-auto px-4 pb-4 pt-24 max-w-7xl">
      {/* Content Container */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Mission Statement */}
        <p className={`${workSans.className} text-[#4f4f4f] text-[30px] font-semibold pb-[48px]`}>
          We are dedicated to helping patients achieve health and wellness by providing clinical care for digestive and liver diseases.
        </p>

        {/* Additional Information */}
        <p className={`${workSans.className} text-[#4f4f4f] text-[20px] font-medium`}>
          We strive to work closely with your referring physician to help facilitate a better quality of life.
        </p>
      </div>
    </div>
  );
}
