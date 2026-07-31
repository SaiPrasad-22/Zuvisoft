import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Services from '../sections/Services.jsx'
import Technologies from '../sections/Technologies.jsx'
import Products from '../sections/Products.jsx'
import Process from '../sections/Process.jsx'
import WhyUs from '../sections/WhyUs.jsx'
import Portfolio from '../sections/Portfolio.jsx'
import Careers from '../sections/Careers.jsx'
import Contact from '../sections/Contact.jsx'
import Seo from '../lib/seo.jsx'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Product Engineering Studio"
        description="ZuviSoft builds modern software products — web apps, mobile apps, dashboards, and AI-powered tools that help businesses launch, grow, and scale."
        path="/"
      />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Products />
      <Process />
      <WhyUs />
      <Portfolio />
      <Careers />
      <Contact />
    </>
  )
}
