import express from 'express'
import multer from 'multer'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const venueImgDir = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/images/venues/');
        },
        filename: (req, file, next) => {
            const ext = path.extname(file.originalname)
            const uniqueFileName = uuidv4() + ext
            next(null, uniqueFileName)
        }
    }),
    fileFilter: (req, file, next) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (allowedTypes.includes(file.mimetype)) {
            next(null, true)
        } else {
            next(new Error('Invalid file type. Only JPEG and PNG are allowed'))
        }
    }
})

const Router = express.Router()

Router.post("/", venueImgDir.array('venue-images', 5), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).send("No files were uploaded.");
        }
        const venueImages = req.files.map(file => file.filename)
        res.json({ "status": "success", venueImages: venueImages }).status(200)
    } catch (e) {
        res.json({ "error": e.message, "status": "failed" }).status(400)
    }
});


export default Router