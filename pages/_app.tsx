// pages/_app.tsx

import '../styles/globals.css';
import Layout from '../components/Layout';
import { AppProps } from 'next/app';  // Import AppProps from Next.js

function MyApp({ Component, pageProps }: AppProps) {  // Use AppProps here
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
