import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => {

  return (
    <>
  <Background color="bg-gray-100">
    <Section yPadding="py-5">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/exports/cherry">
            Cerezas
          </Link>
        </li>
        <li>
          <Link href="/exports/kiwi">
            Kiwis
          </Link>
        </li>
        <li>
          <Link href="http://huaquen.fruttita.cl/">
            Extranet
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
    </>
);
      }

export { Navbar };
