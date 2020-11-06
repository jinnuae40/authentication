module.exports = (swaggerJSDoc, swaggerUi, app) => {
    const swaggerDefinition = {
        info: {
            title: 'Authentication',
            version: '1.0.0',
            description: '권한 인증 및 제어를 손쉽게 하기 위한 API입니다.'
        },
        host: 'localhost',
        basePath: '/'
    };
    const options = {
        swaggerDefinition,
        apis: [
            `${basePath}/config/swagger/*Route.js`,
        ]
    };
    const swaggerSpec = swaggerJSDoc(options);
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};