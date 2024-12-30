"use client";

export function ContactDetails() {
  return (
    <div className="w-full py-12 px-8" style={{ backgroundColor: 'rgb(249, 249, 249)' }}>
  <div className="max-w-screen-xl mx-auto px-4 py-16">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Left Side: Call Us Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-2/5 lg:w-2/5 xl:w-2/5">
        <div className="p-8 md:p-16 rounded-sm shadow-lg bg-white">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-center md:text-left text-[#4f4f4f]">
            Need Us?<br />Call Us.
          </h2>
          <h2 className="text-[#009ca7] text-[32px] md:text-[45px] font-bold text-center md:text-left">
            <a
              aria-label="403.394.3352 (opens in a new tab)"
              href="tel:+14033943352"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#04bcc9] hover:text-[#4fdee8] transition"
            >
              403.394.3352
            </a>
          </h2>
        </div>
      </div>

      {/* Right Side: Questions Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-3/5 lg:w-3/5 xl:w-3/5 mt-8 md:mt-0 md:pl-16">
        <div className="p-8 md:p-12 rounded-sm w-full">
          <h4 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left text-[#4f4f4f]">
            QUESTIONS, CONCERNS, COMMENTS? <br />YOU TELL US. WE LISTEN.
          </h4>
          <p className="text-base md:text-lg text-center md:text-left text-[#4f4f4f] mb-4">
            Monday-Thursday: 9:00am-12:00pm, 1:00pm-4:00pm<br />
            Friday: 9:00am-12:00pm<br />
            Saturday &amp; Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
