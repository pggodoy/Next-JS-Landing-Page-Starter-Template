import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import Carousel from "../carousel/Carousel";

const Hero = () => {

  const router = useRouter();
  
  const images = [
    "/assets/images/banner4.png",
    "/assets/images/banner5.png",
    "/assets/images/banner6.png",
  ];

  return (
    <>
  <Background color="bg-gray-100">
    <Section yPadding="py-5">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="http://huaquen.fruttita.cl/">
            Extranet
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding='py-5'>
    <div className="lg:w-4/4 mx-auto">
      <Carousel loop>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative h-64 flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={`${router.basePath}${src}`} fill className="object-cover w-full object-stretch" alt="alt" />
            </div>
          );
        })}
      </Carousel>
    </div>
    </Section>

    <Section yPadding="pt-10 pb-1">
      <HeroOneButton
        title={
          <>
            {'Siempre en busca de la innovación'}
          </>
        }
        description="Somos una empresa, comprometida en ofrecer la mejor calidad en cada uno de nuestros productos, valorando la excelencia en cada una de sus etapas"
      />
    </Section>
    </Background>
    <Section yPadding="pt-10 pb-16" title='Exportamos' color="bg-white">
    <div className="relative flex flex-col justify-center overflow-hidden">
  <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
    <div className="grid grid-cols-2 gap-8">
      <div className="col-span-1">
        <img src={`${router.basePath}/assets/images/cherrys.webp`} className="h-64 w-full" alt="Cherry" />
      </div>
      <div className="col-span-1">
        <img src={`${router.basePath}/assets/images/kiwi.jpg`} className="h-64 w-full" alt="Kiwi" />
      </div>
    </div>
  </div>
</div>
    </Section>
    </>
);
      }

export { Hero };
