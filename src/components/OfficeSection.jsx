import { MapPin, Shield, Video, Sun } from 'lucide-react';

export default function OfficeSection() {
  return (
    <section id="office" className="bg-[#FBF9F5] py-24 border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest text-[#C87D55] font-semibold mb-3">
            In-Person Santa Monica Sanctuary
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2C3E35] font-medium mb-5">
            A Quiet, Grounding Space for <span className="italic text-[#C87D55]">Healing.</span>
          </h2>
          <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed">
            Located at <strong className="text-[#2C3E35] font-semibold">123th Street 45 W, Santa Monica, CA 90401</strong>, our private office is intentionally designed to feel calm, uncluttered, and grounded. Filled with natural light, the space is crafted to help your nervous system settle the moment you step through the door.
          </p>
        </div>

        {/* 2-3 Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="aspect-[16/11] rounded-2xl overflow-hidden border border-[#E8E4DC] shadow-sm group">
            <img
              src="/images/office1.jpeg"
              alt="Private, quiet therapy room with natural light at Dr. Maya Reynolds' Santa Monica counseling office"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>
          <div className="aspect-[16/11] rounded-2xl overflow-hidden border border-[#E8E4DC] shadow-sm group">
            <img
              src="/images/office2.jpeg"
              alt="Natural lighting and uncluttered interior of therapy room"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Supporting Details & Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E8E4DC] shadow-xs">
            <MapPin size={22} className="text-[#C87D55] shrink-0" />
            <div className="text-left">
              <p className="text-xs uppercase text-[#4A5568] font-semibold">Location</p>
              <p className="text-sm font-medium text-[#2C3E35]">123th St 45 W, Santa Monica</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E8E4DC] shadow-xs">
            <Sun size={22} className="text-[#C87D55] shrink-0" />
            <div className="text-left">
              <p className="text-xs uppercase text-[#4A5568] font-semibold">Environment</p>
              <p className="text-sm font-medium text-[#2C3E35]">Natural Light & Private</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E8E4DC] shadow-xs">
            <Video size={22} className="text-[#C87D55] shrink-0" />
            <div className="text-left">
              <p className="text-xs uppercase text-[#4A5568] font-semibold">Flexibility</p>
              <p className="text-sm font-medium text-[#2C3E35]">In-Person & CA Telehealth</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}