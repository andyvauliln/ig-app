import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Imortal Games',
  description: 'Educational AI Web 3 Platform'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className='dark'>
      <body className={`${jetBrainsMono.className} bg-white dark:bg-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
