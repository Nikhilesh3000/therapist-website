'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const faqs = [
    {
      q: "Do you offer in-person or virtual therapy sessions?",
      a: "We offer both in-person therapy at our office in Santa Monica, CA, and secure virtual telehealth appointments for clients across California."
    },
    {
      q: "What can I expect during our initial consultation?",
      a: "Our free 15-minute consultation is a relaxed conversation to learn about what brings you to therapy, answer your questions, and determine if our practice is the right fit for your goals."
    },
    {
      q: "How does Somatic Therapy and EMDR differ from traditional talk therapy?",
      a: "While talk therapy focuses primarily on cognitive processing, somatic therapy and EMDR work directly with the nervous system to discharge stored physical trauma and reprocess painful memories."
    }
  ];

  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 border-b border-[#E8E4DC]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E35] font-medium text-center mb-12">
          Frequently Asked <span className="italic text-[#C87D55]">Questions.</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[#E8E4DC] rounded-2xl overflow-hidden bg-[#FBF9F5]">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-serif text-lg font-medium text-[#2C3E35]"
              >
                <span>{faq.q}</span>
                {openIdx === index ? <Minus size={20} className="text-[#C87D55] shrink-0" /> : <Plus size={20} className="text-[#C87D55] shrink-0" />}
              </button>
              {openIdx === index && (
                <div className="px-6 pb-5 text-[#4A5568] text-sm leading-relaxed border-t border-[#E8E4DC]/50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
