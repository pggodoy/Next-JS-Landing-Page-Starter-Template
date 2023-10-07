import React from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Formats } from './Formats';
import { DefaultTable } from './Table';

const CherryDisplay = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Formats />
    <DefaultTable />
    <Footer />
  </div>
);

export { CherryDisplay };
