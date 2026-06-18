import React from 'react';

export default function ProductCard({ id, name, description, price, image, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-zinc-100">
      <div className="h-60 w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-102" />
      </div>

      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className="text-2xl font-bold text-[#e3357a] mb-2">{name}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed flex-grow mb-4">{description}</p>
        <div className="text-2xl font-bold text-[#e3357a] mb-4">₹{price}</div>
        <button 
          onClick={() => onAddToCart({ id, name, price, image })}
          className="w-full bg-[#e3357a] hover:bg-[#c22663] text-white font-bold py-3.5 rounded-xl uppercase tracking-wider text-xs transition-colors duration-200"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}