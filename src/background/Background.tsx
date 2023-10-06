import type { ReactNode } from 'react';
import { useRouter } from 'next/router';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  image?: string;
};

const Background = (props: IBackgroundProps) => {
  
  const router = useRouter();

  const backgroundImageStyle = props.image
    ? {
        backgroundImage: `url(${router.basePath}${props.image})`,
        backgroundSize: 'cover',
      }
    : {};

  return (
  <div className={props.color}
  style={{
    ...backgroundImageStyle,
    width: '100%',
    height: '100%',
  }}>{props.children}</div>
);
}

export { Background };
