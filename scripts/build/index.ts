import { build, type BuildConfig } from 'bun';

const buildConfig: BuildConfig = {
  entrypoints: ['src/index.ts'],
  outdir: 'lib',
};

await build({
  ...buildConfig,
});
