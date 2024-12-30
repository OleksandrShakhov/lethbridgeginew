"use client";

export function ContactSum() {
  return (
    <div id="about" className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16">

        {/* Media and Image Section */}
        <div className="flex flex-col lg:flex-row items-center">
          <div
            className="w-full lg:w-1/2 bg-cover bg-center h-[400px] lg:h-[500px]"
            style={{ backgroundImage: "url('assets/stomach-pains.jpg')" }}
          />
          <div className="w-full lg:w-1/2 text-center lg:text-left px-16">
            <h2 className="text-[35px] sm:text-[40px] lg:text-[45px] font-bold text-[#4f4f4f] mb-4 font-montserrat">
              Committed to Help Facilitate a Better Quality of Life.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#4f4f4f] mb-6 font-montserrat">
              Welcome to Six08 Gastroenterology. We are dedicated to helping patients achieve health and wellness by providing clinical care for digestive and liver diseases.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="/contact" className="bg-[#009ca7] text-white py-3 px-6 rounded-sm text-lg font-medium hover:bg-[#007f8f] transition duration-300">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSum;
