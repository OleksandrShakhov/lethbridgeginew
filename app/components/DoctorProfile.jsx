"use client";

export function DoctorProfile() {
  return (
    <div className="max-w-7xl mx-auto bg-white py-16 px-4 sm:px-8 lg:px-16">
      {/* Dr. Rajveer Hundal Section */}
      <div className="flex flex-col items-center lg:flex-row lg:space-x-8 mb-16">
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 bg-cover bg-center h-[500px]"
          style={{
            backgroundImage: "url('assets/Dr-Rajveer-Hundal-MD.jpg')",
            backgroundPosition: "50% 50%",
          }}
        >
          <img
            decoding="async"
            width="600"
            height="500"
            src="assets/Dr-Rajveer-Hundal-MD.jpg"
            alt="Dr. Rajveer Hundal MD"
            className="hidden"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 px-8">
          <div className="h-12"></div>
          <p className="text-[36px] text-gray-600 font-bold mb-2">Dr. Rajveer Hundal MD, FRCPC</p>
          <p className="text-2xl text-gray-700 mb-4">Therapeutic Endoscopy, Gastroenterology</p>
          <p className="text-lg text-gray-600 mb-4">Chinook Regional Hospital</p>
          <p className="text-base text-gray-600 mb-4">
            Dr. Hundal received his Medical Degree and completed his Internal Medicine residency at McMaster University.
            He obtained his Gastroenterology and Hepatology fellowship at the University of Calgary with further
            training as a therapeutic endoscopist at the University of Alberta.
          </p>
          <p className="text-base text-gray-600 mb-4">
            Dr. Hundal has a special interest in advanced endoscopic procedures, with a focus in endoscopic ultrasound
            (EUS) and ERCP.
          </p>
          <div className="h-12"></div>
        </div>
      </div>

      {/* Dr. Kaleb Marr Section */}
      <div className="flex flex-col items-center lg:flex-row lg:space-x-8">
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 bg-cover bg-center h-[500px]"
          style={{
            backgroundImage: "url('assets/Dr-Kaleb-Marr-BSc.jpg')",
            backgroundPosition: "50% 50%",
          }}
        >
          <img
            decoding="async"
            width="600"
            height="500"
            src="assets/Dr-Kaleb-Marr-BSc.jpg"
            alt="Dr. Kaleb Marr BSc, MBBS, FRCPC"
            className="hidden"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 px-8">
          <div className="h-12"></div>
          <p className="text-[36px] text-gray-600 font-bold mb-2">Dr. Kaleb Marr BSc, MBBS, FRCPC</p>
          <p className="text-2xl text-gray-700 mb-4">Consultant in Gastroenterology and Hepatology</p>
          <p className="text-lg text-gray-600 mb-4">
            Specialist in Inflammatory Bowel Disease & Clinical Lecturer, University of Calgary
          </p>
          <p className="text-base text-gray-600 mb-4">
            Dr. Marr received his Medical Degree at the University of Queensland in Brisbane, Australia. He completed
            his Internal Medicine and Gastroenterology residency at the University of Calgary. He further pursued
            training at the University of Calgary in Inflammatory Bowel Disease (IBD) under the mentorship of Dr. Remo
            Panaccione as well as Small Bowel Ultrasound with Dr. Kerri Novak.
          </p>
          <p className="text-base text-gray-600 mb-4">
            Dr. Marr also has an interest in testing for esophageal motility and reflux testing.
          </p>
          <div className="h-12"></div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
