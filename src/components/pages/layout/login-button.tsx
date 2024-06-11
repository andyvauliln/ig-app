"use client"
import { signIn } from '@junobuild/core-peer';

export function Login() {
  const handleSignIn = () => {
    signIn();
  };

  return (
    <button onClick={handleSignIn} className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 min-w-36 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
        Log in
      </div>
    </button>
  );
}
