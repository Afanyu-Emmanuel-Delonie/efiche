import Aboutus from "../components/aboutus";
import Contact from "../components/Contact";
import Cta from "../components/Cta";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NewsAndEvents from "../components/NewsAndEvents";
import Ourpartners from "../components/Ourpartners";
import Services from "../components/Services";
import Steps from "../components/Steps";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home"><Hero /></section>
      <Ourpartners />
      <section id="about"><Aboutus /></section>
      <section id="solutions"><Services /></section>
      <Steps />
      <Cta />
      <section id="contact"><Contact /></section>
      <section id="faqs"><Faq /></section>
      <section id="news"><NewsAndEvents /></section>
      <Footer />
    </>
  );
}
