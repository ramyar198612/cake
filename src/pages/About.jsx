import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function About() {
  const navigate = useNavigate();

  // Navigation click handler for the call-to-action block
  const handleExploreClick = () => {
    navigate('/pastries');
  };

  return (
    <div className="w-full bg-[#FFF7F6] min-h-screen font-sans text-[#3d251e] overflow-x-hidden pt-20">
      
      {/* 1. OUR STORY SECTION [Screenshot 2026-06-18 153108.jpg & Screenshot 2026-06-18 153116.jpg] */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#EFE3E1] px-3 py-1.5 rounded-md text-xs font-medium text-[#3d251e]">
              <span>📖</span>
              <span>Our Story</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-normal font-serif text-[#3d251e] leading-tight">
              Crafting Sweet Memories Since 2010
            </h1>
            
            <p className="text-[#575757] text-base md:text-lg leading-relaxed pt-2">
              What started as a small home kitchen experiment has blossomed into the city's most loved premium bakery. 
              At Sweet Delights, we believe that every cake tells a story and every pastry holds a piece of magic.
            </p>
            
            <p className="text-[#575757] text-base md:text-lg leading-relaxed">
              Our founder, guided by a passion for authentic flavors and artistic presentation, built this bakery on 
              one simple principle: never compromise on quality. Today, that principle still guides everything we do.
            </p>
          </div>
          
          {/* Right Image Column */}
          <div className="w-full h-[380px] md:h-[460px] rounded-[24px] overflow-hidden shadow-sm bg-zinc-100">
            <img 
              src="/a1.jpg" 
              alt="Sweet Delights Bakery Interior storefront" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>


      {/* 2. VALUES SECTION [Screenshot 2026-06-18 153130.png] */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-normal text-[#3d251e]">
            What We Stand For
          </h2>
          <p className="text-[#575757] text-sm md:text-base leading-relaxed">
            Our commitment to excellence goes beyond just baking. It's about delivering a truly premium, hygienic, and unforgettable experience.
          </p>
        </div>

        {/* 3-Column Core Value Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card A: Premium Ingredients */}
          <div className="bg-white rounded-[24px] p-8 text-center space-y-5 border border-[#F2E5E2] shadow-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#F4D2DB] flex items-center justify-center text-[#E3357A] text-2xl font-bold">
              ✨
            </div>
            <h3 className="text-xl font-bold text-[#3d251e]">Premium Ingredients</h3>
            <p className="text-[#575757] text-sm leading-relaxed max-w-xs">
              We source only the finest chocolates, freshest farm fruits, and purest vanilla to ensure every bite is bursting with authentic flavor.
            </p>
          </div>

          {/* Card B: Uncompromised Hygiene */}
          <div className="bg-white rounded-[24px] p-8 text-center space-y-5 border border-[#F2E5E2] shadow-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#F4D2DB] flex items-center justify-center text-[#E3357A] text-2xl font-bold">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-[#3d251e]">Uncompromised Hygiene</h3>
            <p className="text-[#575757] text-sm leading-relaxed max-w-xs">
              Baked in a spotless, modern kitchen. We follow rigorous safety and sanitization standards because your health is our priority.
            </p>
          </div>

          {/* Card C: Baked with Love */}
          <div className="bg-white rounded-[24px] p-8 text-center space-y-5 border border-[#F2E5E2] shadow-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#F4D2DB] flex items-center justify-center text-[#E3357A] text-2xl font-bold">
              ❤️
            </div>
            <h3 className="text-xl font-bold text-[#3d251e]">Baked with Love</h3>
            <p className="text-[#575757] text-sm leading-relaxed max-w-xs">
              Our team of expert chefs pours their heart and soul into every recipe, ensuring each creation is as beautiful as it is delicious.
            </p>
          </div>

        </div>
      </section>


      {/* 3. MASTER BAKERS SECTION [Screenshot 2026-06-18 153142.png] */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-normal text-[#3d251e]">
            Meet Our Master Bakers
          </h2>
          <p className="text-[#575757] text-sm md:text-base leading-relaxed">
            The talented hands and creative minds behind your favorite sweet delights.
          </p>
        </div>

        {/* Profiles Team Layout Frame */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Member 1: Chef Isabella */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#F2E5E2] shadow-sm bg-zinc-100">
              <img 
                src="/a2.jpg" 
                alt="Chef Isabella Head Pastry Chef" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#3d251e]">Chef Isabella</h3>
              <p className="text-[#E3357A] text-xs font-semibold uppercase tracking-wider mt-1">Head Pastry Chef</p>
            </div>
            <p className="text-[#575757] text-sm leading-relaxed max-w-sm">
              With 15 years of experience in French patisseries, Isabella leads our team with visionary flavor combinations.
            </p>
          </div>

          {/* Member 2: Rahul Sharma */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#F2E5E2] shadow-sm bg-zinc-100">
              <img 
                src="/a3.jpg" 
                alt="Rahul Sharma Master Chocolatier" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#3d251e]">Rahul Sharma</h3>
              <p className="text-[#E3357A] text-xs font-semibold uppercase tracking-wider mt-1">Master Chocolatier</p>
            </div>
            <p className="text-[#575757] text-sm leading-relaxed max-w-sm">
              A perfectionist at heart, Rahul ensures every truffle and brownie has the perfect rich, fudgy texture.
            </p>
          </div>

          {/* Member 3: Mei Lin */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#F2E5E2] shadow-sm bg-zinc-100">
              <img 
                src="/a4.jpg" 
                alt="Mei Lin Lead Cake Decorator" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#3d251e]">Mei Lin</h3>
              <p className="text-[#E3357A] text-xs font-semibold uppercase tracking-wider mt-1">Lead Cake Decorator</p>
            </div>
            <p className="text-[#575757] text-sm leading-relaxed max-w-sm">
              Mei brings cakes to life with her incredible piping skills and eye for stunning, modern aesthetic details.
            </p>
          </div>

        </div>
      </section>


      {/* 4. CALL TO ACTION BANNER [Screenshot 2026-06-18 153152.png] */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="w-full bg-[#EBA6B8] rounded-[32px] p-12 md:p-16 text-center space-y-6 shadow-sm">
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-[#3d251e]">
            Ready to taste the magic?
          </h2>
          <p className="text-[#3d251e]/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Explore our menu of handcrafted cakes and delightful pastries. Freshly baked happiness is just a click away.
          </p>
          <div className="pt-4">
            <button 
              onClick={handleExploreClick}
              className="bg-white hover:bg-[#FFF7F6] text-[#3d251e] font-semibold py-3.5 px-8 rounded-xl text-sm transition-all shadow-sm"
            >
              Explore Menu & Order
            </button>
          </div>
        </div>
      </section>

      {/* 5. FOOTER AT BOTTOM */}
      <Footer />

    </div>
  );
}