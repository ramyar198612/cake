import React, { useState } from 'react';
import Testimonials from '../components/Testimonials'; // "What our customers say"
import BehindTheScenes from '../components/BehindTheScenes'; // "Behind the scenes"
import Footer from '../components/Footer'; // "footer"

// Complete combined pastry catalog structured as 4 Top, 4 Middle, and 2 Bottom cards
const ALL_PASTRIES_DATA = [
  // --- Top Row (4 Cards) ---
  {
    id: 'croissant',
    name: 'Croissant',
    category: 'Flaky',
    price: 85,
    meta: 'Fresh Baked • Eggless',
    description: 'Classic butter-laminated dough, proofed for 24 hours for ultimate honeycomb structure.',
    image: '/p5.png'
  },
  {
    id: 'chocolate-eclair',
    name: 'Chocolate Éclair',
    category: 'Choux',
    price: 90,
    meta: 'Chilled • Contains Egg',
    description: 'Delicate choux pastry piped with Madagascar vanilla bean cream and glazed with 70% dark chocolate.',
    image: '/p6.png'
  },
  {
    id: 'strawberry-tart',
    name: 'Strawberry Tart',
    category: 'Seasonal',
    price: 100,
    meta: 'Fresh Fruit • Eggless',
    description: 'Sweet sablee crust filled with silky creme patissiere and topped with farm-fresh berries.',
    image: '/p7.png'
  },
  {
    id: 'cream-puff',
    name: 'Cream Puff',
    category: 'Choux',
    price: 850, // Matches your custom test dataset pricing
    meta: '1 kg • Eggless',
    description: 'Light-as-air profiteroles stuffed with freshly whipped chantilly and dusted with snow sugar.',
    image: '/p1.png'
  },
  // --- Middle Row (4 Cards) ---
  {
    id: 'baklava',
    name: 'Baklava',
    category: 'Phyllo',
    price: 100,
    meta: 'Authentic • Eggless',
    description: 'Mediterranean phyllo layers with crushed pistachios, walnuts, and orange blossom honey.',
    image: '/p8.png'
  },
  {
    id: 'apple-turnover',
    name: 'Apple Turnover',
    category: 'Puff',
    price: 100,
    meta: 'Warm Serving • Eggless',
    description: 'Caramelized Granny Smith apples encased in a shattering, sugar-crusted puff pastry.',
    image: '/p9.png'
  },
  {
    id: 'cheese-danish',
    name: 'Cheese Danish',
    category: 'Flaky',
    price: 100,
    meta: 'Sweet Cream • Eggless',
    description: 'A tender danish pastry nestling a heart of sweet cream cheese and a hint of lemon zest.',
    image: '/p10.png'
  },
  {
    id: 'donut-pastry',
    name: 'Donut Pastry',
    category: 'Yeasted',
    price: 100,
    meta: 'Glazed • Eggless',
    description: 'Brioche-style dough, slow-fried and glazed with our signature wild honey and vanilla reduction.',
    image: '/p11.png'
  },
  // --- Bottom Row (2 Cards) ---
  {
    id: 'mille-feuille',
    name: 'Mille-Feuille',
    category: 'Puff',
    price: 100,
    meta: 'Classic French • Eggless',
    description: "A 'thousand layers' of caramelized puff pastry alternating with rich crème mousseline.",
    image: 'p12.png'
  },
  {
    id: 'banana-pastry-slice',
    name: 'Banana Pastry Slice',
    category: 'Sweet Slices',
    price: 100,
    meta: 'Praline Crust • Eggless',
    description: 'Moist banana-infused sponge topped with caramelized fruit and toasted hazelnut praline.',
    image: '/p13.png'
  }
];

const FILTER_CATEGORIES = ['All Pastries', 'Flaky', 'Choux', 'Puff', 'Seasonal', 'Phyllo', 'Yeasted', 'Sweet Slices'];

export default function Pastries() {
  const [activeCategory, setActiveCategory] = useState('All Pastries');
  const [checkoutItem, setCheckoutItem] = useState(null); 

  // Checkout State Hooks
  const [checkoutQty, setCheckoutQty] = useState(1);
  const [candlesAdded, setCandlesAdded] = useState(false);
  const [popperAdded, setPopperAdded] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('online'); 
  const [deliveryForm, setDeliveryForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    message: ''
  });

  // Client-Side Data Filters
  const filteredPastries = activeCategory === 'All Pastries'
    ? ALL_PASTRIES_DATA
    : ALL_PASTRIES_DATA.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  // Dynamic Event Route Triggers
  const handleOpenCheckout = (item) => {
    setCheckoutItem(item);
    setCheckoutQty(1);
    setCandlesAdded(false);
    setPopperAdded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelCheckout = () => {
    setCheckoutItem(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrderSubmit = (e) => {
    e.preventDefault();
    alert(`Order Confirmed!\nItem: ${checkoutItem.name}\nTotal Amount: ₹${totalFinalAmount}\nMethod: ${paymentMethod.toUpperCase()}`);
    setCheckoutItem(null);
  };

  // Live Math Calculations
  const itemBaseCost = checkoutItem ? checkoutItem.price * checkoutQty : 0;
  const addonCost = (candlesAdded ? 150 : 0) + (popperAdded ? 120 : 0);
  const cumulativeSubtotal = itemBaseCost + addonCost;
  const standardDeliveryFee = 50;
  const fixedTaxRatio = Math.round(cumulativeSubtotal * 0.053); 
  const totalFinalAmount = cumulativeSubtotal + standardDeliveryFee + fixedTaxRatio;

  return (
    <div className="w-full bg-[#FFF7F6] min-h-screen font-sans text-[#3d251e] overflow-x-hidden">
      
      {/* CONDITIONAL RENDER: CHECKOUT WORKFLOW VIEW */}
      {checkoutItem ? (
        <div className="max-w-7xl mx-auto pt-24 pb-16 px-4 md:px-12 text-left">
          
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-normal font-serif text-[#3d251e]">
              Complete Your Checkout
            </h1>
            <button 
              onClick={handleCancelCheckout}
              className="text-[#E3357A] font-medium text-sm hover:underline"
            >
              ← Back to Catalog
            </button>
          </div>

          {/* Master Content Setup */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* LEFT FORMS STREAM */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* STEP 1: REVIEW YOUR ORDER */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F4D2DB] text-[#E3357A] font-bold text-sm">
                    1
                  </span>
                  <h2 className="text-2xl font-serif text-[#3d251e]">Review Your Order</h2>
                </div>

                <div className="bg-white rounded-[24px] p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#F2E5E2] shadow-sm">
                  <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 w-full sm:w-auto">
                    <div className="w-32 h-24 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0">
                      <img src={checkoutItem.image} alt={checkoutItem.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center sm:text-left mt-4 sm:mt-0">
                      <h3 className="text-xl font-normal text-[#3d251e] font-serif">{checkoutItem.name}</h3>
                      <p className="text-xs text-zinc-400 mt-1">{checkoutItem.meta}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="text-lg font-bold text-[#3d251e]">₹{checkoutItem.price}</span>
                    
                    <div className="flex items-center border border-[#EFE3E1] bg-[#FFF7F6] rounded-xl overflow-hidden">
                      <button 
                        type="button" 
                        onClick={() => setCheckoutQty(q => Math.max(1, q - 1))}
                        className="px-4 py-2 hover:bg-[#FCEAE6] text-zinc-500 font-medium"
                      >
                        −
                      </button>
                      <span className="px-3 py-2 text-sm font-bold text-[#3d251e] min-w-[24px] text-center">
                        {checkoutQty}
                      </span>
                      <button 
                        type="button" 
                        onClick={() => setCheckoutQty(q => q + 1)}
                        className="px-4 py-2 hover:bg-[#FCEAE6] text-zinc-500 font-medium"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* ADDONS BLOCK */}
                <div className="w-full bg-[#E3357A] rounded-[24px] p-6 text-white space-y-4">
                  <h4 className="text-lg font-medium tracking-tight">Frequently bought together</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-4 flex items-center justify-between text-[#3d251e]">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-pink-100 rounded-xl overflow-hidden">
                          <img src="/can1.jpg" alt="Candles" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Premium Candles</p>
                          <p className="text-xs font-bold text-[#E3357A]">₹150</p>
                        </div>
                      </div>
                      <button type="button" onClick={() => setCandlesAdded(!candlesAdded)} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${candlesAdded ? 'bg-[#3d251e] text-white' : 'bg-[#E3357A] text-white hover:bg-[#c92a68]'}`}>
                        {candlesAdded ? 'Added' : 'Add'}
                      </button>
                    </div>

                    <div className="bg-white rounded-2xl p-4 flex items-center justify-between text-[#3d251e]">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-pink-100 rounded-xl overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=150&q=80" alt="Popper" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Party Popper</p>
                          <p className="text-xs font-bold text-[#E3357A]">₹120</p>
                        </div>
                      </div>
                      <button type="button" onClick={() => setPopperAdded(!popperAdded)} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${popperAdded ? 'bg-[#3d251e] text-white' : 'bg-[#E3357A] text-white hover:bg-[#c92a68]'}`}>
                        {popperAdded ? 'Added' : 'Add'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 2: DELIVERY FIELDS */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F4D2DB] text-[#E3357A] font-bold text-sm">
                    2
                  </span>
                  <h2 className="text-2xl font-serif text-[#3d251e]">Delivery Information</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-zinc-700">First Name</label>
                    <input type="text" name="firstName" required value={deliveryForm.firstName} onChange={handleFormInputChange} className="w-full bg-[#FCF3F1] border border-[#EFE3E1] rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#E3357A]" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-zinc-700">Last Name</label>
                    <input type="text" name="lastName" required value={deliveryForm.lastName} onChange={handleFormInputChange} className="w-full bg-[#FCF3F1] border border-[#EFE3E1] rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#E3357A]" />
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium text-zinc-700">Phone Number</label>
                  <input type="tel" name="phone" required value={deliveryForm.phone} onChange={handleFormInputChange} className="w-full bg-[#FCF3F1] border border-[#EFE3E1] rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#E3357A]" />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium text-zinc-700">Complete Address</label>
                  <textarea rows="3" name="address" required value={deliveryForm.address} onChange={handleFormInputChange} className="w-full bg-[#FCF3F1] border border-[#EFE3E1] rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#E3357A] resize-none" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-zinc-700">Delivery Date</label>
                    <input type="date" name="date" required value={deliveryForm.date} onChange={handleFormInputChange} className="w-full bg-[#FCF3F1] border border-[#EFE3E1] rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#E3357A] text-zinc-600 cursor-pointer" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-zinc-700">Preferred Time</label>
                    <input type="time" name="time" required value={deliveryForm.time} onChange={handleFormInputChange} className="w-full bg-[#FCF3F1] border border-[#EFE3E1] rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#E3357A] text-zinc-600 cursor-pointer" />
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium text-zinc-700">Message on Cake (Optional)</label>
                  <input type="text" name="message" value={deliveryForm.message} onChange={handleFormInputChange} className="w-full bg-[#FCF3F1] border border-[#EFE3E1] rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#E3357A]" />
                </div>
              </div>

              {/* STEP 3: PAYMENT METHOD */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F4D2DB] text-[#E3357A] font-bold text-sm">
                    3
                  </span>
                  <h2 className="text-2xl font-serif text-[#3d251e]">Payment Method</h2>
                </div>

                <div className="space-y-3">
                  <div onClick={() => setPaymentMethod('online')} className={`border rounded-2xl p-5 flex items-center justify-between cursor-pointer transition-all ${paymentMethod === 'online' ? 'border-[#E3357A] bg-white' : 'border-[#EFE3E1] bg-white opacity-75'}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'online' ? 'border-[#E3357A]' : 'border-zinc-300'}`}>
                        {paymentMethod === 'online' && <div className="w-2.5 h-2.5 rounded-full bg-[#E3357A]" />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#E3357A]">Pay Online</p>
                        <p className="text-xs text-zinc-400 mt-0.5">Credit/Debit Card, UPI, Netbanking or Wallets</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-zinc-400 text-lg">
                      <span>💳</span> <span>📱</span>
                    </div>
                  </div>

                  <div onClick={() => setPaymentMethod('cod')} className={`border rounded-2xl p-5 flex items-center justify-between cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-[#E3357A] bg-white' : 'border-[#EFE3E1] bg-white opacity-75'}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-[#E3357A]' : 'border-zinc-300'}`}>
                        {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 rounded-full bg-[#E3357A]" />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-700">Cash on Delivery</p>
                        <p className="text-xs text-zinc-400 mt-0.5">Pay when you receive your order</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* STICKY SUMMARY SIDEBAR */}
            <div className="bg-white border border-[#F2E5E2] rounded-[24px] p-6 space-y-6 shadow-sm lg:sticky lg:top-28">
              <h3 className="text-xl font-bold font-serif text-[#3d251e] pb-2 border-b border-zinc-100">Order Summary</h3>
              <div className="space-y-4 text-sm text-zinc-600">
                <div className="flex justify-between items-start gap-4">
                  <span>{checkoutItem.name} <span className="text-xs text-zinc-400">(x{checkoutQty})</span></span>
                  <span className="font-medium text-[#3d251e]">₹{itemBaseCost}</span>
                </div>
                {candlesAdded && <div className="flex justify-between items-center text-xs"><span className="text-zinc-400">Add-on: Premium Candles</span><span className="font-medium text-[#3d251e]">₹150</span></div>}
                {popperAdded && <div className="flex justify-between items-center text-xs"><span className="text-zinc-400">Add-on: Party Popper</span><span className="font-medium text-[#3d251e]">₹120</span></div>}
                <hr className="border-zinc-100" />
                <div className="flex justify-between items-center text-[15px]"><span>Subtotal</span><span className="font-medium text-[#3d251e]">₹{cumulativeSubtotal}</span></div>
                <div className="flex justify-between items-center text-xs"><span className="text-zinc-400">Delivery Fee</span><span className="font-medium text-[#3d251e]">₹{standardDeliveryFee}</span></div>
                <div className="flex justify-between items-center text-xs"><span className="text-zinc-400">Taxes</span><span className="font-medium text-[#3d251e]">₹{fixedTaxRatio}</span></div>
              </div>
              <hr className="border-zinc-100" />
              <div className="flex justify-between items-baseline"><span className="text-base font-bold text-[#3d251e]">Total</span><span className="text-2xl font-bold text-[#E3357A]">₹{totalFinalAmount}</span></div>
              <div className="pt-2">
                <button onClick={handlePlaceOrderSubmit} className="w-full bg-[#E3357A] hover:bg-[#c92a68] text-white font-medium py-3.5 px-4 rounded-xl text-sm tracking-wide uppercase transition-colors shadow-sm">
                  Place Order
                </button>
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs text-zinc-400 pt-1">
                <span>🛡️</span><span>100% Secure Checkout</span>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* CONDITIONAL RENDER: STANDARD CATALOG VISUAL GRID VIEW */
        <>
          {/* 1. HERO MOSAIC */}
          <section className="w-full pt-20 grid grid-cols-2 md:grid-cols-4 gap-0 leading-[0]">
            <div className="h-[180px] sm:h-[260px] w-full"><img src="/p1.png" alt="Pastry 1" className="w-full h-full object-cover" /></div>
            <div className="h-[180px] sm:h-[260px] w-full"><img src="/p2.jpg" alt="Pastry 2" className="w-full h-full object-cover" /></div>
            <div className="h-[180px] sm:h-[260px] w-full"><img src="/p3.jpg" alt="Pastry 3" className="w-full h-full object-cover" /></div>
            <div className="h-[180px] sm:h-[260px] w-full"><img src="/p4.jpg" alt="Pastry 4" className="w-full h-full object-cover" /></div>
          </section>

          {/* 2. HEADER TITLE DECK */}
          <section className="max-w-7xl mx-auto px-4 md:px-12 pt-16 pb-6 text-left">
            <h1 className="text-5xl md:text-6xl font-normal text-[#E3357A] font-serif mb-5">The Morning Collection</h1>
            <p className="text-[#575757] text-base md:text-lg max-w-3xl leading-relaxed">
              Explore our curated selection of hand-rolled pastries, baked daily using traditional French methods and premium stone-ground flour.
            </p>
          </section>

          {/* 3. SCROLLABLE HORIZONTAL FILTERS */}
          <section className="max-w-7xl mx-auto px-4 md:px-12 pb-12 overflow-x-auto flex items-center space-x-3 whitespace-nowrap scrollbar-none">
            {FILTER_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category ? 'bg-[#E3357A] text-white shadow-sm' : 'bg-[#EFE3E1] text-[#A66E76] hover:bg-[#e2d3d0]'
                }`}
              >
                {category}
              </button>
            ))}
          </section>

          {/* 4. PRODUCT MATRIX (Responsive 4-4-2 Grid Layout Structural Core) */}
          <section className="max-w-7xl mx-auto px-4 md:px-12 pb-24">
            {filteredPastries.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-zinc-200">
                <p className="text-zinc-400 font-medium">No fresh items found matching this specific filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {filteredPastries.map((item) => (
                  <div key={item.id} className="flex flex-col justify-between group">
                    <div>
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-zinc-50 relative shadow-sm">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <span className="absolute top-4 right-4 bg-[#E3357A] text-white text-[10px] tracking-widest font-bold px-3 py-1 rounded-full uppercase">
                          {item.category}
                        </span>
                      </div>

                      <div className="pt-5 pb-3 text-left">
                        <div className="flex justify-between items-baseline gap-2">
                          <h3 className="text-2xl font-normal text-[#E3357A] font-serif tracking-tight">{item.name}</h3>
                          <span className="text-xl font-bold text-[#E3357A] whitespace-nowrap">₹{item.price}</span>
                        </div>
                        <p className="text-[#575757] text-[15px] mt-2 leading-relaxed min-h-[72px]">{item.description}</p>
                      </div>
                    </div>

                    <div className="text-left">
                      <button
                        onClick={() => handleOpenCheckout(item)}
                        className="w-full bg-[#E3357A] hover:bg-[#c92a68] text-white font-medium py-3.5 px-4 rounded-xl text-sm transition-colors duration-200"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 5. USER TESTIMONIAL & STORY FOOTNOTES */}
          <Testimonials />
          <BehindTheScenes />

          {/* 6. EVENT BOOKING ACCENT FRAME */}
          <section className="w-full bg-[#F5E6E3] py-20 px-4 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm bg-zinc-100"><img src="/c10.jpg" alt="Custom Delivery Item 1" className="w-full h-full object-cover" /></div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm bg-zinc-100"><img src="/c11.jpg" alt="Custom Delivery Item 2" className="w-full h-full object-cover" /></div>
              </div>
              <div className="text-left space-y-6 lg:pl-6">
                <h2 className="text-4xl md:text-5xl font-serif font-normal text-[#3d251e] leading-tight">We accept birthday party & custom orders</h2>
                <p className="text-[#575757] text-base leading-relaxed">
                  Make your celebrations unforgettable with our exquisite range of custom creations. From themed birthday events to large parties, we design custom options tailored just for you.
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => handleOpenCheckout({ name: 'Custom Celebration Party Box', price: 2500, meta: 'Tailored Event Package', image: '/c10.jpg' })} 
                    className="w-full sm:w-auto bg-[#E3357A] hover:bg-[#c92a68] text-white font-medium py-3.5 px-10 rounded-xl transition-all shadow-sm text-sm uppercase tracking-wider"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* FOOTER INSTANCE (Stays consistently loaded at the base of both workflows) */}
      <Footer />

    </div>
  );
}