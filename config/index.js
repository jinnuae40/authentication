// config/index.js
require('dotenv').config()
module.exports = {
    system: {
        port: 8080
    },
    database: {
        mongodb: {
            host: 'localhost',
            port: 3306
        }
    },
    cache: {
        redis: {
            host: 'localhost',
            port: 5601
        }
    },
    session: {
        secret: "This is an authentication server"
    },
    authentication: {
        kakao: {
            clientID: process.env.KAKAO_CLIENTID,
            callbackURL: process.env.KAKAO_CALLBACKURL
        }
    }
}