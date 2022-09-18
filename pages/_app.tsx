import { Layout } from '@/components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
