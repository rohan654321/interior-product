import About from "@/components/About";
import ClientMarquee from "@/components/ClientMarquee";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyChoose from "@/components/WhyChoose";

export default function HomePage() {
  return (
    <>
    <Navbar/>
      <Hero />
      <About/>
      <Services/>
      <WhyChoose/>
      <Projects/>
      <Process/>
      <ClientMarquee />
      <Testimonial />
      <CTA/>
      <Footer/>
    </>
  );
}