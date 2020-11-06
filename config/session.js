const secret = config.session.secet

module.exports = (session) => {
	return session({
		secret: secret,
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			secure: false,
			sameSite: 'none',
			maxAge: 1000 * 60 * 60 * 12,
		},
	})
}