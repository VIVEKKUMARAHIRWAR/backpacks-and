/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Enable compression for better performance
    compress: true,
};

export default nextConfig;
