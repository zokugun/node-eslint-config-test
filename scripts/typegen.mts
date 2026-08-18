import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import chai from 'eslint-plugin-chai-friendly';

await buildTypeGen({
	name: 'chai',
	plugin: chai,
	overwrite: true,
});
