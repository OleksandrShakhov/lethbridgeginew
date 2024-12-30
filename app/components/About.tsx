"use client";

export function About() {
  return (
    <div id="about" className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        {/* About Us, Peace of Mind, Modern Healthcare Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Us */}
          <div className="flex flex-col items-center text-center p-8 bg-[#b9dde8] rounded-sm shadow-lg">
            <h4 className="text-2xl font-bold text-[#4f4f4f] mb-4">About Us</h4>
            <p className="text-lg text-[#4f4f4f]">
              Six08 Gastroenterology is an amalgamation of Southern Alberta’s Gastroenterology clinics. While it is a new location in downtown Lethbridge, these clinics have been serving Southern Alberta for 3-6 years.
            </p>
          </div>

          {/* Peace of Mind */}
          <div className="flex flex-col items-center text-center p-8 bg-[#b9dde8] rounded-sm shadow-lg">
            <h4 className="text-2xl font-bold text-[#4f4f4f] mb-4">Peace of Mind</h4>
            <p className="text-lg text-[#4f4f4f]">
              We are experienced and trained in various techniques allowing delivery of various procedures and diagnostic tests including colonoscopy, gastroscopy, endoscopic ultrasound, ERCP, small bowel ultrasound, and esophageal manometry and pH testing.
            </p>
          </div>

          {/* Modern Healthcare */}
          <div className="flex flex-col items-center text-center p-8 bg-[#b9dde8] rounded-sm shadow-lg">
            <h4 className="text-2xl font-bold text-[#4f4f4f] mb-4">Modern Healthcare</h4>
            <p className="text-lg text-[#4f4f4f]">
              We work collaboratively with family physicians, allied health specialists, and other specialists to maintain a high standard of care. Our facility is unique in its ability to provide patients with a wide variety of treatment choices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
