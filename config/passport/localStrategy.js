const qs = require('qs')
const axios = require('axios')
const LocalStrategy = require('passport-local').Strategy;
module.exports = (passport) => {
    passport.use(
        new LocalStrategy({
                usernameField: 'id',
                passwordField: 'pw',
                session: false
            },
            async (id, pw, done) => {
                try {
                    // pass
                } catch (e) {
                    // pass
                }
            }
        )
    )
}