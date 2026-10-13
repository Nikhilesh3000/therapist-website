export default function About() {
  return (
    <section id="about" className="bg-[#E8EFE9]/50 py-20 border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Bio Text */}
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-widest text-[#C87D55] font-semibold mb-3">
            About Dr. Maya Reynolds
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E35] font-medium mb-6">
            We’re here to make a <span className="italic text-[#C87D55]">difference.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#4A5568] text-sm sm:text-base leading-relaxed mb-8">
            <p>
              I am a licensed clinical psychologist in Santa Monica, CA, specializing in trauma recovery, anxiety relief, and somatic healing. My practice was built on the belief that true healing occurs when we address both mind and body.
            </p>
            <p>
              By combining evidence-based methods like EMDR and CBT with a warm, grounded approach, I help individuals release chronic tension, build resilience, and step into an authentic sense of peace.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center text-[#2C3E35] font-semibold hover:text-[#C87D55] transition-colors group"
          >
            Read Full Biography <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-[#E8E4DC]">
            <img
              src="images/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, California"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}