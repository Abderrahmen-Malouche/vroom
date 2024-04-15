import React from 'react';

import "./FAQItem.css"
const FAQItem = ({ id, isOpen, question, answer, toggleOpen }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={() => toggleOpen(id)}>
        {question}
        <span className="faq-toggle">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FAQItem