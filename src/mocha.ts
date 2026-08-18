import type { Configurator, DefaultOptions } from '@zokugun/eslint-toolkit';
import type { MochaRuleOptions } from './rules/mocha.js';

import plugin from 'eslint-plugin-chai-friendly';

import { mochaRules } from './rules/mocha.js';

export function mocha(options: DefaultOptions<MochaRuleOptions> = {}): Configurator {
	const files = options.overrides?.files ?? [
		'test/**/*.test.?([cm])ts',
		...(options.files ?? []),
	];

	const ignores = options.overrides?.ignores ?? options.ignores ?? [];

	const rules = options.overrides?.rules ?? {
		...mochaRules,
		...options.rules,
	};

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
		rules,
	});
}
