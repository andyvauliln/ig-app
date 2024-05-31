import { withJuno } from '@junobuild/nextjs-plugin';

const isOnChain = process.env.NEXT_PUBLIC_IS_ONCHAIN === 'true';

const coreConfig = {
    experimental: {
        reactCompiler: true,
        after: true,
        // staleTimes: {
        //     dynamic: 30,
        //     static: 180
        // },
        // Automatically bundle external packages in the Pages Router:

        // Opt specific packages out of bundling for both App and Pages Router:

        //optimizePackageImports: ['icon-library'],

    },
    bundlePagesRouterDependencies: true,
    images: {
        remotePatterns: [{ hostname: "utfs.io" }],
    },
    // profiler: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    juno: { container: true }


    // output: 'standalone'
};

const config = isOnChain ? withJuno(coreConfig) : { coreConfig };

export default config;