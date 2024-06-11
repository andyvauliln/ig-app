"use client"

import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/layout/theme-button"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/lib/links"
import { settings } from "@/config/settings"
import { Dispatch, SetStateAction } from "react"
import { AuthContext } from '@/components/layout/providers/auth-provider';
import { Login } from '@/components/layout/login-button';
import { Logout } from '@/components/layout/logout-button';
import Image from "next/image"
import AnimatedLogo from "@/components/layout/animated-logo"
import { Anton } from "next/font/google"
import { usePathname } from 'next/navigation'

const anton = Anton({ subsets: ["latin"], weight: "400", style: "normal" });
interface NavbarLinksProps {
  navbar: boolean
  handleClick: () => void
}

interface NavbarToggleProps {
  navbar: boolean
  setNavbar: Dispatch<SetStateAction<boolean>>
}

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const { user } = useContext(AuthContext);
  console.log("USER HEADER", user)

  const handleClick = async () => {
    setNavbar(false)
  }

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [navbar])

  return (
    <header className="select-none">
      <nav className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <div className="flex items-center w-full">
            <Link href="/" className="flex items-center space-x-2 lg:hover:scale-[1.10]">
              <Image src='/logo.svg' alt={siteConfig.name} className="text-secondary" width={60} height={60} />
              {/* <CompanyName /> */}
            </Link>
          </div>
          <div className="flex gap-1 md:hidden">
            {user ? <Logout /> : <Login />}
          </div>
          {/*
            {user ? <Logout /> : <Login />}
            <NavbarToggle navbar={navbar} setNavbar={setNavbar} />
         */}
        </div>
        <NavbarLinks navbar={navbar} handleClick={handleClick} />
        <div className="hidden md:flex items-center space-x-4">
          {!navbar && user ? <Logout /> : <Login />}
          {/* {settings.themeToggleEnabled && (
            <div className="hidden md:block">
              <ModeToggle />
            </div>
          )} */}
        </div>
      </nav>
    </header>
  )
}

export function NavbarToggle({ navbar, setNavbar }: NavbarToggleProps) {
  return (
    <button
      className="ml-2 rounded-md p-2 text-azure outline-none border-[3px] border-purple-500"
      aria-label="Hamburger Menu"
      onClick={() => setNavbar(!navbar)}
    >
      {navbar ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="rgb(168 85 247)"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="rgb(168 85 247)"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  )
}



function NavbarLinks({ navbar, handleClick }: NavbarLinksProps) {
  const pathname = usePathname()
  return (
    <div className={`flex items-center justify-center m-auto rounded-md p-4`}>
      <ul className="buttons scale-[1.2] md:scale-[1.6] lg:scale-[2]">
        {navLinks.map((link) => (
          link.path !== '/' || pathname !== '/' ? (
            <NavButton key={link.route} path={link.path} isActive={pathname === link.path}>
              {link.route}
            </NavButton>
          ) : null
        ))}
      </ul>
    </div>
  )
}

function CompanyName() {
  return (
    <h1 className={`${anton.className} mt-4 bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-6xl font-medium tracking-tight text-transparent md:text-7xl`}>
      Histoverse
    </h1>

  )
}

// function NavButton2({ children, path }: { children: React.ReactNode, path: string }) {
//   return (
//     <Link href={path} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//       <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//       <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
//         {children}
//       </span>
//     </Link>
//   );
// }
// function NavButton({ children, path }: { children: React.ReactNode, path: string }) {
//   return (
//     <Link href={path} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//       <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//       <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
//         {children}
//       </span>
//     </Link>
//   );
// }

function NavButton({ children, path, isActive }: { children: React.ReactNode, path: string, isActive: boolean }) {
  return (
    <a href={path} className={`${isActive ? "active" : ""}`}>
      {children}
    </a>
  )
}

