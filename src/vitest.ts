import type { Configurator, DefaultOptions } from '@zokugun/eslint-toolkit';
import type { VitestRuleOptions } from './rules/vitest.js';

import plugin from 'eslint-plugin-chai-friendly';

import { vitestRules } from './rules/vitest.js';

export function vitest(options: DefaultOptions<VitestRuleOptions> = {}): Configurator {
	const files = options.overrides?.files ?? [
		'test/**/*.test.?([cm])ts',
		...(options.files ?? []),
	];

	const ignores = options.overrides?.ignores ?? options.ignores ?? [];

	const rules = options.overrides?.rules ?? {
		...vitestRules,
		...options.rules,
	};

	return () => ({
		name: 'zokugun/vitest/rules',
		files,
		ignores,
		plugins: {
			chai: plugin,
		},
		rules,
	});
}
