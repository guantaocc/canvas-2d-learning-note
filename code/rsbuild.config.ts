import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  html:{
    template: './index.html'
  },
  source: {
    // Specify the entry file
    entry: {
      index: './main.ts',
    },
  },
});