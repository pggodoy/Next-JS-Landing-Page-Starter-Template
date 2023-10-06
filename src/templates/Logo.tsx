import { AppConfig } from '../utils/AppConfig';
import { useRouter } from 'next/router';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '70' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  const router = useRouter();

  return (
    <span className={`inline-flex items-center text-red-700 ${fontStyle}`}>
      <svg
        className="mr-1 stroke-current text-primary-500"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 70 70"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <image 
          href={`${router.basePath}/logo.png`}
          x="0"
          y="0"
          width="70"
          height="70"
        />
      </svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
