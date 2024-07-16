import { skeleton } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./dist/lib/**/*.{html,js,mjs}",
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    skeleton({
      themes: [themes.cerberus, themes.catppuccin, themes.pine, themes.rose],
    }),
  ],
};
