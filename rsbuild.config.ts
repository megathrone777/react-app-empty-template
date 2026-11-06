import { existsSync, rmSync } from "fs";
import { resolve } from "path";

import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

const config = defineConfig(({ envMode }) => {
  const isProduction: boolean = envMode === "production";

  return {
    dev: {
      client: {
        overlay: {
          errors: true,
          runtime: true,
        },
      },

      cliShortcuts: {
        help: false,
      },

      progressBar: true,
    },

    html: {
      template: "./public/index.html",
    },

    performance: {
      removeConsole: isProduction,
    },

    plugins: [
      pluginReact({
        reactCompiler: true,
      }),
      pluginTypeCheck(),
      {
        name: "exclude-kitchensink-from-build",
        setup: ({ onAfterBuild }): void => {
          onAfterBuild((): void => {
            const copied = resolve(import.meta.dirname, "dist/kitchensink.html");

            if (existsSync(copied)) rmSync(copied);
          });
        },
      },
    ],

    resolve: {
      alias: {
        "@": resolve(import.meta.dirname, "src"),
        "@/ui": resolve(import.meta.dirname, "src/theme/components"),
      },
      extensions: [".js", ".ts", ".tsx"],
    },

    server: {
      host: true,
      open: true,
    },

    source: {
      entry: {
        index: resolve(import.meta.dirname, "src/index.tsx"),
      },

      exclude: [resolve(import.meta.dirname, "dist")],
    },
  };
});

export default config;
