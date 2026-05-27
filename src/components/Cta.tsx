import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FadeUp } from "./Motion";

function Cta() {
  return (
    <section className="px-4 md:px-page py-12 md:py-20">
    <div className="relative rounded-4xl min-h-[400px] md:min-h-[480px] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <Image
        src="/general/cta.png"
        alt="CTA background"
        fill
        className="object-cover"
      />

      {/* Purple overlay from bottom */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(26,19,51,1) 0%, rgba(26,19,51,0.85) 40%, rgba(26,19,51,0.3) 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <FadeUp delay={0.1} className="relative z-20 flex flex-col items-start gap-5 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono text-white leading-snug max-w-xl">
          Ready to Transform Healthcare with Us?
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-lg">
          Empower your healthcare facility with AI-assisted medical records and seamless digital workflows. Request a demo to see how eFiche can transform your clinic.
        </p>
        <div className="flex gap-3">
          <Button href="#contact" variant="secondary" className="px-8 py-3">Get Started</Button>
          <Button href="#contact" variant="ghost" className="px-8 py-3">Partner With Us</Button>
        </div>
      </FadeUp>
    </div>
    </section>
  );
}

export default Cta;
