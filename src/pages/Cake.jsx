import React, { useState } from 'react';
// Importing your pre-built components safely
import BehindTheScenes from '../components/BehindTheScenes';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

// Data mapping synchronized with your flavor catalog sections
const PRIMARY_CAKES = [
  {
    id: 'choc-truffle',
    name: 'Chocolate Truffle',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'black-forest',
    name: 'Black Forest',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pineapple',
    name: 'Pineapple',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80'
  }
];

// Data mapping synchronized with your second grid block
const FEATURED_CAKES_SECTION_TWO = [
  {
    id: 'sec2-red-velvet-cake',
    name: 'Red Velvet Cake',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sec2-red-velvet',
    name: 'Red Velvet',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sec2-black-forest',
    name: 'Black Forest',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sec2-pineapple',
    name: 'Pineapple',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: '/c5.jpg'
  }
];

export default function Cake() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    flavour: 'Chocolate Truffle',
    eventType: 'Birthday',
    specialInstructions: ''
  });

  const openOrderModal = (cakeName) => {
    setFormData((prev) => ({ ...prev, flavour: cakeName }));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Order enquiry registered successfully for ${formData.fullName}!`);
    closeModal();
  };

  return (
    <div className="w-full bg-[#FFF7F6] min-h-screen font-sans text-[#3d251e]">
      
      {/* 1. TOP HERO HERO GRID ROWS */}
      <section className="w-full pt-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-[250px] sm:h-[380px] rounded-3xl overflow-hidden shadow-sm">
            <img 
              src="/c1.jpg" 
              alt="Featured Cake 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[250px] sm:h-[380px] rounded-3xl overflow-hidden shadow-sm">
            <img 
              src="/c2.jpg" 
              alt="Featured Cake 2" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. MAIN HEADER BLOCK */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 pt-16 pb-8 text-left">
        <h1 className="text-5xl md:text-6xl font-normal text-[#E3357A] font-serif mb-4">
          The Cake Flavours
        </h1>
        <p className="text-[#6E6E6E] text-base md:text-lg max-w-3xl leading-relaxed">
          Explore our curated selection of hand-rolled pastries, baked daily using traditional French methods and premium stone-ground flour.
        </p>
      </section>

      {/* 3. FLAVOURS GRID SECTION ONE */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRIMARY_CAKES.map((cake) => (
            <div key={cake.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F4EBE9] flex flex-col justify-between">
              <div>
                <div className="h-56 w-full overflow-hidden bg-zinc-100">
                  <img src={cake.image} alt={cake.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-left space-y-2">
                  <h3 className="text-2xl font-bold text-[#E3357A]">{cake.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{cake.description}</p>
                </div>
              </div>
              <div className="p-6 pt-0 text-left space-y-4">
                <span className="block text-xl font-bold text-[#E3357A]">₹{cake.price}</span>
                <button
                  onClick={() => openOrderModal(cake.name)}
                  className="w-full bg-[#E3357A] hover:bg-[#c92a68] text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-base"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FLAVOURS GRID SECTION TWO */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_CAKES_SECTION_TWO.map((cake) => (
            <div key={cake.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F4EBE9] flex flex-col justify-between">
              <div>
                <div className="h-56 w-full overflow-hidden bg-zinc-100">
                  <img src={cake.image} alt={cake.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-left space-y-2">
                  <h3 className="text-2xl font-bold text-[#E3357A]">{cake.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{cake.description}</p>
                </div>
              </div>
              <div className="p-6 pt-0 text-left space-y-4">
                <span className="block text-xl font-bold text-[#E3357A]">₹{cake.price}</span>
                <button
                  onClick={() => openOrderModal(cake.name)}
                  className="w-full bg-[#E3357A] hover:bg-[#c92a68] text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-base"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTEGRATED PRE-BUILT SUB-SECTIONS */}
      <BehindTheScenes />
      <Testimonials />

      {/* 6. CUSTOM BIRTHDAY & PARTY ORDERS SECTION (Matches Screenshot 2026-06-17 214017_2.jpg layout and color exactly) */}
      <section className="w-full bg-[#F5E6E3] py-16 px-4 md:px-12 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Block: Two Showcase Images Side-by-Side */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-zinc-100">
              <img 
                src="/c10.jpg" 
                alt="Exquisite Custom Pastel Layered Cake" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-zinc-100">
              <img 
                src="c11.jpg" 
                alt="Unique Theme Styled Birthday Cake" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Block: Explanatory Content Deck with Feature Points */}
          <div className="text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-[#3d251e] leading-tight">
              We accept birthday party & custom orders
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed">
              Make your celebrations unforgettable with our exquisite range of custom cakes. From intimate birthdays to grand gatherings, we bring your sweet visions to life.
            </p>

            {/* Feature Points Check List */}
            <ul className="space-y-3 pt-2 text-[#3d251e] font-medium">
              <li className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#E3357A] text-[#E3357A] text-xs font-bold">✓</span>
                <span>Customized Birthday Cakes</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#E3357A] text-[#E3357A] text-xs font-bold">✓</span>
                <span>Unique Themed Designs</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#E3357A] text-[#E3357A] text-xs font-bold">✓</span>
                <span>Bulk Party Orders & Dessert Tables</span>
              </li>
            </ul>

            {/* Action Trigger Button */}
            <div className="pt-4">
              <button 
                onClick={() => openOrderModal('Custom Themed Cake')}
                className="w-full sm:w-auto bg-[#E3357A] hover:bg-[#c92a68] text-white font-semibold py-3.5 px-10 rounded-xl transition-all shadow-md text-center text-base"
              >
                Book Now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. ATTACHED GLOBAL FOOTER COMPONENT */}
      <Footer />

      {/* 8. PERFECTLY CENTERED MODAL DIALOG (No inner scrollbar design layout) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm p-4">
          
          <div className="absolute inset-0" onClick={closeModal} />

          {/* Form Container */}
          <div className="relative w-full max-w-2xl bg-[#F59BBF] text-[#3d251e] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden">
            
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-5 text-2xl font-bold text-[#3d251e] hover:opacity-70 transition-opacity"
            >
              ✕
            </button>

            <div className="text-center mt-2 mb-6 max-w-md mx-auto">
              <p className="text-sm font-semibold leading-relaxed">
                Fill out the form below and our bakery team will get back to you to confirm your order details.
              </p>
            </div>

            {/* Input grid alignment layout deck */}
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-90">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#FFF2F6] border-0 rounded-xl p-3 text-zinc-800 focus:outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-90">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full bg-[#FFF2F6] border-0 rounded-xl p-3 text-zinc-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Select Flavour */}
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-90">Select Flavour</label>
                  <div className="relative">
                    <select 
                      name="flavour"
                      value={formData.flavour}
                      onChange={handleInputChange}
                      className="w-full bg-[#FFF2F6] border-0 rounded-xl p-3 text-zinc-800 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="Chocolate Truffle">Chocolate Truffle</option>
                      <option value="Red Velvet Cake">Red Velvet Cake</option>
                      <option value="Red Velvet">Red Velvet</option>
                      <option value="Black Forest">Black Forest</option>
                      <option value="Pineapple">Pineapple</option>
                      <option value="Custom Themed Cake">Custom Themed Cake</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">▼</div>
                  </div>
                </div>

                {/* Event Type */}
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-90">Event Type</label>
                  <div className="relative">
                    <select 
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full bg-[#FFF2F6] border-0 rounded-xl p-3 text-zinc-800 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Custom Party">Custom Party</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">▼</div>
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider opacity-90">Special Instructions / Message</label>
                <textarea 
                  name="specialInstructions"
                  rows="2"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  placeholder="E.g., Please write 'Happy Birthday' on top..."
                  className="w-full bg-[#FFF2F6] border-0 rounded-xl p-3 text-zinc-800 focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#E3357A] hover:bg-[#c92a68] text-white font-bold py-3.5 rounded-xl transition-all shadow-md text-center text-base uppercase tracking-wider"
                >
                  Submit Order Enquiry
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}