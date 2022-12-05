import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {Fragment} from "react";
import Navigation from "../components/navigation/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Fragment>
        <Navigation/>
        <Component {...pageProps} />
      </Fragment>
  )
}

export default MyApp;
