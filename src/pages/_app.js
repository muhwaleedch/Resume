import { Head } from 'next/document';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 