import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cake from './pages/Cake';
import Pastries from './pages/Pastries';
import About from './pages/About';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart or increment quantity if already exists
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Automatically open the panel to show success status
  };

  // Modify individual row quantities dynamically
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + amount;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // Automatically drop product when count drops to zero
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#faf5f2] relative text-[#3d251e] antialiased">
        
        {/* Floating Festive Offer Overlay (Visible across all homepage blocks) */}
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-[#e3357a] text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-xl z-40 pointer-events-none whitespace-nowrap">
          Christmas offer 25%
        </div>

        <Navbar totalItems={totalItems} onCartClick={() => setIsCartOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/cake" element={<Cake onAddToCart={addToCart} />} /> {/* Passed cart functionality down */}
            <Route path="/pastries" element={<Pastries />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Slide-out Shopping Cart Sidebar Panel */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end animate-fadeIn">
            <div className="w-full max-w-md bg-white h-full p-6 flex flex-col shadow-2xl relative z-50">
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h2 className="text-2xl font-bold text-[#3d251e]">Your Basket ({totalItems})</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-2xl text-zinc-400 hover:text-[#e3357a] transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Cart Rows Content Container */}
              <div className="flex-grow overflow-y-auto space-y-4 pr-1">
                {cart.length === 0 ? (
                  <div className="text-center py-20 text-zinc-400">
                    <p className="text-4xl mb-2">🛒</p>
                    <p>Your basket is empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center space-x-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl" />
                        <div>
                          <h4 className="font-bold text-[#e3357a] text-base">{item.name}</h4>
                          <p className="text-sm text-zinc-500">₹{item.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 bg-zinc-100 rounded-lg p-1.5">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="bg-white text-zinc-700 w-6 h-6 rounded flex items-center justify-center font-bold shadow-sm hover:bg-zinc-50"
                        >
                          -
                        </button>
                        <span className="font-semibold px-1 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="bg-white text-zinc-700 w-6 h-6 rounded flex items-center justify-center font-bold shadow-sm hover:bg-zinc-50"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Calculation Area */}
              <div className="border-t pt-4 mt-4 space-y-4">
                <div className="flex justify-between text-xl font-bold text-[#3d251e]">
                  <span>Total Due:</span>
                  <span className="text-[#e3357a]">₹{totalPrice}</span>
                </div>
                <button 
                  onClick={() => alert('Order processing initialized!')}
                  className="w-full bg-[#e3357a] hover:bg-[#c22663] text-white font-bold py-4 rounded-xl uppercase tracking-wider text-sm transition-all shadow-md"
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
            {/* Background Backdrop click escape route handler */}
            <div className="absolute inset-0 -z-10" onClick={() => setIsCartOpen(false)}></div>
          </div>
        )}

      </div>
    </Router>
  );
}

export default App;