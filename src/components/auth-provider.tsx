
"use client"

import { LoadingScreen } from '@/components/loading-screen';
import { routes } from '@/config/route';
import { User, authSubscribe, listDocs } from '@junobuild/core-peer';
import { useRouter } from 'next/navigation';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { getProfile } from '@/components/actions';

export const AuthContext = createContext<{
  user: User | null | undefined;
  setLoading:
  | React.Dispatch<React.SetStateAction<boolean | undefined>>
  | undefined;
}>({
  user: undefined,
  setLoading: undefined,
});

export const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [loading, setLoading] = useState<boolean | undefined>(true);
  const router = useRouter();

  useEffect(() => {
    const sub = authSubscribe((user: User | null) => {
      setUser(user);
      if (user) {

        getProfile(user).then((data: any) => {
          const hasProfile = data.items_length > 0;
          setLoading(false);
          if (hasProfile) {
            router.push(routes.learn);
          } else {
            router.push(routes.onboarding);
          }
        });
      } else {
        setLoading(false);
      }
    });
    return () => sub();
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, setLoading }}>
      {/* {user !== undefined && user !== null && <div>{children}</div>} */}
      <div>{children}</div>

      {loading && <LoadingScreen />}
    </AuthContext.Provider>
  );
};
