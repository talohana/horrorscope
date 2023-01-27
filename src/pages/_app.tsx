import { Layout } from '@/components/layout/layout';
import '@/styles/globals.css';
import { defaultSEO } from '@/utils/next-seo-config';
import { Inter } from '@next/font/google';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <main
        className={`min-h-screen flex flex-col space-y-8 ${inter.className}`}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
