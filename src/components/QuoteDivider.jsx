export default function QuoteDivider() {
  return (
    <section className="bg-[#FBF9F5] py-20 border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-[#E8E4DC]">
            <img
              src="/images/coast-side.png"
              alt="Calm grounding coastline"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C3E35] leading-tight font-light">
            Honoring where you’ve been <span className="font-serif italic text-[#C87D55]">&amp;</span> helping shape where you’re headed.
          </h2>
        </div>
      </div>
    </section>
  );
}