/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},
	images: {
		domains: [
			'i.ibb.co',
			'flowbite.com',
			'firebasestorage.googleapis.com',
			'storage.googleapis.com'
		],
		minimumCacheTTL: 31536000,
		formats: ['image/webp']
	}
};

module.exports = nextConfig;
