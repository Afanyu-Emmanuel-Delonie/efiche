import Image from "next/image";
import React from "react";
import { FadeUp } from "./Motion";

function Aboutus() {
  const stats = [
    { label: "Countries Served", value: "3+" },
    { label: "Facilities", value: "95+" },
    { label: "Patients served", value: "40k+" },
  ];

  return (
    <section className="px-4 md:px-page py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">

      {/* Left — image with rotated square bg */}
      <FadeUp delay={0} className="relative w-full md:flex-1 flex items-center justify-center" style={{ minHeight: '420px' }}>
        <div
          className="absolute w-80 h-80 md:w-80 md:h-72 rounded-2xl bg-primary border border-secondary/20"
          style={{ transform: "rotate(-10deg)" }}
        />
        <div className="relative w-80 md:w-full h-80 md:h-80 rounded-2xl overflow-hidden shadow-xl z-10">
          <Image src="/general/about.png" alt="About eFiche" fill className="object-cover" />
        </div>
      </FadeUp>

      {/* Right — content */}
      <FadeUp delay={0.15} className="w-full md:flex-1 flex flex-col gap-5">
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

        <div className="flex items-center justify-between gap-0 mt-5 w-full">
          {stats.map(({ label, value }, i) => (
            <div key={label} className="flex items-stretch flex-1">
              <div className="flex flex-col items-center gap-0.5 px-2 w-full">
                <h2 className="text-xl md:text-4xl font-extrabold font-mono text-primary">{value}</h2>
                <p className="text-gray-500 text-[10px] md:text-sm text-center">{label}</p>
              </div>
              {i < stats.length - 1 && <div className="w-px self-stretch bg-primary/20" />}
            </div>
          ))}
        </div>
      </FadeUp>

    </section>
  );
}

export default Aboutus;
