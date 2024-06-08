import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Advantages from "./components/Advantages"
import Testimonial from "./components/Testimonial"
import Faq from "./components/Faq"
import About from "./components/About"
import 'aos/dist/aos.css';
import { useEffect } from "react"
import Aos from 'aos';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 700, });
  }, []);
  return (
     <div className="bg-white text-black overflow-hidden" >
      {/* <Header /> */}
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
      <About />  
    </div>
  );
}
