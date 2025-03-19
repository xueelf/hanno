import { build, type BuildConfig } from 'bun';

const config: BuildConfig = {
  entrypoints: ['src/index.ts'],
  outdir: 'lib',
};

await build(config);
