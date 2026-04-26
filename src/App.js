import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Error from "./pages/Error";
import Gallery from "./pages/Gallery";
import ComingSoon from "./pages/ComingSoon";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="faq" element={<Faq />} />
        <Route path="/error" element={<Error />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/comingsoon" element={<ComingSoon />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;