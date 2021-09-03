import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import App from 'next/app';
import { FC } from 'react';

const About: FC<AppProps> = ({ Component, pageProps, }) => {
  return <Component {...pageProps} />;
};

export default About;
