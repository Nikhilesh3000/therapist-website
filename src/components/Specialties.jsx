export default function Specialties() {
  const specialtiesLeft = [
    "Trauma & PTSD Recovery",
    "Anxiety & Panic Management",
    "Somatic Mind-Body Therapy",
    "EMDR Processing"
  ];

  const specialtiesRight = [
    "Burnout & Perfectionism",
    "Life Transitions & Grief",
    "Boundary & Self-Esteem Work",
    "Mindfulness & Stress Reduction"
  ];

  return (
    <section id="services" className="bg-[#FBF9F5] py-20 border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E35] font-medium">
              Areas of <br />
              <span className="italic text-[#C87D55]">expertise.</span>
            </h2>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            <div>
              {specialtiesLeft.map((item, idx) => (
                <div key={idx} className="py-4 border-b border-[#E8E4DC] text-[#2C3E35] font-medium text-lg">
                  {item}
                </div>
              ))}
            </div>
            <div>
              {specialtiesRight.map((item, idx) => (
                <div key={idx} className="py-4 border-b border-[#E8E4DC] text-[#2C3E35] font-medium text-lg">
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}