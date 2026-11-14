import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import ToastProvider from "./Components/ToastProvider";
import CtaBanner from "./Pages/Home/CtaBanner";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ServiceCards from "./Pages/ServiceCards";
import Industries from "./Pages/Industries";
import CaseStudies from "./Pages/CaseStudies";
import Insights from "./Pages/Insights";
import Article from "./Pages/Article";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    // ToastProvider lets any part of the site show a short "coming soon" message
    <ToastProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<ServiceCards />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CtaBanner />
      <Footer />
    </ToastProvider>
  );
}

export default App;
