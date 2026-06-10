import { Hero } from '../../components/Hero.jsx';
import { Story } from '../../components/Story.jsx';
import { Discover } from '../../components/Discover.jsx';
import { ShopPreview } from '../../components/ShopPreview.jsx';
import { Footer } from '../../components/Footer.jsx';

export function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Discover />
      <ShopPreview />
      <Footer />
    </>
  );
}
