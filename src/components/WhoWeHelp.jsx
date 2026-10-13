export default function WhoWeHelp() {
  const cards = [
  {
    title: "High-Achieving Adults",
    image: "/images/overthinking.png",
    description: "For those who feel functional on the outside while quietly struggling with constant worry, racing thoughts, and chronic physical tension."
  },
  {
    title: "Trauma & PTSD Recovery",
    image: "/images/somatic-healing.png",
    description: "Paced trauma work using EMDR and body-oriented tools to gently process single-incident and complex life experiences without re-traumatization."
  },
  {
    title: "Burnout & Creatives",
    image: "/images/burnout.png",
    description: "Support for entrepreneurs, creatives, and professionals trapped in perfectionism and exhaustion after years of pushing through high pressure."
  }
];

  return (
    <section className="bg-white py-20 border-y border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E35] font-medium">
            Who we <span className="italic text-[#C87D55]">help.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-5 border border-[#E8E4DC]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover brightness-[1.03] contrast-[0.98]"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2C3E35] mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}