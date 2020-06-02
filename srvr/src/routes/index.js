const fp = require('fastify-plugin');

module.exports = function (route, opts, next) {
	route.get('/', (req, res) => {
		return res.send({ 
			msg: 'Welcome to the Meta Travel Identity API service.'
		});
	});
	next();
};