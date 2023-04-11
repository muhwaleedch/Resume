import { Head } from 'next/document';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        {/* <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        </Head> */}
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 