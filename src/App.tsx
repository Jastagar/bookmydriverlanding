import About from "./sections/About";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <div className="font-sans bg-gradient-to-t from-primary-500 via-primary-700 to-primary-900 min-h-screen text-primary-100 flex flex-col items-center">
      <Hero />     
      <About /> 
      {/* <Services />    */}
      {/* <Contact />      */}
      <Footer />     
    </div>
  )
}
