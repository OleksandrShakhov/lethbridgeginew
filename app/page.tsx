import { Navbar } from './components/Navbar';
import { Top } from './components/Top';
import { Hero } from './components/Hero';
import { MissionStatement } from './components/MissionStatement';
import { About } from './components/About';
import { ContactSum } from './components/ContactSum';
import { Procedure } from './components/Procedure';
import { DoctorProfile } from './components/DoctorProfile';
import { Faq } from './components/Faq';
import { ContactMap } from './components/ContactMap';
import { GoToTopButton } from './components/GoToTopButton';
import { Footer } from './components/Footer';




export default function Home() {
  return (
    <>
      <Top />
      <Navbar />
      <Hero />
      <MissionStatement />
      <About />
      <ContactSum />
      <Procedure />
      <DoctorProfile />
      <Faq />
      <ContactMap />
      <GoToTopButton />
      <Footer />
    </>
  );
}
