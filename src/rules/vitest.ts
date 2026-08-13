import type { TypeScriptRuleOptions } from '@zokugun/eslint-config-ts';
import type { CommonsRuleOptions } from '@zokugun/eslint-toolkit';
import type { RuleOptions as ChaiRuleOptions } from '../typegens/chai.js';

export type VitestRuleOptions = ChaiRuleOptions | CommonsRuleOptions | TypeScriptRuleOptions;

export const rules: Partial<VitestRuleOptions> = {
	'ts/explicit-function-return-type': [
		'off',
	],
	'ts/explicit-module-boundary-types': [
		'off',
	],
	'ts/no-explicit-any': [
		'off',
	],
	'no-unused-expressions': [
		'off',
	],
	'ts/no-unused-expressions': [
		'off',
	],
	'chai/no-unused-expressions': [
		'error',
	],
	'ts/no-unsafe-assignment': [
		'off',
	],
	'ts/no-unsafe-type-assertion': [
		'off',
	],
	'ts/unbound-method': [
		'off',
	],
};
