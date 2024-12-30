"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoMdCloseCircle } from 'react-icons/io';
import Link from 'next/link';

// Import Work Sans font from Google
import { Work_Sans } from 'next/font/google';

// Load Work Sans with the desired subsets and weight
const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // You can specify the weights you want
});

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Procedures', href: '#procedures' },
  { name: 'FAQ', href: "/contact/#faqfull"  },
  { name: 'Referring Physicians', href: 'assets/Referral_Pathways_Guide.pdf', external: true },
  { name: 'Contact Us', href: '/contact/' }
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault();
    scrollToSection(sectionId);
    setMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <>
      {/* Header */}
      <div className={`bg-whitesticky top-0 z-50 ${workSans.className}`}>
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Left Section: Branding */}
          <div className="flex items-center">
            <Link href="/">
              <img
                className="cursor-pointer w-36 h-20 mr-16"  // Logo margin adjustment (not padding)
                src="assets/SIX08-GI-logo-web.png"
                alt="Six08 Gastroenterology"
              />
            </Link>
          </div>

          {/* Right Section: Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                target={item.external ? '_blank' : undefined} // Conditionally set target="_blank" for external links
              >
                <span
                  className={`text-[#009ca7] font-light cursor-pointer hover:text-[#007f8f] p-2 text-base uppercase transition duration-300 ${pathname === item.href && item.name !== 'Home' ? 'text-[#3b82f6]' : ''}`}
                >
                  {item.name} {/* Removed <b> tag to ensure text is not bold */}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <img src="assets/Menu.svg" alt="Menu" className="w-7 h-7 text-[#007f8f]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeMenu}
        >
          <div className="relative bg-white p-6 rounded-lg shadow-2xl text-center w-3/4 max-w-md md:mt-0 mt-12">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 hover:text-red-700 transition-all"
            >
              <IoMdCloseCircle size={30} className="text-blue-500 hover:text-red-700" />
            </button>

            {/* Mobile Navigation Links */}
            {navLinks.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                target={item.external ? '_blank' : undefined} // Conditionally set target="_blank" for external links
                onClick={(event) => {
                  if (item.href.startsWith('#')) {
                    handleScrollToSection(event, item.href.slice(1));
                  } else {
                    setMenuOpen(false);
                  }
                }}
              >
                <span
                  className={`block text-[#009ca7] font-light cursor-pointer hover:text-[#007f8f] p-3 hover:bg-[#accbfc] transition duration-300 uppercase ${
                    pathname === item.href && item.name !== 'Home' ? 'bg-[#accbfc] text-[#3b82f6] border-b border-[#3b82f6]' : ''
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
