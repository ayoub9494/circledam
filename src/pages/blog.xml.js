import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		title: "Med Ayoub Alouane",
		description: "Articles sur la politique, l'économie et la géopolitique",
		stylesheet: false,
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.slug}/`,
		})),
		customData: "<language>en-us</language>",
		canonicalUrl: "https://www.circledam.com",
	});
}
