import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import chai from 'eslint-plugin-chai-friendly';

await buildTypeGen('chai', chai, null, { overwrite: true });
