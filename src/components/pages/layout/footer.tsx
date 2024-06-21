"use client"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { TracingBeamHorizontal } from "@/components/ui/tracing-beam-horizontal"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-auto max-w-[100vw] py-2 px-2 flex-grow overflow-x-hidden">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-3">
          <Link href="/">
            <h1 className="mb-2 text-2xl text-white underline font-bold sm:mb-0">
              Light Paper
            </h1>
          </Link>
          <SocialMedia />
        </div>
        {/* <hr className="my-6 bg-teal-400 text-[#18CCFC] sm:mx-auto lg:my-8" /> */}
        <TracingBeamHorizontal />
        <span className="block text-sm text-muted-foreground sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href="https://redpangilinan.live/"
            className="hover:underline"
          >
            Histoverse
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

function SocialMedia() {

  return <div className="">

    <a href='https://www.twitter.com/historverse' className='cursor-pointer' target='_blunk'>
      <i className="fa fa-twitter" id="twitter"></i>
    </a>
    <a href='https://www.instagram.com/historverse/' className='cursor-pointer' target='_blunk'>
      <i className="fa fa-instagram" id="instagram"></i>
    </a>
    <a href='https://linkedin.com/historverse' className='cursor-pointer' target='_blunk'>
      <i className="fa fa-linkedin" id="linkedin"></i>
    </a>
    <a href='https://youtube/historverse' className='cursor-pointer' target='_blunk'>
      <i className="fa fa-youtube" id="youtube"></i>
    </a>
  </div>
}