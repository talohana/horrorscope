import { Layout } from '@/components/layout/layout';
import '@/styles/globals.css';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`min-h-screen flex flex-col space-y-8 ${inter.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
