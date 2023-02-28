const knex = require("../database/knex")
const { compare } = require('bcryptjs')
const AppError = require("../utils/appError.js")
const authConfig = require ("../configs/auth.js")
const { sign } = require("jsonwebtoken")
const { jwt } = require("../configs/auth.js")

class sessionController {

    async create(request, response){
        try{
            const {email, password} = request.body
        
            const user = await knex("users").where({email}).first()

            if (!user) {
                throw new AppError("Incorrect e-mail and/or password");
            }

            const passwordMatches = await compare(password, user.password);

            if (!passwordMatches) {
                throw new AppError ("Incorrect e-mail and/or password");
            }

            const { secret, expiresIn } = authConfig.jwt;

            const token = sign({}, secret, {
                subject: String(user.id),
                expiresIn
            })

            return response.json({user, token})
        } catch (error){
            return response.status(401).json({ message: error.message });
        }
    }

}

module.exports = sessionController