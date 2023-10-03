import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = index => {
      if (index === activeIndex) {
        setActiveIndex(null); // close the item if it's already open
      } else {
        setActiveIndex(index); // open the item
      }
    };

    const FAQs = [
        { question: 'Is canna bliss alcohol free?', answer: 'Yes! Canna bliss does not contain any alcohol.' },
        { question: 'How does RINS9 work?', answer: 'RINS9 is a water-souluble powder that absorbs into water instead of fat.This means it can first be absorbed sublingually allowing for rapid and effective elevation.' },
        { question: 'What makes RINS9 work?', answer: 'We start with quality materials from fresh flower which is turned into a nano-sonic water-soluble form, providing clean elevation without the need for alcohol.' },
        { question: 'Where can i buy it?', answer: <>Stop by one of our many Chattanooga locations, or shop online <a href='https://www.snapdragonhemp.com/product/canna-bliss-sparkling-infused-water-12oz-10mg-or-25mg-delta-9-thc/'>Here</a>!</>},

      ];

  return (
    <div className="faq-section">
      <h3 className="faq-title">Frequently Asked Questions</h3>
      {FAQs.map((faq, index) => (
        <div
          className={`faq-item ${index === activeIndex ? 'active' : ''}`}
          key={index}
          onClick={() => handleToggle(index)}
        >
          <p className="faq-question">{faq.question}</p>
          <p className="faq-answer">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default FAQ