import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import "uno.css";

import "@unocss/reset/normalize.css";
// reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
import "@unocss/reset/eric-meyer.css";

import "lib-flexible/flexible.js";

const app = createApp(App);

app.mount("#app");
