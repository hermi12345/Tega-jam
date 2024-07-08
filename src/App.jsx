import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product"; // Correct import statement for Product
import About from "./components/About";
import Testimonial  from "./components/Testimonial ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="Home">
          <Home />
        </div>
        <div id="product"> {/* Corrected id name to lowercase */}
          <Product /> {/* Correct component name to uppercase */}
        </div>
        <div  id="About">
          <About/>
        </div>
        <div id="Testimonial">
          <Testimonial />
        </div>
        <div id="Contact">
          <Contact/>
        </div>
        <div id="Footer">
          <Footer/>
        </div>
      </main>
    </div>
  );
}

export default App;