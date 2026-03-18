import React from "react";

interface HeroBannerProps {
  backgroundImage?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export default function HeroBanner({
  backgroundImage = "https://images.pexels.com/photos/8637971/pexels-photo-8637971.jpeg",
  primaryHref = "#",
  secondaryHref = "#",
}: HeroBannerProps) {
  return (
    <>

      <section
        className="relative w-full min-h-[430px] md:min-h-[500px] flex items-center"
        style={{

          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
          {/* Heading */}
          <h4 className="text-3xl md:text-4xl font-bold text-green-950 leading-tight max-w-md mb-8">
            Making better health
            <br />
            possible everywhere
          </h4>


          <div className="flex flex-wrap items-center gap-4">

            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                bg-green-700 hover:bg-green-800 active:scale-95
                text-white font-semibold text-base
                rounded-full px-7 py-3
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
              "
            >
              Get started
            </a>


            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                bg-white/80 hover:bg-white active:scale-95
                text-green-900 font-semibold text-base
                border border-green-900/20
                rounded-full px-7 py-3
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
              "
            >
              Download the app
              <AppleIcon />
              <GooglePlayIcon />
            </a>
          </div>
        </div>
      </section>


      <div className="w-full bg-white px-6 md:px-10 py-5 max-w-6xl mx-auto">
        <p className="text-xs text-gray-500 leading-relaxed">
          The testimonials, opinions and statements reflect one individual's
          personal experience. Results and experiences may vary from person to
          person and will be unique to each individual. The testimonials are
          voluntarily provided and are not paid. The individual in the photo is
          not the individual who provided this testimonial.
        </p>
      </div>
    </>
  );
}



function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >

      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >

      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
    </svg>
  );
}