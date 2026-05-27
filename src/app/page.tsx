import Aboutus from "../components/aboutus";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Ourpartners from "../components/Ourpartners";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ourpartners />
      <Aboutus />
      <Services />
    </>
  );
}
