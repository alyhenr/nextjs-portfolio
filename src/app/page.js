import NavBar from "./components/common/NavBar";
import Hero from "./components/HeroSection/Hero";
import About from "./components/AboutSection/About";
import { Email } from "./components/EmailSection/Email";

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col bg-[#121212]'
    >
      <NavBar />
      <div className='container mx-auto mt-24 py-8 px-12'>
        <Hero />
        <About />
        <Email />
      </div>
    </main>
  )
}
