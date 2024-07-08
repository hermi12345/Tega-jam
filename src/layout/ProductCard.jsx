import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

// Importing individual images for each product
import img1 from '../assets/img/pro.jpg';
import img2 from '../assets/img/food.jpg';
import img3 from '../assets/img/pro2.jpg';

const ProductCard = () => {
  // Array of product details including images, descriptions, and prices
  const products = [
    {
      img: img1,
      title: 'Succulent Blend',
      description: 'Captivating taste of fresh cactus juice',
      price: 200,
      discountPrice: 150,
    },
    {
      img: img2,
      title: 'Prickly Surprise',
      description: 'Discover the essence of desert in a refreshing blend',
      price: 250,
      discountPrice: 180,
    },
    {
      img: img3,
      title: 'Tsega-Jam',
      description: 'Smooth blend of cactus and exotic fruits',
      price: 180,
      discountPrice: 120,
    },
  ];

  return (
    <section id="Products" className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-10 gap-x-8 mt-10 mb-5">
      {products.map((product, index) => (
        <div key={index} className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img src={product.img} alt="Product" className="w-full h-auto rounded-t-xl" />
          <div className="px-4 py-3">
            <span className="text-gray-400 mr-3 uppercase text-xs">{product.title}</span>
            <p className="text-lg font-bold text-black truncate block capitalize">{product.description}</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">${product.discountPrice}</p>
              </del>
              <div className="ml-auto">
                <FaShoppingBag size={20} />
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductCard;