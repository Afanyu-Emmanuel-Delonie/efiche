import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white border-t border-white/5">
      <div className="max-container padding-container pt-16 pb-8">

      {/* Main Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start mb-16">

        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <h3 className="font-mono text-lg font-bold tracking-wide text-white">eFiche</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Efiche is a health-tech company dedicated to seamlessly connecting medical data
            between providers and patients. Guided by its mission to enhance access, efficiency,
            and equity in healthcare across Africa.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-9 h-9 bg-white rounded-xl flex items-center justify-center hover:bg-white/90 transition-colors">
              <Image src="/general/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={20} height={20} />
            </a>
            <a href="#" className="w-9 h-9 bg-white rounded-xl flex items-center justify-center hover:bg-white/90 transition-colors">
              <Image src="/general/linkedin-161-svgrepo-com.svg" alt="LinkedIn" width={20} height={20} />
            </a>
            <a href="#" className="w-9 h-9 bg-white rounded-xl flex items-center justify-center hover:bg-white/90 transition-colors">
              <Image src="/general/instagram-svgrepo-com.svg" alt="Instagram" width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Column 2: About Us */}
        <div className="flex flex-col gap-6 lg:pl-8">
          <h3 className="text-lg font-bold tracking-wide text-white">About Us</h3>
          <ul className="flex flex-col gap-4 text-white/70 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Solutions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">News &amp; Events</a></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold tracking-wide text-white">Legal</h3>
          <ul className="flex flex-col gap-4 text-white/70 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Get In Touch */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold tracking-wide text-white">Get In Touch</h3>
          <div className="flex flex-col gap-4 text-white/70 text-sm leading-relaxed">
            <p>Kigali, Rwanda</p>
            <p><a href="mailto:info@efiche.africa" className="hover:text-white transition-colors">info@efiche.africa</a></p>
            <div className="flex flex-col gap-0.5">
              <p>Office Number:</p>
              <p className="text-white/60">0798400111 / 0788307498</p>
            </div>
            <p>Support: <span className="text-white/60">0798400400</span></p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full pt-8 border-t border-white/5 flex justify-center">
        <p className="text-white/40 text-xs tracking-wide text-center">
          Copyright © 2026 eFiche. All rights reserved.
        </p>
      </div>

      </div>
    </footer>
  );
}
