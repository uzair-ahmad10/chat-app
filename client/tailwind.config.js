/** @type {import('tailwindcss').Config} */
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import daisyui from "daisyui";

const projectRoot = dirname(fileURLToPath(import.meta.url));

export default {
  content: [
    resolve(projectRoot, "index.html"),
    resolve(projectRoot, "src/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
