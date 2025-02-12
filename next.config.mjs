/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['wzaevxnrrqabamgkdxcb.supabase.co']
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript:{
        ignoreBuildErrors: true
    }
};

export default nextConfig;
