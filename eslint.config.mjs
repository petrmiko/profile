import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	prettier,
	// Override default ignores of eslint-config-next.
	globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
	{
		settings: { react: { version: '19.2' } },
		rules: {
			semi: ['error', 'never'],
			indent: ['error', 'tab'],
		},
	},
	{
		files: ['**/*.tsx'],
		extends: [betterTailwindcss.configs.recommended],
		settings: {
			'better-tailwindcss': { entryPoint: 'styles/globals.css' },
		},
		rules: {
			'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
		},
	},
])

export default eslintConfig
