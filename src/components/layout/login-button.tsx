import { Button } from '@/components/archive/button';
import { signIn } from '@junobuild/core-peer';

export const Login = () => {
  return <Button onClick={signIn}>Sign in</Button>;
};
