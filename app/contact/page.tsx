import { Top } from '../components/Top';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactHero } from '../components/ContactHero';
import { ContactDetails } from '../components/ContactDetails';
import { FaqFull } from '../components/FaqFull';
import { GoToTopButton } from '../components/GoToTopButton';

export default function about() {
  return (
    <>
      <Top />
      <Navbar />
      <ContactHero />
      <ContactDetails />
      <FaqFull />
      <GoToTopButton />
      <Footer />
    </>
  );
}
