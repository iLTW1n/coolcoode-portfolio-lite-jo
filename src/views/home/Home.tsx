import { Hero } from './sections/hero';
import { InTouch } from './sections/in-touch';
import { Projects } from './sections/projects';
import { Services } from './sections/services';
import { Testimonials } from './sections/testimonials';
import { Writing } from './sections/writing';

export const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Writing />
      <Testimonials />
      <InTouch />
    </>
  );
};
