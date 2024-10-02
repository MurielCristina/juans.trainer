import React from "react";

export default function HowCanIHelp() {
  let services = [
    {
      title: "Customized Workout Plans",
      description:
        "Tailored exercises designed to meet your unique fitness goals.",
      icon: "🏋️‍♂️",
    },
    {
      title: "One-on-One Coaching",
      description:
        "Individual attention to ensure proper form and maximize results.",
      icon: "👨‍🏫",
    },
    {
      title: "Nutritional Guidance",
      description:
        "Expert advice to complement your training and enhance performance.",
      icon: "🍎",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Training sessions that fit seamlessly into your busy lifestyle.",
      icon: "⏰",
    },
    {
      title: "Progress Tracking",
      description:
        "Regular assessments to monitor improvements and adjust plans accordingly.",
      icon: "📈",
    },
    {
      title: "Motivation and Support",
      description: "Encouragement and accountability every step of the way.",
      icon: "💪",
    },
  ];

  return (
    <section className="HowCanIHelp">
      <h2>Unlock Your Potential with Personalized Training</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
