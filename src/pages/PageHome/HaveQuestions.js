import React, { useState } from "react";

export default function HaveQuestions() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  let toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  let faqs = [
    {
      question: "Do I need prior fitness experience?",
      answer:
        "No, I work with clients of all levels, from beginners to advanced athletes.",
    },
    {
      question: "Where do the training sessions take place?",
      answer:
        "Sessions can be held at a local gym, outdoors, or at your preferred location in Oporto.",
    },
    {
      question: "What equipment do I need?",
      answer:
        "Basic workout attire is sufficient; equipment will be provided as needed.",
    },
    {
      question: "How often should I train?",
      answer:
        "Frequency depends on your goals, but most clients train 2-3 times per week.",
    },
    {
      question: "Do you offer group sessions?",
      answer:
        "Yes, small group training is available for those who prefer a team environment.",
    },
    {
      question: "How do I get started?",
      answer:
        "Contact me to schedule a free initial consultation and fitness assessment.",
    },
    {
      question: "What are your rates?",
      answer:
        "Competitive pricing with package options to suit different needs and budgets.",
    },
    {
      question: "Can you help with injury rehabilitation?",
      answer:
        "Yes, I can customize programs to aid in recovery and strengthen vulnerable areas.",
    },
  ];

  return (
    <section className="HaveQuestions">
      <h2>Your Questions Answered</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeFAQ === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{activeFAQ === index ? "-" : "+"}</span>
            </div>
            {activeFAQ === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
