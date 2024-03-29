const {hash, compare} = require('bcryptjs')
const AppError = require("../utils/appError")
const sqliteConnection = require('../database/sqlite');
const { response } = require('express');

class usersController {
    async create(request, response) {
        try {
            const {name, email, password} = request.body
            const database = await sqliteConnection();
            const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])
            if (checkUserExists) {
                throw new AppError("E-mail already registered.")
            }
            const hashedPassword = await hash(password, 8)
            await database.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword])
            return response.status(201).json()
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    async update(request, response) {
        try {
            const {name, email, password, old_password} = request.body
            const user_id = request.user.id;
        
            const database = await sqliteConnection()
            const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])
        
            if (!user) {
            throw new AppError("User not found")
            }
        
            const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])
        
            if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Email already in use")
            }
        
            user.name = name ?? user.name;
            user.email = email ?? user.email;
        
            if (password && !old_password) {
                throw new AppError("You must inform the old password to define a new one")
            }
        
            if (password && old_password) {
                const checkOldPassword = await compare(old_password, user.password)
            
                if (!checkOldPassword) {
                    throw new AppError('Old password does not match')
                }
            
                user.password = await hash(password, 8)
            
            }
        
            await database.run(`UPDATE users SET name = (?), email = (?), password = (?), updated_at = DATETIME('now') WHERE id = (?)`, [user.name, user.email, user.password, user_id])

        
            return response.json()
    
    } catch (error) {
        return response.status(400).json({ message: error.message });
    }
    }
    
}




module.exports = usersController;

    


    //Index - GET (listar registroS)
    //Show - GET (exibir um registro específico)
    //Create - POST (criar um registro)
    //Update - PUT (atualizar um registro)
    //Delete - DELETE (remover um registro)