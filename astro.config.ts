import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

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
