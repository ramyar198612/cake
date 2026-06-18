import React from 'react';
import ProductCard from './ProductCard';

const signatureFlavors = [
  {
    id: 1,
    name: 'Chocolate Truffle',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Red Velvet',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Black Forest',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    name: 'Pineapple',
    description: 'Rich, dense chocolate layers coated in a smooth ganache.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=600'
  }
];

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-12 py-12 text-center">
      <h2 className="text-4xl font-bold text-brandDark mb-12">
        Our Signature Flavours
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {signatureFlavors.map((flavor) => (
          <ProductCard 
            key={flavor.id}
            name={flavor.name}
            description={flavor.description}
            price={flavor.price}
            image={flavor.image}
          />
        ))}
      </div>
    </section>
  );
}