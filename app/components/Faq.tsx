"use client";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export function Faq() {
  // State to track which FAQ is active (only one can be open at a time)
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Explicitly typing the state to allow null

  // FAQ data
  const faqs = [
    {
      question: 'What is a Gastroenterologist?',
      answer: 'Gastroenterologists are medical specialists trained in the diagnosis and treatment of disorders of the esophagus, stomach, small intestine, large intestine, liver, biliary system and pancreas. They possess expertise in gastrointestinal endoscopic procedures for diagnostic and therapeutic purposes.'
    },
    {
      question: 'What is an upper endoscopy (EGD)?',
      answer: 'Upper endoscopy allows your doctor to examine the lining of the upper part of your gastrointestinal tract, which includes the esophagus, stomach and duodenum (first portion of the small intestine). An EGD is used for stretching a narrowed esophagus if you are experiencing difficulty swallowing, the removal of polyps or swallowed foreign objects.'
    },
    {
      question: 'What happens following my upper endoscopy?',
      answer: 'Your throat may be slightly sore, and you might feel bloated because of the air introduced into your stomach.'
    },
    {
      question: 'What is a colonoscopy?',
      answer: 'Colonoscopy enables your doctor to examine the lining of your colon (large intestine) and rectum as well as short segment of the last part of your small bowel (ileum). It is the most effective way to evaluate your entire colon for the presence of colorectal cancer or polyps as well as look for inflammation. Early detection can lead to effective medical treatment, prevent surgery, and save lives.'
    },
    {
      question: 'What if a polyp is found?',
      answer: 'A polyp is an abnormal growth found in the colon lining. They vary in size and shape, and while most are benign (non-cancerous), they have the potential to turn into cancer over time. It is important to remove pre-cancerous polyps as a preventative measure for colorectal cancer. Very small polyps may be totally destroyed by fulguration (burning). Larger polyps are removed by a technique called snare polypectomy. A wire loop (snare) is passed through the scope and removes the polyp from the intestinal wall. This technique causes no pain to the patient.'
    }
  ];

  // Toggle FAQ function (only one can be open at a time)
  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Close the currently open FAQ if clicked again
  };

  return (
    <div className="bg-[#b9dde8] py-8 px-4">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-[#4a4a4a] mb-6 text-center py-4">Gastroenterology</h2>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="cursor-pointer p-4  bg-white"
                onClick={() => toggleFAQ(index)} // Toggle the state on click
              >
                <div className="flex items-center">
                  <span className="mr-3">
                    {activeIndex === index ? <FaMinus size={13} /> : <FaPlus size={13} />} {/* Toggle icon based on the state */}
                  </span>
                  <span>{faq.question}</span>
                </div>
                <div
                  className={`overflow-hidden transform transition-all duration-700 ease-in-out ${
                    activeIndex === index ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                  }`} // Using scaleY for smooth expansion and collapse
                >
                  {activeIndex === index && (
                    <div className="mt-2 p-4 bg-white">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a 
            href="/contact/#faqfull" 
            className="inline-block px-8 py-3 text-white bg-[#009ca7] font-semibold rounded-sm hover:bg-[#007d8e] transition-colors"
          >
            More FAQ’s
          </a>
        </div>
      </div>
    </div>
  );
}

export default Faq;
