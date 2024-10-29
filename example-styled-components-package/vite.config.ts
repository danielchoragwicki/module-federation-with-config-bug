import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

import packageJson from './package.json';

import react from '@vitejs/plugin-react';

const makeExternalPredicate = (externalArr: string[]) => {
    if (externalArr.length === 0) return () => false;

    const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);

    return (id: string) => {
        return pattern.test(id);
    };
};

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: 'index',
            formats: ['es', 'cjs'],
        },
        minify: 'terser',
        outDir: 'build',
        rollupOptions: {
            external: makeExternalPredicate([
                // @ts-expect-error remove when dependencies are provided
                ...Object.keys(packageJson.dependencies || {}),
                ...Object.keys(packageJson.peerDependencies || {}),
            ]),
            output: {
                entryFileNames: '[name].[format].js',
                exports: 'named',
                preserveModules: true,
            },
        },
        sourcemap: true,
    },
    plugins: [
        tsconfigPaths(),
        react({
            babel: {
                plugins: ['babel-plugin-styled-components'],
            },
        }),
        dts({
            copyDtsFiles: true,
            entryRoot: 'src',
            include: 'src',
        }),
    ],
});
