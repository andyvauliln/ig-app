import { withJuno } from '@junobuild/nextjs-plugin';

const isOnChain = process.env.NEXT_PUBLIC_IS_ONCHAIN === 'true';

const config = isOnChain ? withJuno({ juno: { container: true } }) : {};

export default config;