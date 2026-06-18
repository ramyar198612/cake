import React from 'react';

export default function Hero() {
  const handleOrderRedirect = () => {
    document.getElementById('cakes-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center bg-[#f7ebe4] text-[#a0785d] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
          🍰 Premium Bakery
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#3d251e] leading-tight">
          Freshly Baked Happiness Delivered to Your Door
        </h1>
        <p className="text-lg text-zinc-600 max-w-md leading-relaxed">
          Experience the finest cakes and pastries crafted with love, premium ingredients, and a touch of magic. Perfect for every celebration.
        </p>
        <button 
          onClick={handleOrderRedirect}
          className="bg-[#e3357a] hover:bg-[#c22663] text-white font-bold py-4 px-10 rounded-xl text-lg shadow-md transition-all duration-200"
        >
          Order Now
        </button>
      </div>

      <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-md">
        <img 
          src="/Homegreen.jpg" 
          alt="Mint Green Celebration Cake" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=800";
          }}
        />
      </div>
    </section>
  );
}