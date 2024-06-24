"use client"
import { signIn } from '@junobuild/core-peer';
import { YellowButton } from '@/components/ui/button';

export function Login() {
  const handleSignIn = () => {
    signIn();
  };

  return (
    <YellowButton onClick={handleSignIn}>
      Login
    </YellowButton>

  );
}
