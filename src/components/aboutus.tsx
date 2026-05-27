import Image from "next/image";
import React from "react";

function Aboutus() {
  const stats = [
    { label: "Countries Served", value: "3+" },
    { label: "Facilities", value: "95+" },
    { label: "Patients served", value: "40k+" },
  ];

  return (
    <section className="px-4 md:px-page py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Left — image with rotated square bg */}
      <div className="relative w-full md:flex-1 flex items-center justify-center" style={{ minHeight: '420px' }}>
        {/* Rotated square */}
        <div
          className="absolute w-80 h-80 md:w-80 md:h-72 rounded-2xl bg-primary border border-secondary/20"
          style={{ transform: "rotate(-10deg)" }}
        />

        {/* Image */}
        <div className="relative w-80 md:w-full h-80 md:h-80 rounded-2xl overflow-hidden shadow-xl z-10">
          <Image
            src="/general/about.png"
            alt="About eFiche"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right — content */}
      <div className="w-full md:flex-1 flex flex-col gap-5">
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-snug font-mono">
            About Us
          </h2>
          <div className="flex-grow h-px bg-primary opacity-30" />
        </div>
        <p className="text-gray-500 text-base leading-relaxed">
          At eFiche, we provide cutting-edge tools that empower healthcare
          professionals with AI and data-driven solutions. Our platform enhances
          decision-making, improves patient outcomes, and drives operational
          efficiency.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-0 mt-5">
          {stats.map(({ label, value }, i) => (
            <div key={label} className="flex items-stretch">
              <div className="flex flex-col items-center gap-1 px-8">
                <h2 className="text-2xl md:text-4xl font-extrabold font-mono text-primary">
                  {value}
                </h2>
                <p className="text-gray-500 text-xs md:text-sm">{label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px self-stretch bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
