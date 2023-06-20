import { Footer, Navbar } from '../components';
import { About, Projects, Contact, Hero, Experience } from '../sections';

const Page = () => (
  <div className="bg-black overflow-hidden">
    <div className="mb-11">
      <Navbar />
    </div>
    <Hero />
    <div className="relative">
      <About />
      <div />
      <Projects />
    </div>
    <div className="relative">
      <div />
    </div>
    <div className="relative">
      <Experience />
      <div />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default Page;
