module.exports = {
	jwt: {
		secret: 'nules-schedule-secret',
		tokens: {
			access: {
				type: 'access',
				expiresIn: '3h'
			},
			refresh: {
				type: 'refresh',
				expiresIn: '4h'
			}
		}
	}
};
