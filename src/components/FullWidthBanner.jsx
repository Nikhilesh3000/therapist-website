export default function FullWidthBanner() {
  return (
    <section className="relative py-28 md:py-36 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('/images/coast-side.png` }}>
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-[#1E2C25]/70 backdrop-blur-[1px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-relaxed font-light">
          "You deserve a place where your story is heard, valued, and understood. You don’t have to carry this alone."
        </h2>
      </div>
    </section>
  );
}