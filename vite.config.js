import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [],
      rules: [
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
        [/^p-(\d+)$/, (match) => ({ padding: `${match[1] / 4}rem` })],
      ],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
});
