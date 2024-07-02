"use client"
import { signOut } from '@junobuild/core-peer';
import { YellowButton } from '@/components/ui/button';


export function Logout() {
  return (
    <YellowButton onClick={signOut}>
      Log Out
    </YellowButton>

  )
}