import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	build: {
		target: 'node16',
		outDir: 'dist',
		minify: false,
		lib: {
			entry: {
				extension: path.resolve(__dirname, 'src/extension.ts'),
				plugin: path.resolve(__dirname, 'node_modules/ts-union-docs-plugin/src/index.ts'),
			},
			formats: ['cjs'],
			fileName: (format, entryName) => `${entryName}.js`,
		},
		rollupOptions: {
			external: ['vscode', 'typescript', 'typescript/lib/tsserverlibrary'],
		},
	},
});
