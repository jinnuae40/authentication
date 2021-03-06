exports.isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) next();
	else res.status(401).json({
		message: 'Login required'
	});
};
exports.isNotLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) next();
	else {
		res.status(403).json(req.user);
	}
};