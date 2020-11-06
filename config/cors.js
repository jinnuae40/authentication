module.exports = (cors) => {
    return cors({
        origin: true,
        credentials: true,
        exposedHeaders: ['set-cookie', 'access-control-allow-origin', 'vary',
            'content-length', 'cookie', 'access-control-expose-headers'
        ],
    })
}