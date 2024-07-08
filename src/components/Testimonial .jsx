import React from 'react';
import img1 from '../assets/img/t1.jpg';  // Importing images
import img2 from '../assets/img/t3.jpg';
import img3 from '../assets/img/t2.jpg';

const Testimonial = () => {
  return (
    <div className="text-center p-10">
      <h1 className="font-bold text-4xl mb-4">Testimonial</h1>
    
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="max-w-sm m-4">
        <div className="shadow-lg rounded overflow-hidden">
          <img className="w-full" src={img1} alt="Team Member 1" />
          <div className="bg-white p-4">
            <p className="font-light text-xl italic text-gray-800">
            provided excellent customer service during my purchase of cactus jam and snake products. His knowledge and recommendations were invaluable!
            </p>
            <p className="mt-4 font-light text-sm text-gray-500">Bamlak Tegestu</p>
            <p className="mt-1 font-semibold text-sm text-gray-900">Customer</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="max-w-sm m-4">
        <div className="shadow-lg rounded overflow-hidden">
          <img className="w-full" src={img2} alt="Team Member 2" />
          <div className="bg-white p-4">
            <p className="font-light text-xl italic text-gray-800">
            The prickly pear cactus jam. Its become a favorite in my household
            </p>
            <p className="mt-4 font-light text-sm text-gray-500">Hermela Gashaw</p>
            <p className="mt-1 font-semibold text-sm text-gray-900">Customer</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="max-w-sm m-4">
        <div className="shadow-lg rounded overflow-hidden">
          <img className="w-full" src={img3} alt="Team Member 3" />
          <div className="bg-white p-4">
            <p className="font-light text-xl italic text-gray-800">
            I tried the rattlesnake salsa from Cactus & Snakes Co. Its got just the right amount of heat and flavor. Highly recommend!
            </p>
            <p className="mt-4 font-light text-sm text-gray-500">Rediat Gezaw</p>
            <p className="mt-1 font-semibold text-sm text-gray-900">Customer</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Testimonial;