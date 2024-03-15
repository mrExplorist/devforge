import './globals.css';

import { Inter, Sora, Source_Code_Pro, Space_Grotesk } from 'next/font/google';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Subscription from '../components/Subscription';
import { cx } from '../utils';
import siteMetadata from '../utils/siteMetadata';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in',
});
const code = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-grotesk',
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          grotesk.variable,
          code.variable,
          sora.variable,
          inter.variable,
          'font-sans bg-bg section-padding ',
        )}
      >
        <Header />
        {children}
        <Subscription />
        <Footer />
      </body>
    </html>
  );
}
