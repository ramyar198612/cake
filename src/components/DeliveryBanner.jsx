import React from 'react';

export default function DeliveryBanner() {
  const points = [
    { icon: '🕒', text: 'Fast delivery within 60 minutes' },
    { icon: '📦', text: 'Safe and secure packaging' },
    { icon: '📍', text: 'Live order tracking' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-12 my-8">
      <div className="bg-[#f2c4d2] bg-opacity-60 rounded-2xl p-12 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
        <div className="space-y-6 text-left z-10">
          <h2 className="text-4xl font-extrabold text-[#3d251e]">Freshness Delivered Quickly</h2>
          <ul className="space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-center space-x-4 text-lg font-semibold text-[#3d251e]">
                <span className="text-2xl bg-white p-2 rounded-xl shadow-sm">{point.icon}</span>
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Minimalist cycling layout delivery illustration node */}
        <div className="text-9xl opacity-80 md:block hidden transform translate-x-4 z-10 select-none">
          🚴
        </div>
      </div>
    </section>
  );
}