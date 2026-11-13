import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CtaBanner from "./Pages/Home/CtaBanner";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ServiceCards from "./Pages/ServiceCards";
import Industries from "./Pages/Industries";
import CaseStudies from "./Pages/CaseStudies";
import Insights from "./Pages/Insights";

function App() {
  return (
   <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<ServiceCards />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;