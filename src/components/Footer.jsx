import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-100 py-10 mt-12 text-center space-y-3">
      <div className="flex justify-center items-center space-x-2 text-2xl font-black text-[#e3357a]">
        <span>🍰</span>
        <span>Sweet Delights</span>
      </div>
      <p className="text-zinc-500 text-sm">Freshly baked happiness delivered to your door.</p>
      <p className="text-xs text-zinc-400 pt-2">© 2025 Sweet Delights Bakery. All rights reserved.</p>
    </footer>
  );
}