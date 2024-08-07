import { withJuno } from '@junobuild/nextjs-plugin';
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js"

const isOnChain = process.env.NEXT_PUBLIC_IS_ONCHAIN === 'true';

const coreConfig = {
    experimental: {
        // workerThreads: false,
        // cpus: 1,

        // reactCompiler: true,
        // after: true,
        // staleTimes: {
        //     dynamic: 30,
        //     static: 180
        // },
        // Automatically bundle external packages in the Pages Router:

        // Opt specific packages out of bundling for both App and Pages Router:

        //optimizePackageImports: ['icon-library'],

    },
    swc: {
        minify: false,
    },
    bundlePagesRouterDependencies: true,
    images: {
        loader: 'custom',
        loaderFile: './image-loader.js',
        remotePatterns: [{ hostname: "utfs.io" }, { hostname: "randomuser.me", protocol: "https", pathname: '/api/portraits/men/**' }],
    },
    // profiler: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    juno: { container: true },

    plugins: [
        addVariablesForColors
    ],
    output: "export",
    distDir: 'build' // Specify your custom build directory here
};

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

const config = isOnChain ? withJuno(coreConfig) : coreConfig;

export default config;