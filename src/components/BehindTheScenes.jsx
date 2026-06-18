import React from 'react';

export default function BehindTheScenes() {
  const processSteps = [
    { title: 'Baking with Care', img: '/cake/woman.jpg' },
    { title: 'Artistic Decoration', img: '/cake/art.jpg' },
    { title: 'Safe Packaging', img: '/cake/safe.jpg' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-12 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Behind the Scenes</h2>
      <p className="text-zinc-600 max-w-2xl mx-auto mb-12 text-base leading-relaxed">
        Made in a clean and hygienic kitchen with premium ingredients. Our bakers pour their passion into every single creation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {processSteps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-4">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-[#3d251e]">{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}