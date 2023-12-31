const nextConfig = {
	swcMinify: true,
	experimental: {
		appDir: true,
		fontLoaders: [
			{ loader: "@next/font/google", options: { subsets: ["latin"] } },
		],
		fastRefresh: true,
		serverActions: true,
	},
};

module.exports = nextConfig;
