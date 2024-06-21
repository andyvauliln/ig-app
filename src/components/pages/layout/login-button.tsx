"use client"
import { signIn } from '@junobuild/core-peer';

export function Login() {
  const handleSignIn = () => {
    signIn();
  };

  return (
    <button onClick={handleSignIn} className="relative p-1 bg-black text-white rounded-md group overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/old_gold.jpeg)' }}></div>
      <div className="relative z-10 px-8 font-extrabold py-2 bg-black rounded-md group-hover:text-yellow-500 text-shadow-yellow-500 transition duration-200">
        Log in
      </div>
      <div className="absolute inset-0 border-4 border-transparent rounded-md pointer-events-none" style={{ clipPath: 'inset(0 0 0 0 round 6px)', backgroundImage: 'url(/old_gold.jpeg)' }}></div>
    </button>
  );
}
