import Hero from "./Hero";
import About from "./About";
import ServiceCards from "./ServiceCards";
import Testimonials from "./Testimonials";
import Industries from "./Industries";
import Insights from "./Insights";
import CaseStudies from "./CaseStudies";

// The skyline photo now lives inside <Hero />, so HeroImage is no longer used.
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ServiceCards />
      <Testimonials />
      <Industries />
      <Insights />
      <CaseStudies />
    </>
  );
};

export default Home;
