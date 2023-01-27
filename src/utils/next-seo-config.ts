import { siteUrl } from '@/lib/links';
import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: 'HorrorScope - Spook your day! | %s',
  defaultTitle: 'HorrorScope - Spook your day!',
  description: 'HorrorScope - Spook your day!',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'HorrorScope',
    images: [{ url: `${siteUrl}/assets/banner.jpg` }],
    site_name: siteUrl,
    defaultImageWidth: 1200,
    defaultImageHeight: 628,
  },
  twitter: {
    handle: '@talohanax',
    cardType: 'summary_large_image',
  },
};
