import React from 'react';
import img from '../assets/img/home.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  return ( 
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-between items-center">
            <div className="text-4xl font-bold">
            Tesga Jam:<span className="text-green-700">.</span>
            </div>
            <div>
              <img src={img} alt="img" className="w-8" />
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold">Tesga  <span className="text-green-700">Jam</span>  Taste the Prickly Sweetness of Nature!</h1>
              <div className="w-20 h-2 bg-green-700 my-4"></div>
              <p className="text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
              <Link to="Contact">
              <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Contact Us</button>
              </Link>
            </div>
          </header>
        </div>
      </div>
      <img src={img} alt="img" className="w-full h-48 object-cover sm:h-screen sm:w-4/12"/>
    </div>
  );
}

export default Home;