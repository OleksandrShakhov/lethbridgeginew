"use client";

export function Procedure() {
  return (
    <section
      id="procedures"
      className="relative bg-[#b9dde8] min-h-[650px] py-16 flex flex-col justify-center items-center text-center"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-[#4a4a4a] mb-6">Our Procedures</h2>

      {/* Description */}
      <p className="text-lg text-[#7a7a7a] mb-12">
        Gastroenterology is an area of medicine that focuses on the digestive system, or the gastrointestinal (GI) tract.
        <br />
        Gastroenterologists can treat everything from IBS to hepatitis C.
        </p>


      {/* Procedure Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-screen-xl mx-auto">
        {/* GI Ultrasound */}
        <div className="bg-white rounded-sm shadow-md p-6 flex flex-col items-center text-center">
          <h4 className="text-xl font-semibold text-[#4a4a4a] mb-4">GI Ultrasound</h4>
          <p className="text-md text-[#7a7a7a]">
            Endoscopic ultrasounds to look at the colon and the last part of the small bowel.
          </p>
        </div>

        {/* Colonoscopy */}
        <div className="bg-white rounded-sm shadow-md p-6 flex flex-col items-center text-center">
          <h4 className="text-xl font-semibold text-[#4a4a4a] mb-4">Colonoscopy</h4>
          <p className="text-md text-[#7a7a7a]">
            Colonoscopies to detect colon cancer or colon polyps.
          </p>
        </div>

        {/* Endoscopy */}
        <div className="bg-white rounded-sm shadow-md p-6 flex flex-col items-center text-center">
          <h4 className="text-xl font-semibold text-[#4a4a4a] mb-4">Endoscopy</h4>
          <p className="text-md text-[#7a7a7a]">
            Endoscopic retrograde cholangiopancreatography to identify gallstones, tumors, or scar tissue.
          </p>
        </div>

        {/* Sigmoidoscopy */}
        <div className="bg-white rounded-sm shadow-md p-6 flex flex-col items-center text-center">
          <h4 className="text-xl font-semibold text-[#4a4a4a] mb-4">Sigmoidoscopy</h4>
          <p className="text-md text-[#7a7a7a]">
            Sigmoidoscopies to evaluate blood loss or pain in the bowel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Procedure;
