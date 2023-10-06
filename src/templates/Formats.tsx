import React from 'react';

import { Vertical3FeatureRow } from '../feature/Vertical3FeatureRow';
import { Section } from '../layout/Section';

const Formats = () => (
  <>
  <Section
    title="Formatos Cereza"
    color="bg-white"
    description="Es importante considerar la resistencia y la ventilación de las cajas, ya que las cerezas deben almacenarse a bajas temperaturas y alta humedad relativa. "
    description2="El formato más utilizado es la caja de 30x50 cm de 5 kg, seguido de los formatos de 2,5 kg directo al pallet y Master 5kg 2x1."
    description3="En términos de impresión, buscamos una alta calidad gráfica, utilizando técnicas como preprint o impresión offset."
    description4="Es interesante destacar que las cajas de cerezas se consideran un regalo muy apreciado durante el Año Nuevo chino, y los formatos pequeños mas solicitados por los consumidores."
  >
    <Section yPadding='py-0'>
    <Vertical3FeatureRow
      image="/assets/images/format1.png"
      imageAlt="Format 1"
      image2="/assets/images/format2.png"
      imageAlt2="Format 2"
      image3="/assets/images/format3.png"
      imageAlt3="Format 3"
    />
    </Section>
  </Section>
  <Section
    yPadding='py-0'
    title="Cajas Cereza"
    color="bg-white"
  >
    <Section yPadding='py-0'>
    <Vertical3FeatureRow
      image="/assets/images/amarilla.png"
      imageAlt="Format 1"
      title='Tapa 5 kilos Amarilla'
      image2="/assets/images/dorado.png"
      imageAlt2="Format 2"
      title2='Tapa 5 kilos Dorado'
      image3="/assets/images/naranja.png"
      imageAlt3="Format 3"
      title3='Tapa 5 kilos Naranja'
    />
    </Section>
    <Section yPadding='py-0'>
    <Vertical3FeatureRow
      image="/assets/images/maleta.png"
      imageAlt="Format 1"
      title='Maleta 2,5 kilos'
      image2="/assets/images/medio.png"
      imageAlt2="Format 2"
      title2='Tapa 2,5 kilos'
      image3="/assets/images/master.png"
      imageAlt3="Format 3"
      title3='Master 2x1'
    />
    </Section>
  </Section>
  </>
);

export { Formats };
