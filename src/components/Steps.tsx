import React from "react";

const steps = [
  {
    number: "01",
    title: "Register and Create an Account",
    description:
      "Fill in the registration form with your essential details, such as name, facility type (if a provider), and contact information.",
  },
  {
    number: "02",
    title: "Verify Your Identity via OTP",
    description:
      "Check your registered phone number or email for a One-Time Password (OTP) and enter it to safely activate your account.",
  },
  {
    number: "03",
    title: "Access the Dashboard",
    description:
      "Log in with your credentials to start managing electronic medical records, checking consultations, or scheduling digital health appointments immediately.",
  },
];

function Steps() {
  return (
    <section className="py-24 lg:py-28 xl:py-32">
      <div className="max-container padding-container flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono text-primary leading-snug">
          Our Procedure
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-xl">
          Getting started is simple. Follow these steps to integrate our digital
          health ecosystem into your medical facility.
        </p>
      </div>

      {/* Steps row */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-0">
        {steps.map(({ number, title, description }, i) => (
          <React.Fragment key={number}>
            {/* Step */}
            <div className="flex flex-col items-center text-center gap-4 flex-1">
              <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-white font-bold font-mono text-lg">{number}</span>
              </div>
              <h3 className="font-semibold text-primary font-mono">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{description}</p>
            </div>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:flex items-start justify-center pt-8 w-12 shrink-0">
                <div className="h-px w-full bg-primary/20" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Steps;
