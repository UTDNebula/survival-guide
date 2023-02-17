import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto, Jost } from '@next/font/google';

const sansFont = Roboto({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-sans',
});

const displayFont = Jost({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-display',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${sansFont.variable} ${displayFont.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
