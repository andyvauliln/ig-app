import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Navbar from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { AuthProvider } from "@/components/layout/providers/auth-provider";
import { ICPProvider } from "@/components/layout/providers/icp-provider";
import './globals.css';
import "@/lib/_supressLogs";

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className='dark'>
      <body className={`${jetBrainsMono.className} bg-white dark:bg-black`}>
        <ICPProvider>
          <AuthProvider>
            <Navbar />
            {/* <div className="relative isolate min-h-[100dvh]">
              <main className="mx-auto max-w-screen-2xl py-16 px-8 md:px-24 tall:min-h-[calc(100dvh-128px)]">
                {children}
              </main>
              <Footer />
            </div> */}
          </AuthProvider>
        </ICPProvider>
      </body>
    </html>
  );
}
