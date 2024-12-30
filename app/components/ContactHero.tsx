"use client";

export function ContactHero() {
  return (
    <div
      style={{
        backgroundImage: 'url(assets/doctor-evaluation.jpg)',
        backgroundColor: '#b9dde8',
        minHeight: '600px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // This keeps the background fixed while scrolling
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // Position for the overlay
        transition: 'background-position 0.2s ease-out', // Optional smooth transition
      }}
    >
      {/* Overlay with transparent color */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#b9dde8',
          opacity: 0.5, // Adjust opacity for the transparency effect
          zIndex: 1, // Make sure the overlay is above the image
        }}
      ></div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="text-[#4f4f4f] text-[65px] font-extrabold leading-[1.4]">
          Contact Us
        </h1>
      </div>
    </div>
  );
}
