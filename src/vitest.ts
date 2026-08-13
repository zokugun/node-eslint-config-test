import type { Configurator, OptionFiles, OptionIgnores, OptionOverridesFiles, OptionOverridesIgnores, OptionRules } from '@zokugun/eslint-toolkit';

import plugin from 'eslint-plugin-chai-friendly';

import { rules, type VitestRuleOptions } from './rules/vitest.js';

type Options = OptionRules<VitestRuleOptions> & OptionFiles & OptionIgnores & OptionOverridesFiles & OptionOverridesIgnores;

export function vitest(options: Options = {}): Configurator {
	const files = options.overrides?.files ?? [
		'test/**/*.test.?([cm])ts',
		...(options.files ?? []),
	];

	const ignores = options.overrides?.ignores ?? options.ignores ?? [];

	return () => [{
		name: 'zokugun/vitest/rules',
		files,
		ignores,
		plugins: {
			chai: plugin,
		},
		rules: {
			...rules,
			...options.rules,
		},
	}, {
		ignores: ['vitest.config.ts'],
	}];
}
