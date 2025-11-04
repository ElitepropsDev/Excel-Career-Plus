import Hero from '../components/Home/Hero'
import TrustedBy from '../components/Home/TrustedBy'
import Services from '../components/Home/Services'
import OurWork from '../components/Home/OurWork'
import Teams from '../components/Home/Teams'
import ContactUs from '../components/Home/ContactUs'
import Mission from '../components/Home/Mission'
import SuccessStories from '../components/Home/SuccessStories'

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Mission/>
      <Services />
      <OurWork />
      <SuccessStories />
      <Teams />
      <ContactUs />
    </>
  )
}

export default Home
