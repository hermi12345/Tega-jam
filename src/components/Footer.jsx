import React from 'react';
const Footer = () => {
  return (
    <div className="bg-gray-100">
    <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-black-700 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
            <div className="text-sm uppercase text-green-700 font-bold">products</div>
            <ul>
                <li className="my-2">
                    <a className="hover:text-green-700" href="../components/Home.jsx">Home</a>
                </li>
                <li className="my-2">
                    <a className="hover:text-green-700" href="../components/Contact.jsx">Contact</a>
                </li>
                <li className="my-2">
                    <a className="hover:text-green-700" href="../components/About.jsx">About</a>
                </li>
                <li className="my-2">
                    <a className="hover:text-green-700" href="Testimonial.jsx">Testimonial</a>
                </li>
            </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r text-center">
            
            <form className="flex items-center justify-center max-w-md mx-auto">
                <input type="email" required placeholder="Enter your email" className="py-2 px-4 mr-2 w-3/4 focus:outline-none focus:ring focus:border-indigo-600 border-gray-300 rounded-md"/>
                <button type="submit" className="bg-green-700  text-white py-2 px-6 rounded-md hover:bg-black focus:outline-none focus:ring focus:border-indigo-700">Subscribe</button>
            </form>
        </div>
        <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase text-green-700 font-bold">Contact Us</div>
            <ul>
                <li className="my-2">
                    <a className="hover:text-green-700 " href="Contact.jsx">Ethiopia, Floor A, Adiss Ababa</a>
                </li>
                <li className="my-2">
                
                    <a className="hover:text-green-700" href="/contact">contact@company.com</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" className="w-6 mx-1">
            
            </a>
            <a href="#" className="w-6 mx-1">
                
            </a>
            <a href="#" className="w-6 mx-1">
                
            </a>
            <a href="#" className="w-6 mx-1">
                
            </a>
        </div>
        <div className="my-5">© Copyright 2024. All Rights Reserved.</div>
    </div>
</div>
  );
}

export default Footer;
