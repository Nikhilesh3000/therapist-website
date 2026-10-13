export default function Hero() {
  return (
    <section className="relative bg-[#FBF9F5] py-16 md:py-24 border-b border-[#E8E4DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Portrait Image (Conejo Valley style) */}
        <div className="lg:col-span-3 hidden md:block">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-[#E8E4DC]">
            <img
              src="images/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, California"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center Content Block */}
        <div className="lg:col-span-6 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C87D55] font-semibold mb-3">
            Online & In-Person Counseling in Santa Monica & Across CA
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C3E35] font-medium leading-[1.15] mb-6">
            Rebuild your foundation on solid ground and finally begin to{' '}
            <span className="italic text-[#C87D55] font-normal">thrive.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed mb-8">
            Specialized therapy for high-achieving adults, creatives, and professionals to reflect, heal, and grow through anxiety, trauma, and burnout.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2C3E35] text-white font-medium hover:bg-[#1E2C25] transition-all duration-300 shadow-sm"
            >
              Book an Appointment
            </a>
            <a
              href="#office"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#2C3E35]/30 text-[#2C3E35] font-medium hover:bg-[#2C3E35]/5 transition-all duration-300"
            >
              Explore the Office
            </a>
          </div>
        </div>

        {/* Right Beach/Nature Image Peek */}
        <div className="lg:col-span-3">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-[#E8E4DC]">
            <img
              src="/images/coast-side.png"
              alt="Santa Monica calm coastal landscape"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}