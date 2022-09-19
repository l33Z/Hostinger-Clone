import { useEffect } from "react";
import "./App.css";
import Pricing from "./Pages/Pricing";
import Services from "./Pages/Services";
import Testimonial from "./Pages/Testimonial";
import Welcome from "./Pages/Welcome";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Pages/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Welcome />
      <Pricing />
      <Services />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
