const localStrategy = require('./localStrategy');
const kakakoStrategy = require('./kakaoStrategy');

module.exports = (passport) => {
  // session에 mapping되는 정보에 해당 data를 넣어
  passport.serializeUser(
    (user, done) => {
      done(null, user)
    }
  )
  // req.user에 데이터가 들어가
  passport.deserializeUser(
    (user, done) => {
      // 없으면 토큰을 뒤지게
      done(null, user);
    }
  );
  localStrategy(passport);
  kakakoStrategy(passport);
};