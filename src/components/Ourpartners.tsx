import Image from 'next/image'
import React from 'react'
import { FadeUp } from './Motion'

const logos = [
  { src: '/companies/africa-new-life.png', alt: 'Africa New Life' },
  { src: '/companies/caristas.png',        alt: 'Caristas' },
  { src: '/companies/healthtech.png',      alt: 'HealthTech' },
  { src: '/companies/ministry-health.png', alt: 'Ministry of Health' },
  { src: '/companies/oxipit.png',          alt: 'Oxipit' },
  { src: '/companies/signalytic.png',      alt: 'Signalytic' },
]

function Ourpartners() {
  return (
    <section className="px-4 md:px-page py-5 pb-10 flex flex-col items-center gap-10">
      <FadeUp className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-sm md:text-base font-bold text-primary opacity-80">
          Trusted by leading organizations across Africa
        </h2>
      </FadeUp>
      <FadeUp delay={0.1} className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {logos.map(({ src, alt }) => (
          <div key={alt} className="relative h-12 w-28 md:h-14 md:w-32 hover:grayscale-0 transition duration-300">
            <Image src={src} alt={alt} fill className="object-contain" />
          </div>
        ))}
      </FadeUp>
    </section>
  )
}

export default Ourpartners
