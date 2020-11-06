const KakaoStrategy = require('passport-kakao').Strategy;
module.exports = (passport) => {
    // Kakao Strategy
    passport.use(new KakaoStrategy({
            clientID: config.authentication.kakao.clientID,
            callbackURL: config.authentication.kakao.callbackURL
        },
        async (accessToken, refreshToken, profile, done) => {
            // 토큰 값 저장
            profile.accessToken = accessToken
            profile.refreshToken = refreshToken

            const user_id = profile._json.kakao_account.email || null // 이메일을 ID로
            if (!user_id) {
                // 이메일 없을 시 연동 해제
                const {
                    data
                } = await axios.post('https://kapi.kakao.com/v1/user/unlink', {}, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    },
                })
                // console.log(data)

                // 로그인 에러처리
                return done(null, {
                    error: true,
                    message: '이메일 정보가 있어야 가입가능합니다. 먼저 카카오계정을 등록해주시기 바랍니다'
                })
            }
            return done(null, {
                error: true,
                message: '이메일 정보가 있어야 가입가능합니다. 먼저 카카오계정을 등록해주시기 바랍니다'
            })
        }
    ))
}