/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img1.daumcdn.net',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'blog.kakaocdn.net',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
