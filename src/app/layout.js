import './globals.css';
import { Inter, Sora, Source_Code_Pro, Space_Grotesk } from 'next/font/google';

import { cx } from '../utils';
import Header from '../components/Header';
import Subscription from '../components/Subscription';
import Footer from '../components/Footer';

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
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
  title: 'BitStack | Web Development, Programming, and Technology Blog.',
  description: '5 Minute Read on latest trends in Web Development, Programming, and Technology.',
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
          'font-sans bg-light dark:bg-bg pt-4 section-padding ',
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
