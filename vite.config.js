import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { URLAPPEND } from "./src/globalData";

// https://vitejs.dev/config/
export default defineConfig({
  base: URLAPPEND ? `${URLAPPEND}/` : "",
  plugins: [react()],
});
