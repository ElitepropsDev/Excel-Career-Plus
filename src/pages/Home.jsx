import Hero from '../components/Home/Hero'
import Search from '../components/Home/Search'
import ContactUs from '../components/Home/ContactUs'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import HowItWorks from '../components/Home/HowItWorks'
import TestimonialsCarousel from '../components/Home/TestimonialsCarousel'
import Partner from '../components/Home/Partner'
import CTA from '../components/Home/Cta'
import Stats from '../components/Home/Stats'
import ProgramPreview from '../components/Home/ProgramPreview'
const Home = () => {
  return (
    <>
      <Hero />
      <Search />
      <ProgramPreview />
      <HowItWorks />
      <TestimonialsCarousel /> 
      <Partner />
      <WhyChooseUs />
      <Stats />
      <CTA />
      <ContactUs />
    </>
  )
}

export default Home
