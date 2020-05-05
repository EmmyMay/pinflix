const jwt = require('jsonwebtoken');
const secret = require('../config')

module.exports = async (ctx, next) => {
    try {

        var authString = ctx.request.headers['authorization'].split(' ');
        var authStr = authString[1];

        await jwt.verify(authStr, secret.jwtSecret)

        return next();
    } catch (error) {
        ctx.response.status = 403
        ctx.body = error;

    }
}