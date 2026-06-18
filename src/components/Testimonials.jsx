import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Verified Buyer',
      text: '"The best chocolate truffle I have ever had! The delivery was perfectly on time and the packaging kept the cake completely intact. Highly recommend!"',
      avatar: '/cake/sarah.jpg'
    },
    {
      name: 'Michael Roberts',
      role: 'Event Booking',
      text: '"We ordered a custom themed cake for my daughter\'s birthday. It looked absolutely stunning and tasted heavenly. Thank you for making her day special."',
      avatar: '/cake/mic.jpg'
    },
    {
      name: 'Emily Chen',
      role: 'Verified Buyer',
      text: '"Their macarons are to die for! So fresh and the perfect texture. The hygiene and quality standards they maintain are truly impressive."',
      avatar: '/cake/emi.jpg'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-12 py-16 text-center">
      <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 flex flex-col justify-between text-left">
            <div>
              <div className="text-amber-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">{rev.text}</p>
            </div>
            <div className="flex items-center space-x-4 border-t pt-4">
              <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-[#3d251e]">{rev.name}</h4>
                <p className="text-xs text-zinc-400">{rev.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}