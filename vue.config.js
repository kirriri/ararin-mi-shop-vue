module.exports = {
    devServer: {
        host: 'localhost',
        prot: 8080,
        proxy: {
            '/api': {
                target: 'https://www.',
                changeOrigin: false,
            }
        }
    },
}