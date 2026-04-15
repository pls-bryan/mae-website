import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://example.com",
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
