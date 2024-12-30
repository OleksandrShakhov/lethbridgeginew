"use client";
import { Montserrat } from 'next/font/google';

// Import the Montserrat font with the desired subsets and weights
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'], // Specify the weights you need
});

export function Hero() {
  return (
    <div id="home" className="relative bg-[#b9dde8] min-h-[600px]">
      {/* Background Image */}
      <img
        src="assets/gastroenterology-examination.jpg"
        alt="Gastroenterology Examination"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '99% 49%' }}
      />

      {/* Overlay with Transparent Color */}
      <div className="absolute inset-0 bg-[#b9dde8] bg-opacity-70 z-0"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        {/* Content Container */}
        <div className={`flex flex-col items-center mt-12 justify-center space-y-4 px-4 ${montserrat.className}`}>
          {/* Large Screen Title */}
          <h1 className="text-[#4f4f4f] text-[60px] font-extrabold hidden md:block leading-[1.4]">
            Welcome to<br />Six08 Gastroenterology
          </h1>

          {/* Small Screen Title */}
          <h1 className="text-[#4f4f4f] text-[40px] font-extrabold block md:hidden leading-[1.2]">
            Welcome to Six08 Gastroenterology
          </h1>

          {/* Subtitle */}
          <h4 className="text-[#4f4f4f] text-[20px] font-extrabold leading-[1.4]">
            Southern Alberta’s only Gastroenterology centre.
          </h4>
        </div>
      </div>
    </div>
  );
}
