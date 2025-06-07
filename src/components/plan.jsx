import React from 'react';

const plans = [
  {
    name: "Personal Plan",
    subtitle: "For you",
    users: "Individual",
    price: "₹850 per month",
    note: "Billed monthly or annually. Cancel anytime.",
    button: "Start subscription",
    features: [
      "Access to 26,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
    ],
  },
  {
    name: "Team Plan",
    subtitle: "For your team",
    users: "2 to 20 people",
    price: "₹2,000 a month per user",
    note: "Billed annually. Cancel anytime.",
    button: "Start subscription",
    features: [
      "Access to 13,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
  },
  {
    name: "Enterprise Plan",
    subtitle: "For your whole organization",
    users: "More than 20 people",
    price: "Contact sales for pricing",
    note: "",
    button: "Request a demo",
    features: [
      "Access to 30,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
      "Hands-on tech training with add-on",
      "Strategic implementation services with add-on",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Accelerate growth – for you or your organization</h2>
          <p className="mt-2 text-gray-600">
            Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-6 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-500">{plan.subtitle}</p>
              <p className="text-sm mt-2 mb-1 text-gray-700">{plan.users}</p>
              <div className="text-lg font-semibold mt-4">{plan.price}</div>
              {plan.note && <p className="text-xs text-gray-500">{plan.note}</p>}
              <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-semibold">
                {plan.button}
              </button>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-600 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
