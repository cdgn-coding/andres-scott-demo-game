/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/game/index.html',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
