import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@layouts": path.resolve(__dirname, "./src/layouts"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@utils": path.resolve(__dirname, "./src/utils"),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});
