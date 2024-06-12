/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        IMAGE_DIRECTORY: 'http://127.0.0.1:8000/storage/images',
        API_PATH: 'http://127.0.0.1:8000'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
                pathname: '/storage/**',
            }
        ],
    },
};

export default nextConfig;
