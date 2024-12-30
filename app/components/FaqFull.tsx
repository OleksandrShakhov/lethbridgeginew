"use client";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export function FaqFull() {
  // State to track which FAQ is active (only one can be open at a time)
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Explicitly typing the state to allow null

  // FAQ data
  const faqsGeneralGastro = [
    {
      question: 'What is a Gastroenterologist?',
      answer: 'Gastroenterologists are medical specialists trained in the diagnosis and treatment of disorders of the esophagus, stomach, small intestine, large intestine, liver, biliary system and pancreas. They possess expertise in gastrointestinal endoscopic procedures for diagnostic and therapeutic purposes.'
    },
    {
      question: 'What is a General Surgeon?',
      answer: 'General Surgeons are surgical specialists trained to diagnose a range of illnesses and manage the patient through the pre-operative, operative and post-operative phases of their treatment. The majority of conditions managed by these surgeons involve the abdomen and its contents, but they are also involved in treating benign and malignant conditions of the breast, soft tissue, skin and endocrine glands. General Surgeons are also involved in the management of major trauma.'
    },
    {
      question: 'What is an upper endoscopy (EGD)?',
      answer: "​Upper endoscopy allows your doctor to examine the lining of the upper part of your gastrointestinal tract, which includes the esophagus, stomach and duodenum (first portion of the small intestine). An EGD is used for stretching a narrowed esophagus if you are experiencing difficulty swallowing, the removal of polyps or swallowed foreign objects."    },
    {
      question: '​Why is an upper endoscopy done?',
      answer: 'Upper endoscopy helps your doctor evaluate symptoms of persistent upper abdominal pain, nausea, vomiting, difficulty swallowing or the cause of bleeding from the upper gastrointestinal tract.'    },
    {
      question: 'How do I prepare for the upper endoscopy?',
      answer: 'Your stomach must be empty. Do not eat or drink anything, including water, for approximately eight hours before the procedure. Our schedulers will tell you when to start fasting.'    },
    {
      question: 'What can I expect during an upper endoscopy?',
      answer: 'Sedation will be given before and during the procedure to help you relax and make you sleepy. You will lie comfortably on your left side. The doctor will pass the endoscope through your mouth and into the esophagus, stomach and duodenum. The endoscope does not interfere with your breathing. The scope blows air into the stomach to expand the folds of tissue making it easier for the physician to examine your stomach. You should experience little to no discomfort with this procedure but it can induce some gagging.'    },
    {
      question: 'What happens following my upper endoscopy?',
      answer: 'Your throat may be slightly sore, and you might feel bloated because of the air introduced into your stomach.'    },
    {
      question: 'Why is a biopsy done?',
      answer: 'A suspicious area may be found and a biopsy is needed to distinguish between benign and cancerous tissues or other abnormalities. This is done with small forceps passed through the scope with no discomfort to the patient. Biopsies are done even if cancer is not suspected. Your doctor may do a biopsy to test for Helicobacter pylori, bacteria that cause ulcers or for celiac disease.'    },
    {
      question: 'What is a colonoscopy?',
      answer: 'Colonoscopy enables your doctor to examine the lining of your colon (large intestine) and rectum as well as short segment of the last part of your small bowel (ileum). It is the most effective way to evaluate your entire colon for the presence of colorectal cancer or polyps as well as look for inflammation. Early detection can lead to effective medical treatment, prevent surgery, and save lives.'    },
    {
      question: 'How do I prepare for the colonoscopy?',
      answer: 'A colonoscopy requires a cleansing preparation of the colon the day before the procedure so that the colon can be fully visualized. This is usually accomplished by drinking a liquid that causes complete emptying of the colon. Our schedulers will tell you what dietary restrictions to follow and what cleansing routine to use as prescribed by your doctor. It is important to follow your directions carefully.'    },
    {
      question: 'What can I expect during the colon exam?',
      answer: 'Sedation will be given before and during your procedure to help you relax and make you sleepy. You will lie on your left side as a flexible tube is inserted into your anus and slowly advanced into the rectum and colon. The procedure can be crampy at times but is not typically a painful experience. During the procedure, you may be asked to lay on your back or right side to help advance the scope.'    },
    {
      question: 'What if a polyp is found?',
      answer: 'A polyp is an abnormal growth found in the colon lining. They vary in size and shape, and while most are benign (non-cancerous, they have the potential to turn into cancer over time. It is important to remove pre-cancerous polyps as a preventative measure for colorectal cancer. Very small polyps may be totally destroyed by fulguration (burning). Larger polyps are removed by a technique called snare polypectomy. A wire loop (snare) is passed through the scope and removes the polyp from the intestinal wall. This technique causes no pain to the patient.'    },
    {
      question: 'What can you expect after your colonoscopy?',
      answer: 'You may experience some bloating or mild cramping because of the air introduced into your colon. These symptoms should disappear when you pass gas. Rarely, there may be some bleeding. If a large amount of bleeding occurs, the patient should go the emergency room for assessment. In some exceptional circumstances, a hole or tear is caused by the procedure.'    },
    {
      question: 'Do I have to drink all the solution to cleanse my colon?',
      answer: 'Please follow all instructions and make every effort to drink all of the purging solution. The height and weight of a patient does not determine the amount of solution needed to purge your colon. Remember, we are trying to clean out your entire digestive tract. If your colon is not clean, the physician cannot do a thorough exam. We may have to reschedule your test for another day.'    },
    {
      question: 'What if I start vomiting while drinking the solution?',
      answer: 'If you develop symptoms of nausea or vomiting, stop the prep for an hour then resume the process. If you were not able to complete the prep, call our office as soon as possible to make appropriate arrangements. It may be necessary to reschedule your procedure and try an alternative prep.'    },
    {
      question: 'What are clear liquids?',
      answer: 'Clear liquids include black coffee, tea, 7-Up or Sprite, apple juice, Gatorade, Popsicles, Jell-O, broth, and bouillon. Do not consume any milk products or anything that is red, green, or purple.'    }
  ];

  const faqsProcedureRelated = [
    {
      question: 'Why do I need to bring someone to drive me home after my procedure?',
      answer: 'Because of the sedation given during your procedure, you will need a friend or family member to come with you and drive you home. These medications make the test easier for the patient, but do not wear off immediately. You will be legally impaired after the exam. For your safety, you should not operate machinery or drive following your procedure. During your recovery time, your family may be allowed to sit with you until you are discharged (dependant on limitations due to COVID). You may not use public transportation unless accompanied by family or a friend.'
    },
    {
      question: 'How long will my procedure take?',
      answer: 'The actual procedure will take 15-20 minutes. Registration, pre-operative and post-operative care will keep you in our facility approximately 1½ to 2 hours.'    },
    {
      question: 'How long will I have to wait for the results of my procedure?',
      answer: 'The physician may speak with you about the visual findings on your procedure before you go home. If biopsies were taken or polyps removed, your Physician will contact you with your results within a week from your procedure date.'
    },
    {
      question: 'How soon may I eat after my procedure?',
      answer: 'Unless your physician gives you dietary restrictions, you are free to eat a normal breakfast or lunch after leaving our endoscopy center.'
    },
    {
      question: 'How soon may I return to work?',
      answer: 'Most patients are able to return to work the following day.'
    },
    {
      question: 'What about follow-up care?',
      answer: 'Follow-up care is an important part of your treatment plan. Our administration staff will follow up with our patients based on your Physician’s notes.'
    },
    {
      question: 'Will the results of my visit be sent to my primary care physician?',
      answer: 'Our findings and recommendations will be discussed with you and a letter and/or copy of your procedure note will be forwarded to your primary care physician for their records.'     },
    {
      question: 'What is virtual colonoscopy and can I have that instead?',
      answer: 'Virtual colonoscopy is a technique designed to reconstruct three-dimensional images of the colon using a CAT scan. Studies have suggested that this technique might miss a significant percentage of smaller polyps that can be found with colonoscopy. Virtual colonoscopy requires you to be cleansed just as if you were having a traditional colonoscopy. Furthermore, if polyps were detected by virtual colonoscopy, you would still need a traditional colonoscopy to remove these polyps, thus resulting in two procedures. We do not recommend virtual colonoscopy as an adequate screening test.'     }
  ];

  const faqsPolypRelated = [
    {
      question: 'What forms of payment do you accept?',
      answer: 'We accept payment by cash, debit, Visa, MasterCard.'
    },
    {
      question: 'Procedure for appointments. Cancellations and Re-Scheduling.',
      answer: 'We make every effort to accommodate your scheduling needs. It is important to be on time for your procedure, arriving early as requested, and to notify us in the event you need to reschedule your appointment. We reserve for our patients, the amount of time we need to provide quality health care. Therefore, sufficient notice to change your procedure appointment is necessary in order to offer this time to another patient. We require a minimum of seven (7) business days prior to your scheduled procedure appointment for any cancellation or rescheduling needs. PROCEDURE APPOINTMENTS CANCELLED/RESCHEDULED WITHOUT SUFFICIENT NOTICE (3 BUSINESS DAYS) MAY INCUR A CHARGE OF $ 100 FOR A RESCHEDULING FEE. THIS CHARGE IS NOT COVERED OR PAID BY ANY INSURANCE COMPANY OR ALBERTA HEALTH; THEREFORE, THE CHARGE WILL BE BILLED DIRECTLY TO THE PATIENT.'     
    }
  ];

  // Toggle FAQ function (only one can be open at a time)
  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Close the currently open FAQ if clicked again
  };

  // Render FAQ block
  const renderFAQBlock = (title: string, faqs: Array<{ question: string, answer: string }>) => {
    return (
      <div className="mt-8" id='faqfull'>
        <h3 className="text-3xl font-semibold text-[#4a4a4a] mb-4">{title}</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border border-dotted border-[#4f4f4f4]">
            <div
              className="cursor-pointer p-3 bg-white"
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
    );
  };

  return (
    <div className="bg-[#f9f9f9] py-8 px-4">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* General Gastroenterology FAQ */}
        {renderFAQBlock("General Gastroenterology FAQ’s", faqsGeneralGastro)}

        {/* Procedure Related Questions FAQ */}
        {renderFAQBlock("Procedure Related Questions", faqsProcedureRelated)}

        {/* Polyp Related Questions FAQ */}
        {renderFAQBlock("Polyp Related Questions", faqsPolypRelated)}

      </div>
    </div>
  );
}

export default FaqFull;
