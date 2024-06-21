"use client"
import { JetBrains_Mono } from 'next/font/google';
import Navbar from "@/components/pages/layout/header"
import Footer from "@/components/pages/layout/footer"
import { AuthProvider } from "@/components/pages/layout/providers/auth-provider";
import { ICPProvider } from "@/components/pages/layout/providers/icp-provider";
import './globals.css';
import "@/lib/_supressLogs";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TracingBeamHorizontal } from "@/components/ui/tracing-beam-horizontal";
import Head from "next/head"

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className='dark'>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={`${jetBrainsMono.className} min-h-screen bg-white dark:bg-black w-[100vw] flex flex-col `}>
        <TracingBeam className="px-6">
          <ICPProvider>
            <AuthProvider>
              <Navbar />
              <main className="mx-auto  max-w-[100vw] py-2 px-2 flex-grow overflow-x-hidden">
                {children}
              </main>
              <Footer />
            </AuthProvider>
          </ICPProvider>
        </TracingBeam>

      </body>
    </html>
  );
}
