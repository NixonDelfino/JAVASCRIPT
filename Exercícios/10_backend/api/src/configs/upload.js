const path = require('path')
const multer = require("multer")
const crypto = require("crypto")


const TEMP_FOLDER = path.resolve(__dirname, "..", "..", "temp")
const UPLOADS_FOLDER = path.resolve(__dirname, "uploads")

const MULTER = {
    storage: multer.diskStorage({
        destination: TEMP_FOLDER,
        filename(request, file, callback){
            
            const fileHash = crypto.randomBytes(10).toString('hex')
            const fileName = `
                ${fileHash}-${file.originalname}
            `

            return callback(null, fileName)

        }
    })
}

module.exports = {
    TEMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER
}