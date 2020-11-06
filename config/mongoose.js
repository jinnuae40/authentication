// config/mongoose.js
const host = config.database.mongodb.host
const port = config.database.mongodb.port
module.exports = async (mongoose) => {
    try {
        await mongoose
            .connect(host, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false
            })
        logger.info({
            label: 'mongodb',
            message: `Successfully connected to ${host}:${port}`
        })
    } catch (err) {
        logger.error({
            label: 'mongodb',
            message: `Failed to connect ${host}:${port}`
        })
    }
}