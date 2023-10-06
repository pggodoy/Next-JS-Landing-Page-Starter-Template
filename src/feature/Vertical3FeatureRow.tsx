import React from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IVertical3FeatureRowProps = {
  image: string;
  imageAlt: string;
  image2: string;
  imageAlt2: string;
  image3: string;
  imageAlt3: string;
  title?: string;
  title2?: string;
  title3?: string;
};

const Vertical3FeatureRow = (props: IVertical3FeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-0',
    'flex',
    'flex-wrap',
    'items-center',
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full p-6 sm:w-1/3">
      {props.title && (
          <h2 className={`text-2xl text-gray-900`}>{props.title}</h2>
        )}
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>

      <div className="w-full p-6 sm:w-1/3 text-center">
      {props.title2 && (
          <h2 className={`text-2xl text-gray-900`}>{props.title2}</h2>
        )}
        <img src={`${router.basePath}${props.image2}`} alt={props.imageAlt2} />
      </div>

      <div className="w-full p-6 sm:w-1/3">
      {props.title3 && (
          <h2 className={`text-2xl text-gray-900`}>{props.title3}</h2>
        )}
        <img src={`${router.basePath}${props.image3}`} alt={props.imageAlt3} />
      </div>
    </div>
  );
};

export { Vertical3FeatureRow };
