import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import BehindTheScenes from '../components/BehindTheScenes';
import DeliveryBanner from '../components/DeliveryBanner';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const cakesData = [
  { id: 1, name: 'Chocolate Truffle', description: 'Rich, dense chocolate layers coated in a smooth ganache.', price: 850, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600' },
  { id: 2, name: 'Red Velvet', description: 'Rich, dense chocolate layers coated in a smooth ganache.', price: 850, image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600' },
  { id: 3, name: 'Black Forest', description: 'Rich, dense chocolate layers coated in a smooth ganache.', price: 850, image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600' },
  { id: 4, name: 'Pineapple', description: 'Rich, dense chocolate layers coated in a smooth ganache.', price: 850, image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600' }
];

const pastriesData = [
  { id: 5, name: 'Gourmet Cupcakes', description: 'Assorted vanilla, velvet and cream pastel premium cupcakes.', price: 120, image: '/cup.jpg' },
  { id: 6, name: 'Fudge Brownies', description: 'Triple chocolate chewy squares baked with real dark cocoa fudge chunks.', price: 150, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600' },
  { id: 7, name: 'Strawberry Cheesecake', description: 'Classic NY style style dense cream cheese slice topped with glazes.', price: 250, image: '/strawberry.jpg' },
  { id: 8, name: 'French Macarons', description: 'Colorful delicate almond meringue shells loaded with sweet ganache filling.', price: 300, image: '/color.jpg' }
];

export default function Home({ onAddToCart }) {
  return (
    <div className="w-full">
      <Hero />
      
      {/* Cakes Section Container */}
      <section id="cakes-section" className="max-w-7xl mx-auto px-12 py-8 text-center">
        <h2 className="text-4xl font-bold text-[#3d251e] mb-12">Our Signature Flavours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cakesData.map((cake) => (
            <ProductCard key={cake.id} {...cake} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Pastries Section Container (From Screenshot 2026-06-16 213458.jpg) */}
      <section id="pastries-section" className="max-w-7xl mx-auto px-12 py-12 text-center">
        <h2 className="text-4xl font-bold text-[#3d251e] mb-12">Delightful Pastries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pastriesData.map((pastry) => (
            <ProductCard key={pastry.id} {...pastry} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <BehindTheScenes />
      <DeliveryBanner />
      <Testimonials />
      <Footer />
    </div>
  );
}