"use client"
import { signOut } from '@junobuild/core-peer';


export function Logout() {
  return (
    <button onClick={signOut} className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-sky-400 rounded-lg" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
        Sign up
      </div>
    </button>
  )
}