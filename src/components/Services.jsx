export default function Services() {
  const specialtiesList = [
    {
      title: "Trauma & Complex PTSD",
      description:
        "Carefully paced trauma work emphasizing safety, nervous system stabilization, and processing single-incident or chronic childhood stress without overwhelm.",
      href: "#contact",
    },
    {
      title: "EMDR Therapy",
      description:
        "Evidence-based Eye Movement Desensitization & Reprocessing to help your brain reprocess painful stuck memories and restore emotional regulation.",
      href: "#contact",
    },
    {
      title: "Anxiety & Panic Relief",
      description:
        "Understand both the emotional and physiological sides of panic, constant dread, overthinking, and feeling internally on edge.",
      href: "#contact",
    },
    {
      title: "Burnout & High Pressure",
      description:
        "Support tailored for high-achievers, entrepreneurs, and creatives trapped in perfectionism and exhaustion after years of pushing through stress.",
      href: "#contact",
    },
  ];

  return (
    <section className="bg-white py-24 border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Section Heading */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2C3E35] font-medium leading-tight">
              Our <span className="italic text-[#C87D55]">specialties</span> <br />
              include...
            </h2>
            <p className="mt-4 text-sm text-[#4A5568] leading-relaxed max-w-sm">
              We integrate evidence-based methods with body-oriented techniques to bring relief that lasts beyond our sessions.
            </p>
          </div>

          {/* 4 Cards in 2x2 Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {specialtiesList.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#E8E4DC] flex flex-col justify-between hover:border-[#C87D55]/50 transition-colors duration-300"
              >
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#2C3E35] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <a
                  href={service.href}
                  className="text-xs uppercase tracking-widest font-bold text-[#2C3E35] hover:text-[#C87D55] transition-colors inline-flex items-center"
                >
                  Learn More <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}