export default function Footer() {
  return (
    <footer className="bg-[#2C3E35] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        
        {/* Col 1 */}
        <div>
          <h3 className="font-serif text-2xl font-medium mb-2">Dr. Maya Reynolds, PsyD</h3>
          <p className="text-xs text-[#C87D55] uppercase tracking-wider font-semibold mb-4">
            Licensed Clinical Psychologist
          </p>
          <p className="text-xs text-white/70 leading-relaxed">
            Integrative, evidence-based therapy for adults navigating anxiety, trauma, and burnout. Providing in-person care in Santa Monica and telehealth across California.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C87D55] mb-4">Navigation</h4>
          <ul className="space-y-2 text-xs text-white/80">
            <li><a href="#about" className="hover:text-white transition-colors">About Dr. Maya</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Specialties</a></li>
            <li><a href="#office" className="hover:text-white transition-colors">Our Santa Monica Office</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C87D55] mb-4">Specialties</h4>
          <ul className="space-y-2 text-xs text-white/80">
            <li>EMDR & Trauma Therapy</li>
            <li>Anxiety & Panic Disorder</li>
            <li>Professional Burnout & Perfectionism</li>
            <li>Somatic & Mindfulness Practices</li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C87D55] mb-4">Practice Location</h4>
          <p className="text-xs text-white/90 leading-relaxed font-medium mb-1">
            123th Street 45 W
          </p>
          <p className="text-xs text-white/80 leading-relaxed mb-3">
            Santa Monica, CA 90401
          </p>
          <p className="text-xs text-white/70">Offering in-person visits & California-wide secure Telehealth.</p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50">
        <p>© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Santa Monica, CA • California Licensed Clinical Psychologist</p>
      </div>
    </footer>
  );
}