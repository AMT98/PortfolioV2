import { Footer, Navbar } from '../components';
import { About, Projects, Contact, Hero, Experience, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div />
      <Projects />
    </div>
    <div className="relative">
      {/* <GetStarted /> */}
      <div />
      {/* <WhatsNew /> */}
    </div>
    {/* <World /> */}
    <div className="relative">
      <Experience />
      <div />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default Page;
