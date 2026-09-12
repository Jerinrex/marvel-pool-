import Hero from '../components/Hero.jsx'
import WaveDivider from '../components/WaveDivider.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Process from '../components/Process.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Contact from '../components/Contact.jsx'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WaveDivider bg="var(--ink)" fill="#F0F8FF" />
      <About />
      <WaveDivider bg="var(--foam)" fill="#0A2A48" flip />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  )
}
