import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
  {
    extends: ["some-other-config-you-use", "prettier"],
  },
]);
