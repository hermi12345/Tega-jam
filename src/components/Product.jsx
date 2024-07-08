
import React from 'react';
import ProductCard from '../layout/ProductCard';

const product = () => {
  return (
    <div className="text-center p-10">
      <h1 className="font-bold text-4xl mb-4">Our Products</h1>
      <div>
        <ProductCard title="Juice" />
      </div>
    </div>
  );
}

export default product;