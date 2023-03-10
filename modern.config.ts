import appTools, { defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/docs/apis/app/config
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [appTools({ bundler: 'experimental-rspack' })],
});
