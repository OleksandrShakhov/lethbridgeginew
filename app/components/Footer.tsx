"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Set the current year when the component is mounted
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="bg-[linear-gradient(135deg,rgb(10,154,180)_0%,rgb(1,61,71)_100%)] text-white py-8"
      id="colophon"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Section 1 - Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="assets/SIX08-GI-logo-lt.png"
              alt="Six08 Gastroenterology Logo"
              style={{ width: '180px', height: '96px', objectFit: 'contain' }}
            />
          </div>

          {/* Footer Section 2 - Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacts</h3>
            <p>
              608 5th Ave South Lethbridge, AB T1J4G9<br />
              Ph: 403.394.3352<br />
              Fx: Dr. Hundal 587-822-2005<br />
              Fx: Dr. Marr 587-822-2011
            </p>
          </div>

          {/* Footer Section 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#procedures" className="hover:text-gray-400">
                  Procedures
                </a>
              </li>
              <li>
                <a href="/contact/#faqfull" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener"
                  href="assets/Referral_Pathways_Guide.pdf"
                  className="hover:text-gray-400"
                >
                  Referring Physicians
                </a>
              </li>
              <li>
                <a href="contact/" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Section 4 - Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <p>
              <strong>Monday-Thursday</strong><br />
              9:00am-12:00pm, 1:00pm-4:00pm<br />
              <strong>Friday</strong><br />
              9:00am-12:00pm<br />
              <strong>Saturday & Sunday</strong><br />
              Closed
            </p>
          </div>
        </div>
      </div>

      {/* White thin line */}
      <div className="border-b border-white my-8"></div>

      <div className="mt-8">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p>
            Copyright © {currentYear} Six08 Gastroenterology | Website by{" "}
            <a
              href="https://www.chinookit.com"
              target="_blank"
              rel="noopener"
              className="hover:text-gray-300"
            >
              Chinook IT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
