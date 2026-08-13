import type { Configurator, OptionFiles, OptionIgnores, OptionOverridesFiles, OptionOverridesIgnores, OptionRules } from '@zokugun/eslint-toolkit';

import plugin from 'eslint-plugin-chai-friendly';

import { type MochaRuleOptions, rules } from './rules/mocha.js';

type Options = OptionRules<MochaRuleOptions> & OptionFiles & OptionIgnores & OptionOverridesFiles & OptionOverridesIgnores;

export function mocha(options: Options = {}): Configurator {
	const files = options.overrides?.files ?? [
		'test/**/*.test.?([cm])ts',
		...(options.files ?? []),
	];

	const ignores = options.overrides?.ignores ?? options.ignores ?? [];

	return () => ({
		name: 'zokugun/mocha/rules',
		files,
		ignores,
		plugins: {
			chai: plugin,
		},
		languageOptions: {
			globals: {
				'after': 'readonly',
				'afterEach': 'readonly',
				'before': 'readonly',
				'beforeEach': 'readonly',
				'describe': 'readonly',
				'it': 'readonly',
			},
		},
		rules: {
			...rules,
			...options.rules,
		},
	});
}
