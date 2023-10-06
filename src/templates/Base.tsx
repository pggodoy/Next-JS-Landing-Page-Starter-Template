import { Meta } from '@/layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { Formats } from './Formats';
import FancyTestimonialsSlider from '../testimonial/fancy-testimonial-slider'
import { DefaultTable } from './Table';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <FancyTestimonialsSlider />
    <Formats />
    <DefaultTable />
    <Footer />
  </div>
);

export { Base };
