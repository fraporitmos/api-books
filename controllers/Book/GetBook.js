const mongoose = require("mongoose")
const { BookSchema } = require("../Schemas/BookSchema")

const GetBook = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://root:idat&&2025@cluster0.xrd7l.mongodb.net/")
        const bookSchema = mongoose.model("books",BookSchema)
     
        const filteredBooks = await bookSchema.find({ 
            type: req.params.type
        })
        res.status(200).json(filteredBooks)

    } catch (error) {
        res.status(500).json({
            "msg":`Error, no se pudo conectar a la DB. ${error} `
        })
    }
}

module.exports = {
    GetBook
}

