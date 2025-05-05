npm create vite@latest nombre-del-proyecto

    js + swv

cd first-proyect
npm install
npm run dev

\*instalar tailwind
npm install tailwindcss @tailwindcss/vite

/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

    	// https://vite.dev/config/
    	export default defineConfig({

plugins: [react(), tailwindcss()],
});

/index.css
@import "tailwindcss";
