import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionTitle from "../../common/SectionTitle";
import Cross from "../../assets/icons/Cross.svg";

const Faq = () => {
  const [isShowing, setIsShowing] = useState(null);

  const questions = [
    "How can I stay engaged with Modern Blog on social media?",
    "Are there advertising opportunities on Modern Blog?",
    "Can I share your blog content on social media or other websites?",
    "How can I contact the Modern Blog team?",
    "Do you have a comment policy?",
  ];

  return (
    <div className="w-full pt-40 pb-20">
      <SectionTitle title="FAQ" />
      <p className="pt-5 text-center md:w-[580px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        convallis, dolor sed consectetur gravida, neque sem tristique.
      </p>
      <div className="flex flex-col gap-5 pt-10">
        {questions.map((question, i) => (
          <div
            key={i}
            className="bg-[#211e29] p-8 rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setIsShowing(isShowing === i ? null : i)}
          >
            <div className="flex items-center justify-between">
              <p className="text-white">{question}</p>
              <button>
                <img src={Cross} alt="Cross" className="rotate-45" />
              </button>
            </div>
            <AnimatePresence>
              {isShowing === i && (
                <>
                  <div className="h-4" />
                  <motion.p
                    className="text-sm text-center"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ ease: "linear", duration: 0.4 }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
