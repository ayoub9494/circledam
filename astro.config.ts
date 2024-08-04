import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import webVitals from "@astrojs/web-vitals";

// https://astro.build/config
export default defineConfig({
	site:
		process.env.VERCEL_ENV === "production"
			? "https://www.circledam.com/"
			: process.env.VERCEL_URL
				? `https://${process.env.VERCEL_URL}/`
				: "https://localhost:3000/",
	trailingSlash: "ignore",
	integrations: [
		sitemap(),
		UnoCSS({
			injectReset: true,
		}),
		webVitals(),
	],
	output: "hybrid",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
