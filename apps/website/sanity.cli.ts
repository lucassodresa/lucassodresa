import { defineCliConfig } from "sanity/cli";
import { join } from "path";

export default defineCliConfig({
  api: {
    projectId: "jlf6c7o6",
    dataset: "production",
  },
  vite: {
    resolve: {
      alias: {
        "@": join(__dirname, "src"),
      },
    },
  },
});
