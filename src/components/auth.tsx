import { Login } from '@/components/login';
import { Logout } from '@/components/logout';
import { authSubscribe, type User } from '@junobuild/core-peer';
import { createContext, useEffect, useState, type ReactNode } from 'react';

export const AuthContext = createContext<{ user: User | undefined | null }>({ user: undefined });

interface AuthProps {
  children: ReactNode;
}

export const Auth = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | undefined | null>(undefined);

  useEffect(() => {
    const sub = authSubscribe((user) => setUser(user));

    return () => sub();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {user !== undefined && user !== null ? (
        <div>
          {children}

          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </AuthContext.Provider>
  );
};


import { LoadingScreen } from '@/components/LoadingScreen';
import { RouteId } from '@/lib';
import { User, authSubscribe, listDocs } from '@junobuild/core-peer';
import { useRouter } from 'next/navigation';
import { ReactNode, createContext, useEffect, useState } from 'react';

export const AuthContext = createContext<{
  user: User | null | undefined;
  setLoading:
  | React.Dispatch<React.SetStateAction<boolean | undefined>>
  | undefined;
}>({
  user: undefined,
  setLoading: undefined,
});

// export const AuthProvider = ({ children }: { children?: ReactNode }) => {
//   const [user, setUser] = useState<User | null | undefined>(undefined);
//   const [loading, setLoading] = useState<boolean | undefined>(true);
//   const router = useRouter();

//   useEffect(() => {
//     const sub = authSubscribe((user: User | null) => {
//       setUser(user);
//       if (user) {
//         (async () =>
//           await listDocs({
//             collection: 'profiles',
//             filter: {
//               owner: user?.owner,
//             },
//           }))().then((data) => {
//           const hasProfile = data.items_length > 0;
//           setLoading(false);
//           if (hasProfile) {
//             router.push(RouteId.discovery);
//           } else {
//             router.push(RouteId.onboarding);
//           }
//         });
//       } else {
//         setLoading(false);
//       }
//     });
//     return () => sub();
//   }, [router]);

//   return (
//     <AuthContext.Provider value={{ user, setLoading }}>
//       {user !== undefined && user !== null && <div>{children}</div>}

//       {loading ? <LoadingScreen /> : undefined}
//     </AuthContext.Provider>
//   );
// };
