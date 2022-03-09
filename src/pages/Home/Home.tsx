import { Portfolio, Nav, Footer } from '~/components';
import { Experience, FreeTime, Header, Make, Quote, Socials, TypeScript } from './sections';

export function Home() {
  return (
    <Portfolio>
      <Nav />
      <Header />
      <Quote />
      <TypeScript />
      <FreeTime />
      <Experience />
      <Make />
      <Socials />
      <Footer />
    </Portfolio>
  );
}