import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import viteTsconfigPaths from "vite-tsconfig-paths";
import {
  defineConfig,
  ConfigEnv,
  UserConfig,
  Plugin as VitePlugin,
} from "vite";
import { VitePWA } from "vite-plugin-pwa";
import removeConsole from "vite-plugin-remove-console";

export default defineConfig((env: ConfigEnv): UserConfig => {
  const plugins = [
    react(),
    svgr(),
    viteTsconfigPaths(),
    env.command === "build" &&
      removeConsole({
        includes: ["log", "warn", "error"],
      }),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      strategies: "generateSW",
      includeAssets: [
        "/icons/favicon.ico",
        "/icons/favicon-16x16.png",
        "/icons/favicon-32x32.png",
        "/icons/apple-icon-180x180.png",
        "/splash_screens/*.png",
        "robots.txt",
      ],
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,webp,woff,woff2}",
          "splash_screens/*.png",
        ],
        runtimeCaching: [
          {
            urlPattern: /\.(png|jpg|jpeg|gif|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern:
              /^https:\/\/developers\.kakao\.com\/sdk\/js\/kakao\.min\.js$/,
            handler: "NetworkOnly", // Kakao SDK는 네트워크에서만 로드
          },
          {
            urlPattern: ({ url }) => url.origin === self.location.origin,
            handler: "CacheFirst",
            options: {
              cacheName: "local-assets",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
        ],
      },
    }),
  ].filter(Boolean) as VitePlugin[];

  return {
    plugins,
    cacheDir: "./.vite",
    build: {
      chunkSizeWarningLimit: 1000,
    },
  };
});
