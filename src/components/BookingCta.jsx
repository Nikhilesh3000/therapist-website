export default function BookingCta() {
  return (
    <section id="contact" className="bg-[#FBF9F5] py-24 border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Peek Image */}
        <div className="lg:col-span-3 hidden lg:block">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E8E4DC]">
            <img
              src="/images/sunlight.png"
              alt="Calm peaceful reflection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center Booking Card */}
        <div className="lg:col-span-6 text-center max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C87D55] font-semibold mb-3">
            Schedule an Appointment
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C3E35] font-medium mb-6">
            Begin your journey toward <span className="italic text-[#C87D55]">balance.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-8">
            Reaching out is often the hardest step. Whether you prefer in-person sessions at our private Santa Monica office or virtual telehealth across California, I am here to walk alongside you.
          </p>
          <a
            href="mailto:contact@drmayareynolds.com"
            className="inline-block px-10 py-4 rounded-full border border-[#2C3E35] text-[#2C3E35] font-medium hover:bg-[#2C3E35] hover:text-white transition-all duration-300"
          >
            Book a Free Consultation
          </a>
        </div>

        {/* Right Peek Image */}
        <div className="lg:col-span-3 hidden lg:block">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E8E4DC]">
            <img
              src="/images/coast-side.png"
              alt="Therapeutic space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
