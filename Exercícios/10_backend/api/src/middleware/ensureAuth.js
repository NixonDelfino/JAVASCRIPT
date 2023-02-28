const { verify } = require('jsonwebtoken')
const AppError = require('../utils/appError')
const authConfig = require('../configs/auth')

function ensureAuth(request, response, next) {
    try {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            throw new AppError('JWT token not informed')
        }

        const [, token] = authHeader.split(" ");

        try {
            const {sub: user_id} = verify(token, authConfig.jwt.secret)

            request.user = {
                id: Number(user_id)
            };
            return next();

        } catch {
            throw new AppError('Invalid JWT token')
        }

    } catch (error) {
        return response.status(401).json({ message: error.message });
    }
}

module.exports = ensureAuth;