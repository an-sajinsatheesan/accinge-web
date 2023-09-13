/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    reactStrictMode: true, 
    distDir: 'build',
    output: 'export',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
