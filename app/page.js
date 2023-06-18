import { Footer, Navbar } from '../components';
import { About, Projects, Feedback, Hero, Insights, WhatsNew, World } from '../sections';

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
      {/* <Insights /> */}
      <div />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
