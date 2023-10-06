import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Nuestra Historia"
    description="En abril de 2021 nace Huaquen Export, empresa dedicada a la exportación de fruta fresca. Participamos como productores y exportadores involucrándonos en toda la cadena de valor."
    description2="Trabajamos con un grupo de productores, bajo el esquema de cooperativa donde el compromiso y confianza de cada integrante son la clave de nuestro éxito."
    description3="Contamos con un equipo técnico calificado, que trabaja con objetivos comunes, donde obtener un producto inocuo y de calidad es el eje central. La seguridad alimentaria es esencial para poder lograr los estándares de inocuidad, por eso trabajamos con proveedores de materias primas y materiales de embalajes certificados."
    description4="Buscamos que nuestra etiqueta sea considerada por los distribuidores y consumidores como un producto homogéneo “mismo tipo, tamaño y calidad”."
  >
    <Section title="Nuestro Equipo" color="bg-white">
    <VerticalFeatureRow
      title="Pablo Godoy"
      title2="Director General"
      description="Ingeniero Agrónomo de Universidad Católica de Valparaíso, con un MBA en Madrid, España."
      description2="Con más de 38 años de experiencia en la industria."
      description3="El año 2006 se independiza y se asocia con la Exportadora EXPAFRUIT."
      description4="El año 2021 forma su propia Exportadora, HUAQUEN EXPORT SPA."
      image="/assets/images/PabloGodoy.webp"
      imageAlt="Pablo Godoy"
    />
    <VerticalFeatureRow
      title="Mabel Hernandez"
      title2="Encargada de calidad y poscosecha"
      description="Ingeniero Agrónomo de la Universidad de Talca, trabajo como contraparte profesional y encargada de aseguramiento de calidad por 4 años."
      description2="En el año 2017 se hace cargo del departamento de calidad y poscosecha de Packing San Cristóbal."
      description3="Por su trayectoria y compromiso el 2021 se une a Huaquen Export, desempeñándose como Encargada de calidad y poscosecha, liderando el equipo de trabajo."
      image="/assets/images/MabelHernandez.webp"
      imageAlt="Mabel Hernandez"
      reverse
    />
    <VerticalFeatureRow
      title="Eduardo Grunwald"
      title2="Ingeniero Agrónomo"
      description="Con mas de 35 años en la industria frutícola, participando en grandes compañías como TUCFRUT, donde se desempeñó partiendo como Agrónomo de terreno de las agrícolas, y llegando al cargo de Gerente General de la División Frutícola, teniendo la responsabilidad de la dirección de las agrícolas y de la planta procesadora de fruta fresca."
      image="/assets/images/EduardoGrunwald.webp"
      imageAlt="Eduardo Grunwald"
    />
    <VerticalFeatureRow
      title="Patricio Seguel"
      title2="Asesor Técnico"
      description="Como asesor Técnico en el ámbito de las cerezas, mi función es proporcionar información y orientación sobre diversos aspectos relacionados con esta fruta."
      image="/assets/images/PatricioSeguel.webp"
      imageAlt="Patricio Seguel"
      reverse
    />
    </Section>
  </Section>
);

export { VerticalFeatures };
