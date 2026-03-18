


import React, { useRef, useState } from "react";


const logos = [
  { alt: "PepsiCo", src: "https://w1.pngwing.com/pngs/706/638/png-transparent-pepsico-logo-rock-on-tv-television-sponsor-microsoft-azure-exhibition-pepsi-bottling-group-text-thumbnail.png" },
  { alt: "Google Proxy Logo", src: "https://lh3.googleusercontent.com/proxy/pQ4T3_D5boL5SICny-b4WeJVI8OF9kJC0FEclPpP0Wd0GnKXZP7JbgrYw_IiQdwjf4ygWP5xL4CzFj3T" },
  { alt: "Under Armour", src: "https://cdn1.sportngin.com/attachments/photo/1878/8507/UNDER-ARMOUR-LOGO2_large.png" },
  { alt: "Friends", src: "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?semt=ais_hybrid&w=740" },
  { alt: "Movie Logo", src: "https://img.freepik.com/premium-vector/letter-v-movie-logo_327835-962.jpg" },
  { alt: "SM Letter", src: "https://img.freepik.com/premium-vector/sm-letter-logo-design_688606-10.jpg" },
  { alt: "WF Letter", src: "https://img.freepik.com/premium-vector/initial-wf-letter-logo-design-template-vector-illustration_718265-647.jpg" },
];

export default function TrustedByMarquee() {

  const [paused, setPaused] = useState(false);

  return (
    <section className="w-full py-14 bg-white overflow-hidden">

      <div className="text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight max-w-2xl mx-auto">
          Trusted by top healthcare companies across the globe—and accepted by
          all major insurers&nbsp;
        </h2>
      </div>


      <div
        className="relative w-full"
        style={{

          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >

        <div
          className="flex items-center gap-24 w-max"
          style={{
            animation: "marquee 35s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >

          {[...logos, ...logos].map((logo, index) => (
            <LogoItem key={index} logo={logo} />
          ))}
        </div>
      </div>


      <div className="flex justify-end px-6 mt-4">
        <button
          onClick={() => setPaused((p) => !p)}
          title={paused ? "Play marquee" : "Pause marquee"}
          aria-label={paused ? "Play marquee" : "Pause marquee"}
          className="
            w-10 h-10 rounded-full border border-green-300
            flex items-center justify-center
            text-green-700 hover:bg-green-50 transition-colors
            focus:outline-none focus:ring-2 focus:ring-green-400
          "
        >

          {paused ? (
            // Play triangle
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M4 3l10 5-10 5V3z" />
            </svg>
          ) : (
            // Pause bars
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <rect x="3" y="3" width="4" height="10" />
              <rect x="9" y="3" width="4" height="10" />
            </svg>
          )}
        </button>
      </div>


      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}


function LogoItem({ logo }: { logo: { alt: string; src: string } }) {
  return (
    <div
      className="
        flex-shrink-0 h-24 flex items-center justify-center
        transition-all duration-300
      "
      style={{ minWidth: "180px" }}
    >
      {logo.src ? (

        <img
          src={logo.src}
          alt={logo.alt}
          className="max-h-16 max-w-[180px] object-contain"
          loading="lazy"
        />
      ) : (

        <span
          className="
            text-green-800 font-bold text-lg whitespace-nowrap
            border-2 border-green-200 rounded-full px-6 py-2.5 bg-green-50
          "
        >
          {logo.alt}
        </span>
      )}
    </div>
  );
}