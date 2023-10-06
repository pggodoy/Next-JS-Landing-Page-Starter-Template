import type { ReactNode } from 'react';
import { Background } from '../background/Background';

type ISectionProps = {
  title?: string;
  description?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  yPadding?: string;
  children?: ReactNode;
  color?: string;
  image?: string;
  textTitleColor?: string;
  textDescriptionColor?: string;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto max-w-screen-lg px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    <Background color={`${
    props.color ? props.color : "bg-gray-100"
  }`} image={`${
    props.image ? props.image : ""
  }`}>
    {(props.title || props.description || props.description2 || props.description3 || props.description4) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className={`text-4xl font-bold ${
                props.textTitleColor ? props.textTitleColor : 'text-gray-900'
              }`}>{props.title}</h2>
        )}
        {props.description && (
          <div className={`mt-4 text-xl md:px-20 ${
                props.textDescriptionColor ? props.textDescriptionColor : 'text-gray-900'
              }`}>{props.description}</div>
        )}
        {props.description2 && (
          <div className={`mt-4 text-xl md:px-20 ${
                props.textDescriptionColor ? props.textDescriptionColor : 'text-gray-900'
              }`}>{props.description2}</div>
        )}
        {props.description3 && (
          <div className={`mt-4 text-xl md:px-20 ${
                props.textDescriptionColor ? props.textDescriptionColor : 'text-gray-900'
              }`}>{props.description3}</div>
        )}
        {props.description4 && (
          <div className={`mt-4 text-xl md:px-20 ${
                props.textDescriptionColor ? props.textDescriptionColor : 'text-gray-900'
              }`}>{props.description4}</div>
        )}
      </div>
    )}
    </Background>
    {props.children}
  </div>
);

export { Section };
